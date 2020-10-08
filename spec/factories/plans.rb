FactoryBot.define do
  factory :plan do
    title         { 'TestTitle' }
    date_pattern  { '通常' }
    start_time    { Time.now }
    ending_time   { Time.now }
    comment       { Faker::Team.name }
    master_id     { 2 }
  end
end
