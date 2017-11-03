class Post < ApplicationRecord
  belongs_to :city
  validates :title,  { in: 1..200 }
  validates :text, presence :true
end
