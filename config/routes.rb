Rails.application.routes.draw do
  resources :students
  resources :teachers
  resources :availabilities
  
  resources :teachers do  
    resources :availabilities
  end

  resources :students do 
    resources :teachers do 
      resources :appointments
    end
  end

  post '/auth/login/teachers', to: 'teachers#login'
  post '/auth/login/students', to: 'students#login'
  

  get '/auth/verify/teachers', to: 'teachers#verify' 
  get '/auth/verify/students', to: 'students#verify' 

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
