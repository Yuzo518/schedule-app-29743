class CreatePlans < ActiveRecord::Migration[6.0]
  def change
    create_table :plans do |t|
      t.string    :title,         null: false
      t.string    :date_pattern,  null: false
      t.datetime  :start_time,    null: false
      t.datetime  :ending_time,   null: false
      t.text      :comment
      t.integer   :master_id,     null: false
      t.timestamps
    end
  end
end
