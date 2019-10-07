class AvailabilitiesController < ApplicationController

    def index
        @avail = Availability.all
        render json: @avail
    end

    def show
        @avail = Availability.find(params[:id])
        render json: @avail
    end

    def create 
        @avail = Availabilitiy.new(avail_params)
        render json @avail
    end

    def update

    private

    def avail_params
        params.require(:Availability).permit(:time, :teacher_id) 
        # strong
      end
end
