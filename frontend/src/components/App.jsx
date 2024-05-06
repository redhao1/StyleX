import React, { useState, useEffect, useRef } from "react";
import HomePage from "./HomePage";
import Login from "./Auth/Login";
import { Routes, Route, useNavigate } from 'react-router-dom';
import SearchForm from "./HeaderFooter/SearchForm";
import TopHeader from "./HeaderFooter/TopHeader";
import Header from "./HeaderFooter/Header";
import MobileMenu from "./HeaderFooter/MobileMenu";
import Footer from "./HeaderFooter/Footer";
import Register from "./Auth/Register";
import ScrollTop from "./HeaderFooter/ScrollTop";
import ProductPage from "./ProductPage";
import ShopPage from "./ShopPage";
import NewArrivals from "./NewArrivals";
import BestSellers from "./BestSellers";
import ShopByGender from "./ShopByGender";
import ShopByCategory from "./ShopByCategory";
import Cart from "./Cart";
import Checkout from "./Checkout";
import RentCheckout from "./RentCheckout";
import Wishlist from "./Wishlist";
import Order from "./Order";
import Pricing from "./Pricing";
import Subscribe from "./Subscribe";
import UserProfile from "./UserProfile";
import axios from "axios";

function App() {
  const Navigate = useNavigate();

  const [sub, setSub] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isUser, setUser] = useState(false);

  function loginUser () {
    setUser(true);
  }

  async function logoutUser () {
    try {
      const response = await axios.get("/logoutUser");
      if (response.status === 200) {
        setUser(false);
        Navigate("/Login");
        setSub(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const searchRef = useRef(null);

  function toggleMobileMenu() {
      setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  };

  function setSearchOpen() {
    setIsSearch(true);
  };

  function setSearchClose() {
    setIsSearch(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearch(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef]);

  useState(() => {
    async function isUserAuthenticated () {
        try {
          const response = await axios.get("/isUserAuthenticated");
          if (response.status === 200) {
            setUser(true);
          } else {
            setUser(false);
          }
        } catch (error) {
          setUser(false);
        }
    }

    isUserAuthenticated();
  }, [isUser]);

  return (
    <div>
      <SearchForm isSearch={isSearch} closeSearch={setSearchClose} searchRef={searchRef}></SearchForm>
      <MobileMenu isMobileMenuOpen={isMobileMenuOpen} closeMobileMenu={closeMobileMenu}></MobileMenu>
      <TopHeader isUser={isUser} logoutUser={logoutUser}></TopHeader>
      <Header isUser={isUser} toggleMobileMenu={toggleMobileMenu} onSearch={setSearchOpen} sub={sub} setSub={setSub}></Header>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/Login" element={<Login isUser={isUser} setUser={loginUser} />} />
        <Route path="/Register" element={<Register isUser={isUser} />} />
        <Route exact path="/ProductPage/:id" element={<ProductPage isUser={isUser} sub={sub} />} />
        <Route exact path="/ShopPage/:id" element={<ShopPage />} />
        <Route exact path="/NewArrivals/:id" element={<NewArrivals />} />
        <Route exact path="/BestSellers/:id" element={<BestSellers />} />
        <Route exact path="/ShopByGender/:id" element={<ShopByGender />} />
        <Route exact path="/ShopByCategory/:id" element={<ShopByCategory />} />
        <Route path="/Cart" element={<Cart isUser={isUser} />} />
        <Route path="/Checkout" element={<Checkout isUser={isUser} />} />
        <Route exact path="/RentCheckout/:id/:sku" element={<RentCheckout isUser={isUser} sub={sub} />} />
        <Route path="/Wishlist" element={<Wishlist isUser={isUser} />} />
        <Route path="/Order" element={<Order isUser={isUser} />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route exact path="/Subscribe/:id" element={<Subscribe isUser={isUser} setSub={setSub} />} />
        <Route path="/UserProfile" element={<UserProfile />} />
      </Routes>
      <Footer></Footer>
      <ScrollTop></ScrollTop>
    </div>
  );
}

export default App;