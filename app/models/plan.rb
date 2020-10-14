class Plan < ApplicationRecord
  # アソシエーション
  has_many :plan_users
  has_many :users, through: :plan_users, dependent: :destroy

  def self.reference(select_users)
    # 選択したユーザーのidをまとめる
    user_ids = []
    select_users.each do |user_id|
      if !(user_id.to_i == 0)
        user_ids << User.find(user_id.to_i)
      end
    end
    user_ids = user_ids.uniq
    # plan_userテーブルからplan_idを取り出す
    plan_ids = []
    user_ids.each do |user|
      plan_ids << PlanUser.where(user_id: user.id)
    end
    plan_ids = plan_ids.uniq
    # planテーブルからレコードを取り出す
    plans = []
    plan_ids.each do |plan_user|
      plan_user.each do |plan|
        plans << Plan.find(plan.plan_id)
      end
    end
    plans = plans.uniq
    plans
  end
  
  # バリデーション
  validates :title, presence: true, length: { maximum: 20 }
  validates :date_pattern, presence: true
  validates :start_time, presence: true
  validates :ending_time, presence: true
  validates :master_id, presence: true
  validates :comment, length: { maximum: 500 }
end
