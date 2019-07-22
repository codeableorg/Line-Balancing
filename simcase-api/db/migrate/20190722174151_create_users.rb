class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email
      t.string :token
      t.integer :total_score

      t.timestamps
    end
  end
end
