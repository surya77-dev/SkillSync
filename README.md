# 💼 SkillSync — Freelance Skill Marketplace UI

SkillSync is a fully responsive and interactive freelance marketplace user interface inspired by platforms like Upwork and Fiverr. Built with ReactJS and TailwindCSS, this solo project showcases modern UI/UX skills, routing, state management, and dynamic data integration using the `randomuser.me` API.

> 👨‍💻 Developed solo by [Suryananthan S](https://www.linkedin.com/in/suryananthan-s-4839682a5), aspiring full-stack MERN developer.

---

## 🚀 Live Demo

🔗 [Click here to view on Vercel](https://skillsync.vercel.app) *(Coming soon)*

---

## 📸 Screenshots

| Home Page | Browse Freelancers | Dashboard | Profile View |
|-----------|--------------------|-----------|---------------|
| ![Home](./screenshots/Home.png) | ![Browse](./screenshots/Browse.png) | ![Dashboard](./screenshots/Dashboard.png) | ![Profile](./screenshots/Profile.png) |

## ✨ Features

- ✅ **Hero Section + Login/Register UI**
- 🔍 **Browse Freelancers** — fetched via randomuser API, enriched with job titles, skills, ratings
- 📄 **Freelancer Profiles** — dynamic routing via `useParams` and `useLocation`
- 🧾 **Post a Job** — form with skills, experience level, localStorage support
- 📋 **Dashboard** — powered by `useContext`, tracks job posts
- 💚 **Clean UI** — TailwindCSS + responsive layout
- 💾 **LocalStorage** — stores job post data persistently
- 🧠 **Reusable Components** — Card, Searchbar, Buttons, etc.
- 🧭 **Routing** — built with `react-router-dom`

---

## 🛠 Tech Stack

| Category        | Tools / Libraries                 |
|-----------------|----------------------------------|
| Frontend        | ReactJS, JSX                     |
| Styling         | TailwindCSS                      |
| Routing         | React Router                     |
| State Management| React Hooks, Context API         |
| Data API        | randomuser.me                    |
| Persistence     | localStorage                     |
| Hosting         | Vercel (planned)                 |

---

## 📁 Folder Structure

.
├── skill-sync/
├── │
├── ├── public/
├── │ └── assets/, images/, logos/
├── ├── src/
├── │ ├── components/ # UI components like Navbar, Footer, Cards
├── │ ├── pages/ # Page components: Home, Browse, Profile, Login
├── │ ├── context/ # Job Context (PostJob, Dashboard)
├── │ ├── data/ # enrichUser, static lists
├── │ ├── App.jsx # Main layout + routing
├── │ └── main.jsx # Entry point
└── └── README.md


---

## 👨‍💻 Developer Info

- **Name**: Suryananthan S  
- **GitHub**: [surya77-dev](https://github.com/surya77-dev)  
- **LinkedIn**: [linkedin.com/in/suryananthan-s](https://www.linkedin.com/in/suryananthan-s-4839682a5)  
- **Stack**: HTML, CSS, TailwindCSS, JavaScript, ReactJS

---

## 📌 Future Plans

- 🔐 Firebase or JWT-based authentication
- 🌍 Deploy fully on [Vercel](https://vercel.com/)
- 📦 Backend with Node.js + MongoDB
- 🧠 Role-based dashboard (Freelancer vs Client)
- 📱 Mobile optimization and testing

---

## 🏁 Conclusion

> SkillSync is not just a UI project. It’s a strong representation of frontend mastery — layout structuring, state management, and component logic. Designed to scale, coded to impress.

---

### ⭐ If you like this project, don't forget to **star** it on GitHub and share your feedback!

