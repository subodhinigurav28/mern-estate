import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Header from "./Components/Header";
export default function App() {
  return <BrowserRouter>
  <Header /> 
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/login" element={<Login />} />
  </Routes>
  </BrowserRouter>;
    
  
}

