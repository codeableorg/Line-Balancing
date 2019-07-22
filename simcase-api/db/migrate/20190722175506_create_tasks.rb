class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name
      t.integer :time
      t.integer :default_station
      t.integer :solution_station
      t.references :scenarios, foreign_key: true

      t.timestamps
    end
  end
end
