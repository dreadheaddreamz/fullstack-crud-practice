class TicketsController < ApplicationController
  def index_page
  render json: Ticket.all
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
