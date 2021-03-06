class TareasController < ApplicationController
 
before_action :set_tarea, except: [:index, :new, :create]

  def index
  	@tareas = Tarea.all
  	#select * from tareas 
  end
  def new
  	@tarea = Tarea.new  	
  end

  def create
  	@tarea = Tarea.new(tarea_params)
    if @tarea.save
      redirect_to @tarea
    else
        render :new
    end  
  end

  def show
#   @tarea = Tarea.find(params[:id])
    #select * from tareas where id=:id    
  end

  def destroy
#   @tarea = Tarea.find(params[:id])
    @tarea.destroy
    redirect_to tareas_path
  end

  def edit
  #  @tarea = Tarea.find(params[:id])
  end

  def update
    @tarea = Tarea.find(params[:id])
    if @tarea.update(tarea_params)
    redirect_to @tarea
    else
    render :edit
    end  
  end
 
 private
  def set_tarea
    @tarea = Tarea.find(params[:id])
  end

  def tarea_params
    params.require(:tarea).permit(:titulo, :descripcion)  
  end

end