import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Profile from "./pages/Profile";
import PostJob from "./pages/PostJob";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import About from "./pages/About";
import Whatsnew from "./pages/Whatsnew";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="browse" element={<Browse />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="post-job" element={<PostJob />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="newupdates" element={<Whatsnew />} />
          <Route path="about" element={<About />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
