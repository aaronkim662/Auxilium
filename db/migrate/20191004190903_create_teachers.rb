class CreateTeachers < ActiveRecord::Migration[6.0]
  def change
    create_table :teachers do |t|
      t.string :username
      t.string :password
      t.string :name
      t.integer :years_of_experience
      t.date :time_availability

      t.timestamps
    end
  end
end
