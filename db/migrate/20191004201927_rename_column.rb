class RenameColumn < ActiveRecord::Migration[6.0]
  def change

  change_table :teachers do |t|
    t.rename :password, :password_digest
  end
  
  change_table :students do |t|
    t.rename :password, :password_digest
  end
  end
end
