class TeachersController < ApplicationController
  before_action :set_teacher, only: [:show, :update, :destroy]
  # before_action :authorize_request, except: [:create, :login]


  # GET /teachers
  def index
    @teachers = Teacher.all

    render json: @teachers
  end

  # GET /teachers/1
  def show
    render json: @teacher
  end

  # POST /teachers
  def create
    @teacher = Teacher.new(teacher_params)

    if @teacher.save
      token = encode(teacher_id: @teacher.id, username: @teacher.username)
      render json: { teacher: @teacher, token: token }, status: :ok
    else
      render json: @teacher.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /teachers/1
  def update
    if @teacher.update(teacher_params)
      render json: @teacher
    else
      render json: @teacher.errors, status: :unprocessable_entity
    end
  end

  # DELETE /teachers/1
  def destroy
    @teacher.destroy
  end

  def login
    @teacher = Teacher.find_by_username(teacher_params[:username])
    if @teacher.authenticate(teacher_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode(teacher_id: @teacher.id, username: @teacher.username)
      render json: { teacher: @teacher, token: token }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  def verify
    render json: @current_user, status: :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_teacher
      @teacher = Teacher.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def teacher_params
      params.require(:teacher).permit(:username, :password,:name,:years_of_experience,:time_availability) 
      # strong
    end
end
