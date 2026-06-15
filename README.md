# Ticket Tracker (Rails + JavaScript)

A simple full-stack ticket tracking application built to practice CRUD operations, API design, and frontend-backend integration using Ruby on Rails and vanilla JavaScript.

---

## 📌 Overview

This project allows users to create and view support-style tickets. Each ticket includes a title, description, and status. The frontend communicates with a Rails backend API to fetch and display ticket data dynamically.

This project was built as a learning exercise to strengthen full-stack development fundamentals.

---

## 🛠️ Tech Stack

**Backend**
- Ruby on Rails (API mode)
- ActiveRecord
- Postgres (development database)

**Frontend**
- JavaScript (ES6)
- Fetch API
- HTML/CSS (basic UI rendering)

---

## ⚙️ Features

- Create new tickets
- View a list of all tickets
- Track ticket status:
  - Open
  - In Progress
  - Closed
- RESTful API integration between frontend and backend

---

## 🔌 API Endpoints

| Method | Endpoint       | Description            |
|--------|----------------|------------------------|
| GET    | /tickets       | Fetch all tickets      |
| POST   | /tickets       | Create a new ticket    |

---

## 📦 Example Ticket Object

```json
{
  "id": 1,
  "title": "Bug fix",
  "description": "Fix login issue",
  "status": "in_progress",
  "created_at": "2026-06-15T20:58:30Z",
  "updated_at": "2026-06-15T20:58:30Z"
}
