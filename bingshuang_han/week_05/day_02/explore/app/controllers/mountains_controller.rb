class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all

  end
  def new

  end
  def create
    mountain = Mountain.new
    mountain.name = params[:name]
    mountain.country = params[:country]
    mountain.height = params[:height]
    mountain.image = params[:image]
    mountain.intro = params[:intro]
    mountain.save

    redirect_to mountains_path


  end
  def show
    @mountain = Mountain.find params[:id]

  end


  def edit
    @mountain = Mountain.find params[:id]

  end
  def update
    mountain = Mountain.find params[:id]
    mountain.update :name => params[:name], :country => params[:country],:height => params[:height],:image => params[:image],:intro => params[:intro]
    redirect_to mountain_path


  end

  def delete
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path

  end



end
