# Contact Manager

A simple full-stack Contact Manager built with React, Flask, and SQLAlchemy.

This project was created as one of my first attempts at building a complete application with a frontend, backend API, and database. The primary goal was not just to build a working application, but to understand how different parts of a full-stack project communicate with each other.

---

## Project Overview

The application allows users to:

* Create contacts
* View saved contacts
* Update contact information
* Delete contacts
* Persist data using a database

The frontend communicates with a Flask API, which handles data management and database operations through SQLAlchemy.

---

## My Learning Journey

This project represents an important milestone in my software development journey.

Before building this application, I had a basic understanding of frontend and backend concepts separately. Through this project, I learned how to connect them together into a working full-stack application.

### Backend Development

The backend API was built by me as a hands-on learning exercise.

While building it, I learned:

* How REST APIs work
* Flask routing and request handling
* CRUD operations
* Database models using SQLAlchemy
* Connecting an API to a database
* Structuring backend code into separate modules

This was my first experience building an API from scratch and understanding how frontend applications consume backend services.

### Frontend Development

For the frontend, I experimented with an AI-assisted development workflow.

I used AI tools to help accelerate UI development while actively reviewing, modifying, testing, and understanding the generated code. This allowed me to focus on learning React concepts and frontend-backend integration rather than spending excessive time on styling and boilerplate.

Through this process, I gained experience with:

* React components
* State management
* API requests
* Event handling
* Component structure
* Modern frontend tooling with Vite

---

## Tech Stack

### Frontend

* React
* Vite
* JavaScript (ES6+)
* CSS

### Backend

* Flask
* Flask-SQLAlchemy
* Flask-CORS
* SQLAlchemy

### Database

* SQLite

### Development Tools

* Git
* GitHub
* VS Code

---

## Project Structure

```text
contact-manager/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── backend-src/
│   ├── config.py
│   ├── main.py
│   └── models.py
│
├── requirements.txt
├── .gitignore
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/HIMANSHU-SAINI-NONE/contact-manager.git
cd contact-manager
```

### Backend Setup

Create a virtual environment:

```bash
python -m venv backend
```

Activate it:

```bash
backend\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the backend:

```bash
python backend-src/main.py
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Challenges Faced

Some of the things I learned while building this project included:

* Connecting a React frontend to a Flask backend
* Managing API requests and responses
* Understanding SQLAlchemy models and database operations
* Organizing project structure
* Using Git and GitHub effectively
* Debugging frontend-backend communication issues

---

## Future Improvements

Planned features and improvements include:

* Contact search functionality
* Contact categories and tags
* Authentication and user accounts
* Profile pictures
* Better form validation
* Deployment to a cloud platform
* Improved UI and accessibility

---

## What This Project Means to Me

This project may be simple, but it was one of the first times I successfully built and connected a frontend, backend, and database into a working application.

More importantly, it taught me how to learn independently, debug problems, use developer tools effectively, and leverage AI-assisted workflows responsibly while still understanding the code being written.

It serves as a foundation for the more advanced projects I plan to build in the future.

---

## Author

**Himanshu Saini**

B.Tech Computer Science Engineering Student

GitHub: https://github.com/HIMANSHU-SAINI-NONE
