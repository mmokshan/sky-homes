import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Contact from "./page/Contact";
import About from "./page/About";
import Admin from "./page/Admin";
import Careers from "./page/Careers";
import Services from "./page/Service";
import Projects from "./page/Projects";
import NavbarRes from "./components/navbar/res-navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router basename="/sky-home"> 
        <NavbarRes />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
