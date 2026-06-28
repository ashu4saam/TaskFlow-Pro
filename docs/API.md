# TaskFlow API Documentation

## Base URL

```
http://localhost:5000/api/tasks
```

---

## GET Tasks

GET /api/tasks

Returns all tasks.

---

## GET Task

GET /api/tasks/:id

Returns a single task.

---

## POST Task

POST /api/tasks

Example

```json
{
  "title": "Build Dashboard",
  "description": "Finish dashboard UI",
  "priority": "High",
  "status": "Pending"
}
```

---

## PUT Task

PUT /api/tasks/:id

Updates a task.

---

## DELETE Task

DELETE /api/tasks/:id

Deletes a task.