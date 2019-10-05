class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :username
      t.string :password
      t.string :name
      t.string :program
      t.string :cohort

      t.timestamps
    end
  end
end
