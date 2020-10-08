class Plan < ApplicationRecord
  # アソシエーション
  has_many :plan_users
  has_many :users, through: :plan_users
end
