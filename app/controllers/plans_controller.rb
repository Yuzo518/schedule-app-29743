class PlansController < ApplicationController
  before_action :find_plans, only: [:show, :edit, :index]
  before_action :calc_users_count, only: [:edit, :update]
  before_action :find_plan, only: [:show, :destroy]
  before_action :move_index_check, only: [:edit, :update, :destroy]

  def index
    @plan = Plan.new
  end

  def create
    @plan = Plan.new(plan_params)
    if @plan.save
      redirect_to root_path
    else
      find_plans
      render :index
    end
  end

  def show
  end

  def edit
  end

  def update
    if @plan.update(edit_plan_params)
      redirect_to root_path
    else
      find_plans
      render 'edit'
    end
  end

  def destroy
    if @plan.destroy
      redirect_to root_path
    else
      find_plans
      render 'show'
    end
  end

  def search
  end

  def reference
    @plans = Plan.reference(params[:user_ids])
    @plan = Plan.new
    render :index
  end

  private

  def plan_params
    params.permit(:title, :start_time, :ending_time, :date_pattern, :comment, user_ids: []).merge(master_id: current_user.id)
  end

  def edit_plan_params
    params.require(:plan).permit(:title, :start_time, :ending_time, :date_pattern, :comment, user_ids: []).merge(master_id: current_user.id)
  end

  def find_plans
    plan_users = PlanUser.where(user_id: current_user.id)
    plan_num = []
    plan_users.each do |user|
      plan_num << user.plan_id
    end
    plan_num = plan_num.uniq
    @plans = []
    plan_num.each do |plan_id|
      @plans << Plan.find(plan_id)
    end
  end

  def find_plan
    @plan = Plan.find(params[:id])
  end

  def calc_users_count
    @plan = Plan.find(params[:id])
    # 選択されていないselectを表示させる回数を決める
    @users_count = 6 - @plan.users.count
  end

  def move_index_check
    find_plan
    redirect_to root_path unless @plan.master_id == current_user.id
  end
end
