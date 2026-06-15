const API_URL = "http://localhost:3000/api/v1/tickets";

// Load all tickets on page load
document.addEventListener("DOMContentLoaded", () => {
  loadTickets();

  const form = document.getElementById("ticketForm");
  if (form) {
    form.addEventListener("submit", createTicket);
  }
});

// GET /api/v1/tickets
async function loadTickets() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch tickets");
    }

    const tickets = await response.json();

    const container = document.getElementById("ticketsList");
    container.innerHTML = "";

    tickets.forEach(ticket => {
      const div = document.createElement("div");
      div.classList.add("ticket");

      div.innerHTML = `
        <h3>${ticket.title}</h3>
        <p>${ticket.description}</p>
        <p>Status: ${ticket.status}</p>
        <hr />
      `;

      container.appendChild(div);
    });

  } catch (err) {
    console.error("Error loading tickets:", err);
  }
}

// POST /api/v1/tickets
async function createTicket(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const status = document.getElementById("status").value;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ticket: {
          title,
          description,
          status
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Server error:", errorData);
      throw new Error("Failed to create ticket");
    }

    // reset form
    document.getElementById("ticketForm").reset();

    // refresh list
    loadTickets();

  } catch (err) {
    console.error("Error creating ticket:", err);
  }
}