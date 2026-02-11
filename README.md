Smart Task & Insights Dashboard

A full-stack engineering-focused application built with Node.js, Express, React, and MongoDB.

This project demonstrates clean architecture, meaningful external API integration, structured error handling, and scalable system design.

⚠ This project focuses on engineering quality and reasoning — not UI/UX.

📌 Project Overview

Smart Task & Insights Dashboard is a task management system where:

Users can securely register and log in using JWT.

Each user manages their own tasks (CRUD).

Tasks are enriched with real-time weather data from an external public API.

External data influences task logic and adds meaningful insights.

This simulates real-world production systems where internal services depend on external APIs.

🧱 Tech Stack
Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

dotenv

Centralized Error Middleware

Frontend

React (Functional Components)

Axios

React Router

Context API (Authentication State)

External API

Open-Meteo Weather API

No API key required

Real-time weather data

🌤 External API Integration
API Used
GET https://api.open-meteo.com/v1/forecast
?latitude={latitude}
&longitude={longitude}
&current_weather=true


The API is called when creating a task.

Why Open-Meteo?

Free and publicly accessible

Lightweight response

Reliable real-time weather data

Simulates real-world external dependency

No API key simplifies deployment

🧠 How External Data Affects the System

When a task is created:

Backend receives task data.

Latitude and longitude are provided.

Weather API is called asynchronously.

Response is normalized.

A simplified weather summary is stored inside the task.

Example Stored Data

Instead of storing raw API response:

"weather": {
  "temperature": 26.4,
  "windspeed": 14.2,
  "weatherCode": 3,
  "isExtreme": false
}

🧩 Business Logic Applied

The system applies logic to weather data:

If temperature ≥ 40°C → isExtreme = true

If windspeed > 50 km/h → severe wind condition

Weather codes mapped to readable conditions (Clear, Cloudy, Rain…)

This allows:

Showing warnings in UI

Adding contextual insights

Future rule-based automation

Simulating real production logic

🔐 Authentication

User Registration

User Login

JWT-based Authentication

Protected Backend Routes

Protected Frontend Routes

Users can only access their own tasks

Security rules implemented:

Password hashing

JWT verification middleware

Owner-based task filtering

📦 Task Model
{
  "title": "string",
  "description": "string",
  "status": "todo | doing | done",
  "priority": "low | medium | high",
  "createdAt": "date",
  "weather": {
    "temperature": "number",
    "windspeed": "number",
    "weatherCode": "number",
    "isExtreme": "boolean"
  },
  "user": "ObjectId"
}

🏗 Backend Architecture
backend/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── task.controller.js
│   │
│   ├── services/
│   │   └── weather.service.js
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   └── task.model.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── task.routes.js
│   │
│   └── app.js
│
└── server.js

Architecture Decisions
Separation of Concerns

Controllers → Handle HTTP logic

Services → Business logic & external API

Middleware → Authentication & Error handling

Models → Database schema

This makes the system:

Scalable

Testable

Maintainable

🎨 Frontend Structure
frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── services/
│   │   └── api.js
│   ├── routes/
│   │   └── ProtectedRoute.jsx
│   └── App.jsx

Frontend Features

Functional components only

Axios instance with interceptors

JWT stored and attached automatically

Protected routes

Predictable data flow

Basic state management

🧪 Error Handling Strategy
Case	Status Code
Validation error	400
Unauthorized	401
Forbidden	403
Not Found	404
Server Error	500
External API Failure Handling

If weather API:

Fails

Times out

Returns invalid data

Then:

Task is still created

Weather field becomes null

Error is logged

Application does NOT crash

⚙ Engineering Trade-offs & Decisions
Why Normalize API Data?

Avoid tight coupling

Protect against API changes

Reduce stored payload size

Improve performance

Why Service Layer?

To isolate:

Business logic

External integration

Future scalability

Why MongoDB?

Flexible schema

Easy relation via userId

Suitable for enriched task objects

🚀 How to Run the Project
1️⃣ Clone Repository
git clone <your-repo-link>
cd smart-task-insights-dashboard

2️⃣ Backend Setup
cd backend
npm install


Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key


Run backend:

npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm start



👨‍💻 Author

Saad Safwat
Full Stack Developer
Node.js | React | MongoDB