# gharpayy
 FOR FRONTEND--- npm start
 FOR BACKEND--- npx nodemon server.js
created frontend and backend
# Gharpayy Lead Management CRM (MVP)

## Overview

This project is a Minimum Viable Product (MVP) CRM system designed to manage customer leads for the Gharpayy platform.

The system captures incoming leads, assigns them to agents, tracks their progress through a sales pipeline, and provides dashboard analytics.

---

## Features Implemented

### Lead Capture

Leads are captured through a form submission and automatically stored in the database.

Each lead includes:

* Name
* Phone number
* Lead source
* Timestamp
* Assigned agent
* Lead status

---

### Automatic Lead Assignment

The system assigns leads to agents automatically using a **round-robin algorithm**, ensuring balanced distribution.

---

### Lead Pipeline

Leads move through the following stages:

* New Lead
* Contacted
* Visit Scheduled
* Booked
* Lost

Agents can update lead status through the CRM interface.

---

### Visit Scheduling

The backend supports visit scheduling and tracking of visit outcomes.

---

### Dashboard

The dashboard displays:

* Total leads
* New leads
* Visits scheduled
* Confirmed bookings

---

## System Architecture

Frontend:
React.js

Backend:
Node.js + Express.js

Database:
MongoDB Atlas

Architecture Flow:

User Interface (React)
↓
REST API (Node.js / Express)
↓
MongoDB Atlas Database

---

## Database Design

### Leads Collection

Fields:

* name
* phone
* source
* assignedAgent
* status
* createdAt

### Agents Collection

Fields:

* name
* email

### Visits Collection

Fields:

* leadId
* property
* visitDate
* outcome

---

## Scalability Considerations

Future improvements could include:

* WhatsApp API integration for automated lead capture
* Message queue system for high-volume lead processing
* Redis caching for dashboard analytics
* Role-based authentication for agents and admins
* Automated follow-up reminders

---

## Setup Instructions

### Backend

<img width="1892" height="956" alt="image" src="https://github.com/user-attachments/assets/c2c0a65d-4034-41c6-aa3f-68e18690f386" />

