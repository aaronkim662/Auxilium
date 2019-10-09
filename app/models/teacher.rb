class Teacher < ApplicationRecord
    has_secure_password
    has_many :availabilities, dependent: :destroy
    has_many :appointments, dependent: :destroy
    has_many :students, through: :appointments

    validates :username, presence: true, uniqueness: true
    validates :password, length: { minimum: 6 }, on: :create 
    
end
