class PlansController < ApplicationController
  def index
    @plans = Plan.all
    @plan = Plan.new
  end

  def create
    @plan = Plan.new(plan_params)
    if @plan.save
      redirect_to root_path
    else
      @plans = Plan.all
      render :index
    end
  end

  def show
    @plan = Plan.find(params[:id])
    @plans = Plan.all
  end

  def edit
    @plan = Plan.find(params[:id])
    @plans = Plan.all
    # 選択されていないselectを表示させる回数を決める
    @users_count = 6 - @plan.users.count
  end

  def update
    @plan = Plan.find(params[:id])
    if @plan.update(edit_plan_params)
      redirect_to root_path
    else
      @plans = Plan.all
      # 選択されていないselectを表示させる回数を決める
      @users_count = 6 - @plan.users.count
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
end
