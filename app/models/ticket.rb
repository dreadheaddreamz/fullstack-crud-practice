class Ticket < ApplicationRecord
  STATUSES = ["open", "in_progress", "closed"]

  validates :title, presence: true
  validates :status, inclusion: { in: STATUSES }


  scope :by_status, ->(status) { where(status: status) }
end