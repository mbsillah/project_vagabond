class AddPhotoUrlToCity < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :photo_url, :string
  end
end
