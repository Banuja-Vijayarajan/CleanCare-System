# CleanCare System – University Complaint Management System

## Project Title
CleanCare – Smart Complaint Management System for University Environment

---

## Problem Description
In many university environments, complaint handling is still done manually or through informal channels.  
This leads to delayed response to issues, lack of tracking system, no transparency for students, and poor communication between students and administration.

---

## Proposed Solution
CleanCare is a full-stack web application designed to digitize the complaint management process in universities.

It allows students to submit complaints, and administrators to manage and update complaint status in real time.

---

## Features

### Student Side
- Register and login
- Submit complaints
- View own complaints
- Track complaint status (pending, in-progress, completed)

### Admin Side
- Secure login
- View all complaints
- Update complaint status
- Delete complaints
- Assign staff (optional extension)

---

## Technologies Used

### Frontend
- React.js
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Tools
- Git
- GitHub
- Postman

---

## API Endpoints

### Auth Routes

POST /api/auth/register

Example:
{
  "username": "admin",
  "password": "123",
  "role": "admin"
}

POST /api/auth/login

---

### Complaint Routes

GET /api/complaints  
Returns all complaints

---

POST /api/complaints

Example:
{
  "title": "Water leakage in hostel",
  "description": "Pipe burst in bathroom",
  "location": "Block A Hostel"
}

---

PUT /api/complaints/:id/status

Example:
{
  "status": "in-progress"
}

---

DELETE /api/complaints/:id

---

## Setup Instructions

### 1. Clone Repository
git clone https://github.com/Banuja-Vijayarajan/CleanCare-System.git

---

### 2. Backend Setup
cd backend
npm install

Create .env file:
MONGO_URI=mongodb://127.0.0.1:27017/cleancare
PORT=5000

Run backend:
node app.js

---

### 3. Frontend Setup
cd frontend
npm install
npm start

---

## How to Run the Project

1. Start MongoDB server
2. Run backend server using node app.js
3. Run frontend using npm start
4. Open browser at http://localhost:3000

---

## System Architecture

Frontend (React)
   |
   v
Backend (Express API)
   |
   v
MongoDB Database

---

## Future Improvements
- Image upload for complaints
- Email notifications
- JWT authentication enhancement
- Mobile responsive UI improvements

---

## Author
CleanCare System – Full-stack university project for IT module submission.
