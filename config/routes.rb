Rails.application.routes.draw do
  root "root#index"

  namespace :api, defaults: { format: :json } do
    resources :messages, only: [:index]
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
