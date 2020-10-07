Rails.application.routes.draw do
  root to: "plans#index"
  devise_for :users
end
