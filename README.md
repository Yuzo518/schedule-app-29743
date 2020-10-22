<h2 align="center">Schedule-APP</h2>

![アプリトップページ]()

## アプリケーション概要

[スケジュール管理アプリ](https://schedule-app-29743.herokuapp.com/)

### テスト用アカウント

|ユーザー名|メールアドレス|パスワード|
|:--|:--|:--:|
|User01|user01@email.com|pass1234|
|TeamA|teama@email.com|pass1234|

### 利用方法
1. ユーザーを新規登録
1. 予定を新規登録
1. 予定がカレンダーに表示されます


## 目指した課題解決
複数のユーザーの予定の確認及び予定管理

## 洗い出した要件

|機能|目的|詳細|
|:--|:--|:--|
|ユーザー管理機能|ユーザー管理を行うため|新規登録/ログイン・ログアウト|
|予定管理機能|予定管理を行うため||
|カレンダー表示機能|予定一覧をカレンダー表示にするため||
|管理者機能|管理者の権限を付与するため|（未実装）|
|場所管理機能|予定に場所選択機能を追加するため|（未実装）|
|所属グループ管理機能|ユーザーが所属するグループを選択できるようにするため|（未実装）|
|ファイル添付機能|予定にファイルを添付できるようにするため|（未実装）|

## 実装した機能についてのGIFと説明
- ユーザー新規登録

![新規登録]()

- ユーザーログイン

![ログイン]()

- 新規予定登録

![予定登録]()

- 予定詳細確認

![予定詳細]()

- 予定変更

![予定変更]()

- 予定削除

![予定削除]()

- ユーザー検索機能

## 実装予定の機能
- 管理者機能（未実装）
- 場所管理機能（未実装）
- 所属グループ管理機能（未実装）
- ファイル添付機能（未実装）

## データベース設計

### users テーブル

| Column    | Type    | Options     |
| --------- | ------- | ----------- |
| name      | string  | null: false |
| email     | string  | null: false |
| password  | string  | null: false |

#### Association

- has_many :plan_users
- has_many :plans, through: plan_users

### plans テーブル

| Column        | Type       | Options      |
| ------------- | ---------- | ------------ |
| title         | string     | null: false  |
| date_pattern  | string     | null: false  |
| start_time    | datetime   | null: false  |
| ending_time   | datetime   | null: false  |
| comment       | text       |              |
| master_id     | integer    | null: false  |

#### Association

- has_many :plan_users
- has_many :users, through: plan_users

### plan_users テーブル

| Column | Type       | Options                        |
| ------ | ---------- | ------------------------------ |
| plan   | references | null: false, foreign_key: true |
| user   | references | null: false, foreign_key: true |

#### Association

- belongs_to :user
- belongs_to :plan

## ローカルでの動作方法
