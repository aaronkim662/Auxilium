class AvailabilitiesController < ApplicationController
    before_action :get_models, except: [:show, :index,:destroy]
    before_action :set_avail, only: [:show, :update, :destroy]

    def index
        @avail = Availability.all
        render json: @avail
    end

    def show
        @avail = Availability.find(params[:id])
        render json: @avail
    end

    def create 
        @avail = Availability.new(avail_params)
        @avail.teacher = @teacher
        @avail.save

        render json: @avail
    end

    def update
        @avail.update(avail_params)

        render json: @avail
    end

    def destroy
        @avail.destroy
    end
    
    private

    def set_avail 
        @avail = Availability.find(params[:id])
    end

    def get_models 
        @teacher = Teacher.find(params[:teacher_id])
    end

    def avail_params
        params.require(:availability).permit(:time, :teacher_id) 
        # strong
      end
end
