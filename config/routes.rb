Rails.application.routes.draw do
  root to: "plans#index"
  devise_for :users
  resources :plans do
    collection do
      get 'reference'
    end
  end
  #get '/plans/search/:select_id/:user_id', to: 'plans#search'
end
