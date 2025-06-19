# 🧠 MemoryLog

- A memory journaling app built with the **MERN stack**, styled with Bootstrap and deployed to Render. 
- MemoryLog lets you capture your thoughts, feelings, and important events in a clean, responsive interface.

## Live Demo
https://memory-log-eight.vercel.app/
⚠️ Note: This deployed version is restricted to read-only functionality.
To experience full functionality (adding/editing/deleting entries), please follow the steps in the **Local Installation & Getting Started** section below.

## 🛠️ Tech Stack

- ⚛️ [React](https://react.dev/) — Frontend UI library
- 🎨 [Bootstrap 5](https://getbootstrap.com/) — Responsive UI components
- ⚡ [Vite](https://vitejs.dev/) — Lightning-fast development and build tool
- 🌐 [Express.js](https://expressjs.com/) — Backend web framework for Node.js
- ☁️ [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) — Cloud NoSQL database
- 🚀 [Render](https://render.com/) — Cloud platform for hosting the backend
- 🌍 [Vercel](https://vercel.com/) — Hosting platform for the frontend


## 🤔 Features
- 📝 Write and save memory entries
- 📅 View past logs
- 🧭 Responsive design with Bootstrap

## Prerequisites Before You Start
- Install [Node.js](https://nodejs.org/en)
- Install [MongoDB](https://www.mongodb.com/try/download/community) and [MongoDB Compass](https://www.mongodb.com/try/download/compass)


## Local Installation & Getting Started
**Frontend**
- Open your terminal and run
```bash
cd memorylog-frontend
npm install
```
- Create **.env** file inside memory-frontend folder with the following content
```bash
VITE_API_BASE_URL=http://localhost:5000/api
```
- And start the development server 
```bash
npm run dev
```
- Then visit the app in browser
http://localhost:5173

**Backend**
- Open your terminal and run
```bash
cd memorylog-backend
npm install
```
- Create **.env** file inside memory-backend folder with the following content
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/memorylog
```
- And start the backend server
```bash
npm run dev
```
