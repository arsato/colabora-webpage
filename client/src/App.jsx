import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Team from "./views/Team";
import Blog from "./views/Blog";
import Services from "./views/Services";
import Contact from "./views/Contact";
import './App.css'
import LogInMain from "./views/LogInMain";
import SignUpMain from "./views/SignUpMain";
import Context from "./Context";
import { useState } from "react";

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
