# TaskFlow Pro

A full-stack task management application built using the MERN stack. This project was developed to strengthen my understanding of full-stack development by implementing REST APIs, MongoDB integration, and a responsive React-based user interface.

The application allows users to create, organize, update, and manage daily tasks through a clean dashboard while following a structured backend architecture.

---

## Features

### Task Management

* Create new tasks
* View all tasks
* Update existing tasks
* Delete tasks
* Set task priority
* Track task status
* Manage due dates

### Backend

* RESTful API development
* Express.js server
* MongoDB Atlas integration
* Mongoose data modeling
* MVC architecture
* Environment variable configuration
* Error handling

### Frontend

* React + Vite
* Responsive dashboard
* Sidebar navigation
* Search bar
* Modern UI components
* Tailwind CSS

---

## Tech Stack

**Frontend**

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM
* Lucide React

**Backend**

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

**Development Tools**

* Thunder Client
* Git & GitHub
* Visual Studio Code

---

## Project Structure

```text
TaskFlow
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── app.js
│   └── server.js
│
├── docs
└── README.md
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/taskflow-pro.git
```

### Install dependencies

Backend

```bash
cd server
npm install
```

Frontend

```bash
cd ../client
npm install
```

### Run the project

Start the backend

```bash
cd server
npm run dev
```

Start the frontend

```bash
cd client
npm run dev
```

The frontend runs on:

```
http://localhost:5173
```

The backend runs on:

```
http://localhost:5000
```

---

## API Endpoints

| Method | Endpoint         | Description      |
| ------ | ---------------- | ---------------- |
| POST   | `/api/tasks`     | Create a task    |
| GET    | `/api/tasks`     | Get all tasks    |
| GET    | `/api/tasks/:id` | Get a task by ID |
| PUT    | `/api/tasks/:id` | Update a task    |
| DELETE | `/api/tasks/:id` | Delete a task    |

---

## Screenshots

Project screenshots are available inside:

```
docs/screenshots/
```

Current screenshots include:

* Dashboard
* API Testing
* MongoDB Atlas
* Project Structure

---

## Future Improvements

Some features planned for future versions:

* User Authentication
* Dark Mode
* Search & Filters
* Task Analytics
* Calendar View
* Drag & Drop Support
* Email Reminders
* Team Collaboration

---

## What I Learned

Working on this project helped me improve my understanding of:

* Building REST APIs with Express.js
* MongoDB Atlas and Mongoose
* CRUD operations
* React component architecture
* Frontend and backend integration
* Project organization and deployment workflow

---

## Author

**Ashutosh Kumar**

B.Tech Student

GitHub: https://github.com/your-username

LinkedIn: https://linkedin.com/in/your-profile

---

## License

This project was developed for learning purposes and as part of my software development portfolio.
