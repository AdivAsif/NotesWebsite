Rails.application.routes.draw do
  devise_for :users
  resources :tasks
  resources :notes
  root 'home#home'
  get 'contact', to: 'home#contact'
  post 'request_contact', to: 'home#request_contact'
  get 'notes', to: 'notes#index'
  get 'tasks', to: 'tasks#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
