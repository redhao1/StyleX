import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Auth/authSlice";

function TopHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMobileView, setMobileView] = useState(false);
  const [showLogoutMessage, setShowLogoutMessage] = useState(false); // State to control logout message visibility
  const currentUser = useSelector((state) => state.auth.currentUser);

  function handleMobileView() {
    setMobileView(!isMobileView);
  }

  const handleLogoutSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/signout", {
        method: "GET",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Logout failed");
      }

      dispatch(logoutUser(null));
      navigate("/");
      setShowLogoutMessage(true); // Show logout message
      setTimeout(() => setShowLogoutMessage(false), 3000); // Hide message after 3 seconds
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <>
      <style>{`
        .hover-pointer:hover {
          cursor: pointer;
        }
        .default-cursor {
          cursor: default;
        }
        .logout-message {
            position: fixed;
            top: 55px;
            left: 80%;
            transform: translateX(-50%);
            background-color: rgba(0, 0, 0, 0.3);
            color:  #e44c4c;
            border: 4px bold black;
            padding: 10px;
            border-radius: 5px;
            z-index: 1000;
            font-size: 16px;
            box-shadow: black; // Adding a subtle shadow for better visibility
          }
          .customer-links a {
            font-size: 16px; // Adjust font size as needed
            color: #333; // Adjust color as needed
            text-decoration: none; // Remove underline
            margin-right: 10px; // Add some margin between links
          }
      `}</style>
      <div className="top-header" style={{ padding: "30px 0" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-15 col-sm-8 col-md-5 col-lg-4">
              {/* Currency picker and other UI elements remain unchanged */}
            </div>
            <div className="col-15 col-sm-8 col-md-5 col-lg-4 d-none d-lg-block">
              <div className="text-center">
                <p className="top-header_middle-text default-cursor" style={{fontSize: '20px'}}>
                  Worldwide Express Shipping
                </p>
              </div>
            </div>
            <div className="col-2 col-sm-4 col-md-3 col-lg-4 text-right">
              <span
                className="user-menu d-block d-lg-none"
                onClick={handleMobileView}
              >
                <i className="anm anm-user-al" aria-hidden="true"></i>
              </span>
              {currentUser ? (
                <ul
                  className="customer-links list-inline"
                  style={isMobileView ? { display: "block" } : {}}
                >
                  <li className="user-name default-cursor">
                    {currentUser.name}
                  </li>
                  <li>
                    <span
                      onClick={handleLogoutSubmit}
                      className="hover-pointer"
                    >
                      Logout
                    </span>
                  </li>
                </ul>
              ) : (
                <ul
                  className="customer-links list-inline"
                  style={isMobileView ? { display: "block" } : {}}
                >
                  <li>
                    <Link to="/Login" className="hover-pointer">Login</Link>
                  </li>
                  <li>
                    <Link to="/Register" className="hover-pointer">Create Account</Link>
                  </li>
                  <li>
                    <a href="wishlist.html" className="hover-pointer">Wishlist</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      {showLogoutMessage && (
        <div className="logout-message">
          Logged out successfully
        </div>
      )}
    </>
  );
}

export default TopHeader;
