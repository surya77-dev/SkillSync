import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Profile from "./pages/Profile";
import PostJob from "./pages/PostJob";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login"; 
import About from "./pages/About";
import Whatsnew from "./pages/Whatsnew";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/NewUpdates" element={<Whatsnew />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
