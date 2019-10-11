class StudentsController < ApplicationController
  before_action :set_student, only: [:show, :update, :destroy]
  before_action :authorize_request_student, except: [ :create, :destroy, :index, :login, :show]


  # GET /students
  def index
    @students = Student.all

    render json: @students
  end

  # GET /students/1
  def show
    render json: @student
  end

  # POST /students
  def create
    @student = Student.new(student_params)

    if @student.save
      token = encode(student_id: @student.id, username: @student.username)
      render json: { student: @student, token: token }, status: :ok
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /students/1
  def update
    if @student.update(student_params)
      render json: @student
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end

  # DELETE /students/1
  def destroy
    @student.destroy
  end

  def login
    @student = Student.find_by_username(student_params[:username])
    if @student.authenticate(student_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode(student_id: @student.id, username: @student.username)
      render json: { student: @student, token: token }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  def verify
    render json: @current_user, status: :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_student
      @student = Student.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def student_params
      params.require(:student).permit(:username, :password, :name, :program, :cohort, :email)
    end
end
