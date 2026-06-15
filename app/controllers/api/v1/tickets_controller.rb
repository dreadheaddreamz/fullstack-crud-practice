class Api::V1::TicketsController < ApplicationController

  def index
    tickets = Ticket.all
    tickets = tickets.where(status: params[:status]) if params[:status].present?

    render json: tickets
  end

  def create
    ticket = Ticket.new(ticket_params)

    if ticket.save
      render json: ticket, status: :created
    else
      render json: ticket.erros, status: :not_created
  end

  def update
    ticket = Ticket.find(params[:id])

    if ticket.update(ticket_params)
      render json: ticket
    else
      render json: ticket.errors, status: :not_updated
    end
  end

  def destroy
    ticket.find(params[:id])
    head :no_content
  end
  
  private

  def ticket_params
    params.require(:ticket).permit(:title, :description, :status)
  end
end
end