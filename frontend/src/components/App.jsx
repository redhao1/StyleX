import React, { useState } from "react";
import HomePage from "./HomePage";
import Login from "./Auth/Login";
import { Routes, Route } from 'react-router-dom';
import SearchForm from "./SearchForm";
import TopHeader from "./HeaderFooter/TopHeader";
import Header from "./HeaderFooter/Header";
import MobileMenu from "./HeaderFooter/MobileMenu";
import Footer from "./HeaderFooter/Footer";
import QuickViewPopup from "./QuickViewPopup";
import Register from "./Auth/Register";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
      setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <SearchForm></SearchForm>
      <MobileMenu isMobileMenuOpen={isMobileMenuOpen} closeMobileMenu={closeMobileMenu}></MobileMenu>
      <TopHeader></TopHeader>
      <Header toggleMobileMenu={toggleMobileMenu}></Header>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />}/>
      </Routes>
      <Footer></Footer>
      <span id="site-scroll"><i className="icon anm anm-angle-up-r"></i></span>
      <QuickViewPopup></QuickViewPopup>
    </div>
  );
}

export default App;