require 'rails_helper'

RSpec.describe Plan, type: :model do
  describe '#create' do
    before do
      @plan = FactoryBot.build(:plan)
    end
    it 'title,date_pattern,start_time,ending_time,master_idが存在すれば登録できる' do
      expect(@plan).to be_valid
    end

    it 'titleが空では登録できないこと' do
      @plan.title = nil
      @plan.valid?
      expect(@plan.errors.full_messages).to include("Title can't be blank")
    end

    it 'date_patternが空では登録できないこと' do
      @plan.date_pattern = nil
      @plan.valid?
      expect(@plan.errors.full_messages).to include("Date pattern can't be blank")
    end

    it 'start_timeが空では登録できないこと' do
      @plan.start_time = nil
      @plan.valid?
      expect(@plan.errors.full_messages).to include("Start time can't be blank")
    end

    it 'ending_timeが空では登録できないこと' do
      @plan.ending_time = nil
      @plan.valid?
      expect(@plan.errors.full_messages).to include("Ending time can't be blank")
    end

    it 'commentが空でも登録できること' do
      @plan.comment = nil
      expect(@plan).to be_valid
    end

    it 'master_idが空では登録できないこと' do
      @plan.master_id = nil
      @plan.valid?
      expect(@plan.errors.full_messages).to include("Master can't be blank")
    end

    it 'titleの入力文字数は21文字以上だと登録できないこと' do
      @plan.title = Faker::Number.number(digits: 21)
      @plan.valid?
      expect(@plan.errors.full_messages).to include('Title is too long (maximum is 20 characters)')
    end

    it 'commentの文字数は501文字以上だと登録できないこと' do
      @plan.comment = Faker::Number.number(digits: 501)
      @plan.valid?
      expect(@plan.errors.full_messages).to include('Comment is too long (maximum is 500 characters)')
    end
  end
end
