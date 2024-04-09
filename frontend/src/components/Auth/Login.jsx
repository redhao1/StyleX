import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useDispatch hook from react-redux
import { loginUser } from "./authSlice"; // Import loginUser action from authSlice

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Use useDispatch hook to get the dispatch function

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Replace this URL with your actual login endpoint
      // Inside the handleSubmit function of the Login component
      const response = await fetch("http://localhost:4000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      // Assuming you want to store the token in localStorage for later use
      localStorage.setItem("token", data.token);

      // Dispatch the loginUser action with the user data
      dispatch(loginUser(data.user)); // Note that we are now passing `data.user`

      // Redirect to another route upon successful login
      navigate("/"); // Adjust the target route as needed
    } catch (error) {
      console.error(error);
      alert(error.message); // Placeholder error handling, replace with your error handling logic
    }
  };

  return (
    <div id="page-content">
      <div className="page section-header text-center">
        <div className="page-title">
          <div className="wrapper">
            <h1 className="page-width">Login</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3">
            <div className="mb-4">
              <form
                onSubmit={handleSubmit}
                id="CustomerLoginForm"
                acceptCharset="UTF-8"
                className="contact-form"
              >
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group">
                      <label htmlFor="CustomerEmail">Email</label>
                      <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=""
                        id="CustomerEmail"
                        className=""
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group">
                      <label htmlFor="CustomerPassword">Password</label>
                      <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder=""
                        id="CustomerPassword"
                        className=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                    <input type="submit" className="btn mb-3" value="Sign In" />
                    <p className="mb-4">
                      <a href="#" id="RecoverPassword">
                        Forgot your password?
                      </a>{" "}
                      &nbsp; | &nbsp;
                      <Link to="/register" id="customer_register_link">
                        Create account
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
