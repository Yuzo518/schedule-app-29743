class PlansController < ApplicationController
  def index
    @plans = Plan.all
    @plan = Plan.new
  end

  def create
    binding.pry
    @plan = Plan.new(plan_params)
    binding.pry
    if @plan.save
      binding.pry
      redirect_to root_path
    else
      binding.pry
      @plans = Plan.all
      render :index
    end
  end

  private

  def plan_params
    params.permit( :title, :start_time, :ending_time, :date_pattern, :comment, user_ids: []).merge(master_id: current_user.id)
  end

end
