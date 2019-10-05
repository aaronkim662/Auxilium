class CreateAvailabilities < ActiveRecord::Migration[6.0]
  def change
    create_table :availabilities do |t|
      t.string :time
      t.references :teacher, null: false, foreign_key: true

      t.timestamps
    end
  end
end
