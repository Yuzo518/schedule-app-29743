class PlansController < ApplicationController
  def index
    @plans = Plan.all
    @plan = Plan.new
  end
end
