import { Routes, Route } from "react-router-dom";

import { Fade } from "react-reveal";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Team from "./components/pages/Team";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart";

// Estructura HTML
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Fade>
    <div className="App">

      <NavBar />
      <Header />
      <Feature />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div >
    </Fade>
  );
}

export default App;
