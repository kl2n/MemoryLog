# 🧠 MemoryLog

A simple and elegant memory journaling app built with **React** and **Bootstrap**. MemoryLog lets you capture your thoughts, feelings, and important events in a clean, responsive interface.

## 🚧 Project Status

> **Note:**  
> This project is currently configured to run **only in a local development environment**.  
> Deployment to a cloud platform has **not yet been set up**.


## 🚀 Live Demo

🌐 [View on GitHub Pages](https://kl2n.github.io/MemoryLog)


## 🛠️ Tech Stack

- ⚛️ [React](https://react.dev/) — Frontend UI library
- 🎨 [Bootstrap 5](https://getbootstrap.com/) — Responsive UI components
- ⚡ [Vite](https://vitejs.dev/) — Lightning-fast development and build tool
- 🌐 [Express.js](https://expressjs.com/) — Backend web framework for Node.js
- 🗃️ [MongoDB](https://www.mongodb.com/) — NoSQL database for storing entries 


## 🤔 Features
📝 Write and save memory entries
📅 View past logs
🧭 Responsive design with Bootstrap

## Installation & Getting Started
**Frontend**
- Open terminal and run
```bash
cd memorylog-frontend
npm install
npm run dev
```
- Then visit: ```http://localhost:5173 ```

**Backend**
- Open terminal and run
```bash
cd memorylog-backend
npm install
```
- Create a **.env** file in the **memorylog-backend** directory with the following content:
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/memorylog
npm install
```
-Then start the backend server
```bash
npm run dev
```
