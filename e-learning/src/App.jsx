import Nav from "./components/nav/Nav";
import Home from "./components/home/home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer } from "./components/footer/Footer";
import About from "./components/AboutUs/About";
import Contact from "./components/contact/Contact";
import Log from "./components/Login/Log";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Log" element={<Log />} />
          <Route path="*" element={<h1> Page Not Found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
