# ⚛️ State Management Using Redux (Counter Application)

This project demonstrates **centralized state management using Redux Toolkit** in a React application by building a simple counter.

The counter value is stored in a **global Redux store** and updated using actions and reducers.

---

## 🎯 Aim

To implement **centralized state management using Redux** in a React application.

---

## 🧠 Theory

Redux is a predictable state container for JavaScript applications.

It stores application data in a **single global store** and updates it using **actions and reducers**.

Redux Toolkit simplifies Redux by reducing boilerplate code and making state management easier.

This helps to:

✔ Manage global state efficiently  
✔ Keep data consistent across components  
✔ Improve scalability of applications  
✔ Simplify complex state logic  

---

## 🛠️ Tech Stack

- React (Vite)
- Redux Toolkit
- JavaScript
- CSS
- Node.js

---

## ⚙️ Features

✅ Increment counter  
✅ Decrement counter  
✅ Reset counter  
✅ Global state using Redux store  
✅ Clean component structure  

---

---

## 📂 Project Structure

```
redux-counter/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
        ├── Counter.jsx
        ├── Navbar.jsx
        ├── ThemeToggle.jsx
    ├── context
        ├── GlobalContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
│
├── photos/
│   ├── dark.png
│   ├── light.png
│   
│
├── package.json
└── vite.config.js
```
---

## 📸 UI Screenshots

### 🏠 LIGHT Page UI
![LIGHT UI](photos/light.png)

---

### ℹ️ About Page UI
![DARK UI](photos/dark.png)

---


---

## ▶️ How to Run the Project

### 1️⃣ Clone Repository
```bash
git clone https://github.com/Shivi714/FULL-STACK-EXP-4.git
2️⃣ Go to Project Folder
cd redux-counter
3️⃣ Install Dependencies
npm install
4️⃣ Run Development Server
npm run dev
Open browser → http://localhost:5173
