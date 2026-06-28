TaskFlow Pro

TaskFlow Pro is a full-stack task management web application built using the MERN stack. I built this project to improve my understanding of full-stack development by working on both the frontend and backend while focusing on creating a clean, responsive, and user-friendly interface.

The application allows users to create, update, delete, organize, and track their daily tasks with a simple dashboard and analytics section. It also supports light and dark mode for a better user experience.

Live Demo

Frontend: https://taskflow-frontend-ws49.onrender.com/

Backend API: https://taskflow-backend-01ly.onrender.com/

---

Features

* Create, update and delete tasks
* Set task priority (High, Medium, Low)
* Track task status (Pending / Completed)
* Analytics dashboard with charts
* Search and filter tasks
* Interactive calendar
* Light and Dark mode
* Responsive design for desktop and mobile
* Smooth animations using Framer Motion

---

Tech Stack

Frontend

* React.js
* Vite
* Tailwind CSS
* Framer Motion
* Recharts
* Axios
* React Hook Form
* React Hot Toast
* Lucide React Icons

Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

Deployment

* Frontend – Render Static Site
* Backend – Render Web Service
* Database – MongoDB Atlas


Project Structure

```
TaskFlow-Pro
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

Installation

Clone the repository

```bash
git clone https://github.com/ashu4saam/TaskFlow-Pro.git
```

Go to project directory

```bash
cd TaskFlow-Pro
```

Install frontend dependencies

```bash
cd client
npm install
```

Install backend dependencies

```bash
cd ../server
npm install
```

---

Environment Variables

Create a `.env` file inside the server folder.

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

---

Run the project

Start backend

```bash
cd server
npm run dev
```

Start frontend

```bash
cd client
npm run dev
```

---


## What I Learned

While building this project, I gained practical experience in:

* Building REST APIs using Express.js
* Working with MongoDB and Mongoose
* Managing state using React Context API
* Designing responsive user interfaces with Tailwind CSS
* Creating charts using Recharts
* Using Framer Motion for animations
* Deploying a full-stack MERN application on Render
* Connecting a React frontend with an Express backend

---

Future Improvements

Some features I plan to add in future updates:

* User Authentication (JWT)
* User Profiles
* Task Categories
* Due Date Notifications
* Email Reminders
* File Attachments
* Drag and Drop Task Board
* Team Collaboration

---

## Author

Ashutosh Kumar

If you have any suggestions or feedback, feel free to connect with me on LinkedIn or open an issue in this repository.
