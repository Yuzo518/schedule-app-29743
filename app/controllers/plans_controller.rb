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

  private

  def plan_params
    params.permit(:title, :start_time, :ending_time, :date_pattern, :comment, user_ids: []).merge(master_id: current_user.id)
  end
end
