import { BrowserRouter, Route, Routes } from "react-router-dom";

// Component import
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import About from "./About";
import Products from "./Products";
import Career from "./Career";
import Contact from "./Contact";

// CSS import
import "../App.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/backToTop.css";
import "../assets/css/barfiller.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
