import React, { useState } from "react";

function Register() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const [message, setMessage] = useState(""); // State for displaying messages to the user
    const [messageType, setMessageType] = useState(""); // State for message type (success or error)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage(""); // Reset message state on new submission
        setMessageType(""); // Reset message type on new submission
    
        // Prepare formData for submission
        const updatedFormData = {
            ...formData,
            name: `${formData.firstName} ${formData.lastName}`,
        };
        // Optionally remove firstName and lastName
        delete updatedFormData.firstName;
        delete updatedFormData.lastName;
    
        try {
            const response = await fetch("http://localhost:4000/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedFormData)
            });
    
            const data = await response.json();
    
            if (response.ok) {
                console.log("User registered successfully");
    
                // Clear form data
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: ""
                });
    
                setMessage("User registered successfully. Redirecting to login...");
                setMessageType("success");
    
                // Redirect to login page after a short delay for a better user experience
                setTimeout(() => {
                    // If using React Router
                    // history.push('/login');
                    // If not using React Router
                    window.location.href = '/login'; // Adjust the URL to your login page
                }, 500); // Redirect after 2 seconds
            } else {
                // Handle error response with specific message
                console.error("Registration failed:", data.error || response.statusText);
                setMessage(data.error || "Registration failed. Please try again.");
                setMessageType("error");
            }
        } catch (error) {
            console.error("An error occurred during registration:", error);
            setMessage("An error occurred during registration. Please try again.");
            setMessageType("error");
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
                            {message && <div className={`alert ${messageType === "success" ? "alert-success" : "alert-danger"}`}>{message}</div>}
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
