import React, { useState } from "react";

function Register() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // User successfully registered
                console.log("User registered successfully");
                // Redirect to login page or any other page
            } else {
                // Handle error response
                console.error("Registration failed:", response.statusText);
            }
        } catch (error) {
            console.error("An error occurred during registration:", error);
        }
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div id="page-content">
            <div className="page section-header text-center">
                <div className="page-title">
                    <div className="wrapper"><h1 className="page-width">Create an Account</h1></div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3">
                        <div className="mb-4">
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="FirstName">First Name</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder=""
                                                id="FirstName"
                                                autoFocus=""
                                                value={formData.firstName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="LastName">Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder=""
                                                id="LastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="CustomerEmail">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder=""
                                                id="CustomerEmail"
                                                className=""
                                                autoComplete="off"
                                                autoCapitalize="off"
                                                autoFocus=""
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="CustomerPassword">Password</label>
                                            <input
                                                type="password"
                                                value={formData.password}
                                                name="password"
                                                placeholder=""
                                                id="CustomerPassword"
                                                className=""
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                                        <input type="submit" className="btn mb-3" value="Create" />
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

export default Register;
