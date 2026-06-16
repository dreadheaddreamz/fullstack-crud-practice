class TicketNotificationJob < ApplicationJob
  queue_as :default

  def perform(*args)
    ticket = Ticket.find(ticket_id)

    Rails.logger.info(" Background Job: Ticket created - #{ticket.id}")
  end
end
