class AppointmentsController < ApplicationController
    before_action :get_models, except: [:show, :index,:destroy]
    before_action :set_appointment, only: [:show, :update, :destroy]
    def index 
        @appoint = Appointment.all
        @student = Student.find(params[:student_id])
        # @teacher = Teacher.find(params[:teacher_id])

        # if @student
        render json: @student.appointments, include: :teacher
        # else
        # render json: @teacher.appointments, include: :student
        # end
    end

    def show 
        render json: @appoint
    end

    def create 
        # if @teachers.pluck(:time).include? params[:time]
            @appoint = Appointment.new(appoint_params)
            @appoint.teacher = @teacher
            @appoint.student = @student
            @appoint.save

            render json: @appoint
        # else
        #     render json: {error: "time not available"}
        # end
    end

    def update 
        @appoint.update(appoint_params)
        render json: @appoint
    end

    def destroy 
        if localStorage.getItem('role') == 'teacher'
        @teacher = Teacher.find(params[:id])
        @appoint.destroy
        end
    end

    private

    def set_appointment 
        @appoint = Appointment.find(params[:id])
    end

    def get_models
        @student = Student.find(params[:student_id])
        @teacher = Teacher.find(params[:teacher_id])
    end 

    def appoint_params
        params.require(:appointment).permit(:student_id, :teacher_id, :time)
    end
end
