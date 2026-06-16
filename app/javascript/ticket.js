console.log("JS LOADED");

document.addEventListener("DOMContentLoaded", () => {
  loadTickets();

  document
    .getElementById("ticketForm")
    .addEventListener("submit", createTicket);

  document
    .getElementById("statusFilter")
    .addEventListener("change", loadTickets);
});


// ------------------------
// LOAD / FETCH TICKETS
// ------------------------
async function loadTickets() {
  try {
    const status = document.getElementById("statusFilter").value;

    let url = "/api/v1/tickets";
    if (status) url += `?status=${status}`;

    const response = await fetch(url);
    const tickets = await response.json();

    renderTickets(tickets);
  } catch (err) {
    console.error("Error loading tickets:", err);
  }
}


// ------------------------
// RENDER TICKETS
// ------------------------
function renderTickets(tickets) {
  const container = document.getElementById("ticketsList");

  container.innerHTML = "";

  if (tickets.length === 0) {
    container.innerHTML = "<p>No tickets found.</p>";
    return;
  }

  tickets.forEach(ticket => {
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.padding = "10px";
    div.style.margin = "10px 0";

    div.innerHTML = `
      <h3>${ticket.title}</h3>
      <p>${ticket.description || ""}</p>
      <p><strong>Status:</strong> ${ticket.status}</p>
    `;

    container.appendChild(div);
  });
}


// ------------------------
// CREATE TICKET (POST)
// ------------------------
async function createTicket(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const status = document.getElementById("status").value;

  try {
    const response = await fetch("http://localhost:3000/api/v1/tickets", {
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
      throw new Error("Failed to create ticket");
    }

    document.getElementById("ticketForm").reset();
    loadTickets();
  } catch (err) {
    console.error("Error creating ticket:", err);
  }
}