import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Team from "./components/pages/Team";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart";

import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">

      <NavBar/>

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="about" element={ <About /> } />
        <Route path="team" element={ <Team /> } />
        <Route path="contact" element={ <Contact /> } />
        <Route path="cart" element={ <Cart /> } />
      </Routes>

    </div >
  );
}

export default App;
