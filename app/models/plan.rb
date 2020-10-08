class Plan < ApplicationRecord
  # アソシエーション
  has_many :plan_users
  has_many :users, through: :plan_users

   # バリデーション
   validates :title, presence: true
   validates :date_pattern, presence: true
   validates :start_time, presence: true
   validates :ending_time, presence: true
   validates :master_id, presence: true
end
