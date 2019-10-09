class Student < ApplicationRecord
    has_secure_password
    has_many :appointments, dependent: :destroy
    has_many :teachers, through: :appointments

    validates :username, presence: true, uniqueness: true
    validates :password, length: { minimum: 6 }, on: :create

end
