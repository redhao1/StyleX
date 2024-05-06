import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Option from "./UserProfile/Option";

function UserProfile () {
    const Navigate = useNavigate();

    const [isEditable, setIsEditable] = useState(false);
    const [countries, setCountries] = useState([{
        id: "",
        name: ""
    }]);
    const [states, setStates] = useState([{
        id: "",
        name: ""
    }]);
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        addressLine1: "",
        addressLine2: "",
        apartment: "",
        city: "",
        state: "",
        country: "",
        postCode: "",
    });

    useEffect(() => {
        getUserDetails();
    }, []);

    async function getUserDetails () {
        try {
            const response = await axios.get("/getUserDetails");
            if (response.status === 200) {
                setUserDetails(response.data.result);
                getStates();
                getCountries();
            }
        } catch (error) {
            Navigate("/Login");
        }
    }

    async function updateUserDetails (event) {
        try {
            event.preventDefault();
            const response = await axios.post("/updateUserDetails", { userDetails: userDetails });
            if (response.status === 200) {
                getUserDetails();
                setIsEditable(false);
            }
        } catch (error) {
            Navigate("/Login");
        }
    }

    async function getCountries () {
        try {
            const response = await axios.get("/getCountries");
            if (response.status === 200) {
                const data = response.data.countries.map((row) => ({
                    id: row._id,
                    name: row.name,
                }));
                setCountries(data);
            }
        } catch (error) {
            setCountries([]);
        }
    }

    async function getStates () {
        try {
            const response = await axios.get("/getStates");
            if (response.status === 200) {
                const data = response.data.states.map((row) => ({
                    id: row._id,
                    name: row.name,
                }));
                setStates(data);
            }
        } catch (error) {
            setStates([]);
        }
    }

    function handleStateChange (event) {
        setUserDetails((prevData) => ({
            ...prevData,
            state: event.target.value,
        }));
    }

    function handleCountryChange (event) {
        setUserDetails((prevData) => ({
            ...prevData,
            country: event.target.value,
        }));
    }

    function handleEdit (event) {
        event.preventDefault();
        setIsEditable(!isEditable);
    }

    function handleUserDetails (event) {
        const {name, value} = event.target;
        setUserDetails((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    return (
        <div id="page-content" style={{paddingTop: "0px"}}>
            <div className="page section-header text-center">
                <div className="page-title">
                    <div className="wrapper"><h1 className="page-width">My Profile</h1></div>
                </div>
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 mb-4 offset-md-2">
                        <div className="mb-4">
                            <h2>Personal Details</h2>
                            <div className="formFeilds contact-form form-vertical">
                                <form action="http://annimexweb.com/items/belle/assets/php/mail.php" method="post"  id="contact_form" className="contact-form">	
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" id="ContactFormFirstName" name="firstName" placeholder="First Name" value={userDetails.firstName} onChange={handleUserDetails} required="" disabled={!isEditable} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" id="ContactFormLastName" name="lastName" placeholder="Last Name" value={userDetails.lastName} onChange={handleUserDetails} required="" disabled={!isEditable} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="email" id="ContactFormEmail" name="email" placeholder="Email" value={userDetails.email} onChange={handleUserDetails} required="" disabled={!isEditable} />                        	
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="tel" id="ContactFormPhone" name="telephone" pattern="[0-9\-]*" placeholder="Phone Number" value={userDetails.telephone} onChange={handleUserDetails} required="" disabled={!isEditable} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <hr />
                                            <h2>Address</h2>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                            <div className="form-group">
                                                <label>Address Line 1</label>
                                                <input type="text" id="ContactFormAddressLine1" name="addressLine1" placeholder="Address Line 1" value={userDetails.addressLine1} onChange={handleUserDetails} required="" disabled={!isEditable} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                            <div className="form-group">
                                                <label>Address Line 2</label>
                                                <input type="text" id="ContactFormAddressLine2" name="addressLine2" placeholder="Address Line 2" value={userDetails.addressLine2} onChange={handleUserDetails} required="" disabled={!isEditable} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                            <div className="form-group">
                                                <label>Apartment</label>
                                                <input type="text" id="ContactFormApartment" name="apartment" placeholder="Apartment" value={userDetails.apartment} onChange={handleUserDetails} required="" disabled={!isEditable} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <label>City</label>
                                                <input type="text" id="ContactFormCity" name="city" placeholder="City" value={userDetails.city} onChange={handleUserDetails} required="" disabled={!isEditable} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <label>Postcode</label>
                                                <input type="text" id="ContactFormPostCode" name="postCode" placeholder="Postcode" value={userDetails.postCode} onChange={handleUserDetails} required="" disabled={!isEditable} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <div class="form-group">
                                                <label for="address_country">Country</label>
                                                <select id="address_country" name="country" data-default="United States" disabled={!isEditable} value={userDetails.country} onChange={handleCountryChange}>
                                                    <option value="" disabled selected hidden>Please select a country</option>
                                                    {countries.map((row) => (
                                                        <Option name={row.name} value={row.id} />
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <div class="form-group">
                                                <label>State</label>
                                                <select id="address_province" name="state" data-default="" disabled={!isEditable} value={userDetails.state} onChange={handleStateChange}>
                                                    <option value="" disabled selected hidden>Please select a state</option>
                                                    {states.map((row) => (
                                                        <Option name={row.name} value={row.id} />
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" hidden={isEditable}>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <button className="btn" onClick={handleEdit}>Edit</button>
                                        </div>
                                    </div>
                                    <div className="row" hidden={!isEditable}>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <button className="btn" onClick={handleEdit} style={{marginRight: "1%", backgroundColor: "#ED5334"}}>Cancel</button>
                                            <button className="btn" onClick={updateUserDetails} style={{backgroundColor: "#34ED66"}}>Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;