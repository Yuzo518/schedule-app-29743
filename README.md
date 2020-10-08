# README

# テーブル設計

## users テーブル

| Column    | Type    | Options     |
| --------- | ------- | ----------- |
| name      | string  | null: false |
| email     | string  | null: false |
| password  | string  | null: false |

### Association

- has_many :plan_users
- has_many :plans, through: plan_users

## plans テーブル

| Column        | Type       | Options      |
| ------------- | ---------- | ------------ |
| title         | string     | null: false  |
| date_pattern  | string     | null: false  |
| start_time    | datetime   | null: false  |
| ending_time   | datetime   | null: false  |
| comment       | text       |              |
| master_id     | integer    | null: false  |

### Association

- has_many :plan_users
- has_many :users, through: plan_users

## plan_users テーブル

| Column | Type       | Options                        |
| ------ | ---------- | ------------------------------ |
| plan   | references | null: false, foreign_key: true |
| user   | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :plan

