class Api::UsersController < ApplicationController
  def show
    if session[:user_id].to_s == params[:id]

      @response = Recipe.find_by_sql(["
      SELECT Recipes.id, label, weekday, energies, carbs, fat, protein, fiber, img_url, src_url, health_labels, ingredients 
      FROM Recipes 
      Right OUTER JOIN Nutrients ON Recipes.id=Nutrients.recipe_id 
      join user_recipes on Recipes.id=user_recipes.recipe_id where user_recipes.user_id=?",params[:id]])

      render :json => { :data => @response }
    else 
      render :json => { :error => "Only owner can view the dashboard" }
    end
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      # redirect user to home page after signup
      redirect_to 'http://localhost:3000'
    else
      # redirect user to home page after signup failed
      redirect_to 'http://localhost:3000/signup'
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end

