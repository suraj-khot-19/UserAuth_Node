# 🛡️ Full Stack Authentication App

A modern full-stack authentication application built with:

- ⚛️ React + Vite + Tailwind CSS (frontend)
- 🌐 Node.js + Express + MongoDB (backend)
- 🔐 Cookie-based authentication with JWT
- 📦 Axios for API communication
- 🍪 Secure cross-origin sessions with credentials

---

## 📁 Project Structure

```bash
.
├── client/               # Frontend React app
│   ├── public/
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── layouts/      # Shared layout files like MainLayout
│   │   ├── pages/        # Auth & public pages (Login, Signup, Home, 404)
│   │   ├── services/     # Axios config and API services
│   │   ├── context/      # Auth context for global state
│   │   ├── router.jsx    # React Router setup
│   │   └── main.jsx      # Entry point
│   └── README.md
│
├── server/               # Backend Node.js app
│   ├── config/           # Token generator
│   ├── controllers/      # User controller logic
│   ├── db/               # MongoDB connection setup
│   ├── middlewares/      # Auth middleware
│   ├── models/           # Mongoose User schema
│   ├── routes/           # Auth routes
│   ├── .env              # Environment variables
│   ├── index.js          # Server entry point
│   └── README.md
│
├── .gitignore
├── package.json
├── README.md             # (this file)
└── LICENSE
```

---

## 🚀 Getting Started

Prerequisites

- Node.js

- MongoDB Atlas (or local MongoDB)

- Vite

---

## 🔧 Setup Instructions

1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. Setup Backend

```bash
cd server
npm install
```

Create a .env file in the server/ folder:

```env
PORT=8080
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm run dev
```

## 3. Setup Frontend

```bash
cd ../client
npm install
```

Create a .env file in the client/ folder:

```env
VITE_API_BASE_URL=http://localhost:8080/auth
```

Start the React app:

```bash
npm run dev
```

---

## ✅ Features

- Signup, Login, Logout

- Authenticated user context

- Protected API routes

- Secure HTTP-only cookie storage

- Toast notifications for user feedback

- Responsive UI with Tailwind CSS

---

## 📦 Tech Stack

| Tech               | Usage                      |
| ------------------ | -------------------------- |
| React              | Frontend UI                |
| Vite               | Build tool / dev server    |
| Tailwind CSS       | Styling                    |
| Express.js         | Backend server             |
| MongoDB + Mongoose | Database + ODM             |
| JWT                | Token-based authentication |
| Axios              | API communication          |
| React Router       | Routing                    |
| react-hot-toast    | Toast messages             |

---

## 📌 Author & Contributors

- 👤 Suraj Khot
-
- 👤 Anirudha Bele

## 🤝 Open to contributions — feel free to submit a PR
