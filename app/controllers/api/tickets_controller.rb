module Api
    class TicketsController < Api::BaseController

      def index
        tickets = Ticket.all
        tickets = tickets.where(status: params[:status]) if params[:status].present?
        render json: tickets
      end

      def create
        ticket = Ticket.new(ticket_params)

        if ticket.save
          TicketNotificationJob.perform_later(ticket.id)
          render json: ticket, status: :created
        else
          render json: ticket.errors, status: :unprocessable_entity
        end
      end

      def show
        ticket = Ticket.find(params[:id])
        render json: ticket
      end

      def update
        ticket = Ticket.find(params[:id])

        if ticket.update(ticket_params)
          render json: ticket
        else
          render json: ticket.errors, status: :unprocessable_entity
        end
      end

      def destroy
        Ticket.find(params[:id]).destroy
        head :no_content
      end

      private

      def ticket_params
        params.require(:ticket).permit(:title, :description, :status)
      end
    end
  end
end