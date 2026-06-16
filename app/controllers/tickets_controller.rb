class TicketsController < ApplicationController
  def index
    @tickets = Ticket.all
  end

   def show
    @ticket = Ticket.find(params[:id])
  end

  def create
    ticket = Ticket.create!(ticket_params)
    render json: ticket
  end

  private

  def ticket_params
    params.require(:ticket).permit(:title, :description, :status)
  end
end