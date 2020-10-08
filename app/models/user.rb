class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # nameが必須
  validates :name, presence: true

  # アソシエーション
  has_many :plan_users
  has_many :plans, through: :plan_users
end
