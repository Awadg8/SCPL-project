import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

// Component Import
import Header from "./component/Header";
import Footer from "./component/Footer";
import Loader from "./component/Loader";
import ScrollToTop from "./component/ScrollToTop";
import StartFromTop from "./component/StartFromTop";

// CSS import
import "./App.css";

const Main = lazy(() => import("./pages/Main"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products.js"));
const Career = lazy(() => import("./pages/Career.js"));
const Contact = lazy(() => import("./pages/Contact.js"));

function App() {
  return (
    <BrowserRouter>
      <StartFromTop />
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <ScrollToTop />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
