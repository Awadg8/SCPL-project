import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";


// Component Import
import Header from "./component/Header";
import Footer from "./component/Footer";

// Pages Import
import About from "./pages/About";
import Products from "./pages/Products";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Main from "./pages/Main";

// CSS import
import "./App.css";
import "./assets/css/style.css";
// import "./assets/css/responsive.css";
import "./assets/css/backToTop.css";

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
