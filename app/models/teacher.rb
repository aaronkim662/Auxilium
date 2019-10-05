class Teacher < ApplicationRecord
    has_secure_password
    has_many :availabilties
    has_and_belongs_to_many :students, through: :appointments

    validates :username, presence: true, uniqueness: true
    validates :password, length: { minimum: 6 }
    
end
