import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Context from "./Context";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Blog from "./views/Blog";
import Contact from "./views/Contact";
import Home from "./views/Home";
import LogInMain from "./views/LogInMain";
import Services from "./views/Services";
import SignUpMain from "./views/SignUpMain";
import Team from "./views/Team";

const App = () => {
  const [usuario, setUsuario] = useState(null)

  return (
    <Context.Provider value = {{usuario, setUsuario}}>
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogInMain/>} />
          <Route path="/signup" element={<SignUpMain />} />
        </Routes>
    </Router>
    </Context.Provider>
  )
}

export default App
