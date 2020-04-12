class Api::DetailsController < ApplicationController
  def show
    @recipe = Recipe.find params[:id]
    render :json => {
      recipe: @recipe
    }
  end
end