class CreateCities < ActiveRecord::Migration[5.1]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :description
      t.integer :population

      t.timestamps
    end
  end
end
