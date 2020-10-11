class PlansController < ApplicationController
  before_action :find_plans
  before_action :calc_users_count, only: [:edit, :update]
  before_action :find_plan, only: [:show]
  before_action :move_index_check, only:[:edit, :update]

  def index
    @plan = Plan.new
  end

  def create
    @plan = Plan.new(plan_params)
    if @plan.save
      redirect_to root_path
    else
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
      render 'edit'
    end
  end

  private

  def plan_params
    params.permit(:title, :start_time, :ending_time, :date_pattern, :comment, user_ids: []).merge(master_id: current_user.id)
  end

  def edit_plan_params
    params.require(:plan).permit(:title, :start_time, :ending_time, :date_pattern, :comment, user_ids: []).merge(master_id: current_user.id)
  end

  def find_plans
    @plans = Plan.all
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
    if !(@plan.master_id == current_user.id)
      redirect_to root_path
    end
  end
end
