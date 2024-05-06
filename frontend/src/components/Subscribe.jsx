import React, {useState, useEffect} from "react";
import Item from "./Checkout/Item";
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate, useParams } from "react-router-dom";
import Option from "./UserProfile/Option";

function Subscribe (props) {
    const { id } = useParams();
    const Navigate = useNavigate();

    const [countries, setCountries] = useState([{
        id: "",
        name: ""
    }]);
    const [states, setStates] = useState([{
        id: "",
        name: ""
    }]);

    const [billingForm, setBillingForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        address: "",
        apartment: "",
        city: "",
        postCode: "",
        country: "",
        state: "",
    });

    const [paymentForm, setPaymentForm] = useState({
        nameOnCard: "",
        cardType: "",
        cardNumber: "",
        cvv: "",
        expDate: "",
    });

    const [plan, setPlan] = useState({
        id: "",
        name: "",
        price: "",
    });

    function handleBillingForm (event) {
        const { name, value } = event.target;
        setBillingForm((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function handlePaymentForm (event) {
        const { name, value } = event.target;
        
        setPaymentForm((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    async function submitForm () {
        // const requiredBillingFields = ["firstName", "lastName", "email", "telephone", "address", "city", "postCode", "country", "state"];
        // const isBillingFormEmpty = requiredBillingFields.some(field => billingForm[field].trim() === "");

        const requiredPaymentFields = ["nameOnCard", "cardType", "cardNumber", "cvv", "expDate"];
        const isPaymentFormEmpty = requiredPaymentFields.some(field => paymentForm[field].trim() === "");

        if (isPaymentFormEmpty) {
            Swal.fire({
                title: 'Oops!',
                text: 'Please fill in all required details.',
                icon: 'error',
                confirmButtonText: 'Okay!!!'
            });
        } else {
            const result = await axios.post("/subscribe", {planId: id, paymentForm: paymentForm, totalPrice: plan.price});
            if (result.status === 200) {
                showAlert();
                props.setSub(true);
                Navigate("/");
            } else {
                Swal.fire({
                    title: 'Oops!',
                    text: 'Cannot subscribe at the moment.',
                    icon: 'error',
                    confirmButtonText: 'What!!!'
                });
            }
        }
    }

    async function getPlan() {
        const response = await axios.get("/getRentPlan", { params: { planId: id } });
        setPlan({
            id: response.data.result._id,
            name: response.data.result.name,
            price: response.data.result.price
        });
        getStates();
        getCountries();
    }

    async function checkSubscriptions () {
        try {
            const response = await axios.get("/checkSubscriptions");
            if (response.status === 200) {
                props.setSub(true);
                Navigate("/");
            }
        } catch (error) {
            getPlan();
        }
    }

    useEffect(() => {
        if (props.isUser) {
            checkSubscriptions();
        } else {
            props.setSub(false);
            Navigate("/Login");
        }
    }, [props.isUser]);

    const showAlert = () => {
        Swal.fire({
            title: 'Subscribed!',
            text: 'Thank you for subscribing.',
            icon: 'success',
            confirmButtonText: 'Yay!!!'
        });
    };

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
        setBillingForm((prevData) => ({
            ...prevData,
            state: event.target.value,
        }));
    }

    function handleCountryChange (event) {
        setBillingForm((prevData) => ({
            ...prevData,
            country: event.target.value,
        }));
    }

    return (
        <div id="page-content" style={{paddingTop: "0px"}}>
    	{/*Page Title*/}
    	<div className="page section-header text-center">
			<div className="page-title">
        		<div className="wrapper"><h1 className="page-width">Checkout</h1></div>
      		</div>
		</div>
        {/*End Page Title*/}
        
        <div className="container">
            <div className="row billing-fields">
                {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 sm-margin-30px-bottom">
                    <div className="create-ac-content bg-light-gray padding-20px-all">
                        <form>
                            <fieldset>
                                <h2 className="login-title mb-3">Billing details</h2>
                                <div className="row">
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                        <label htmlFor="input-firstname">First Name <span className="required-f">*</span></label>
                                        <input name="firstName" value={billingForm.firstName} onChange={handleBillingForm} id="input-firstname" type="text" required/>
                                    </div>
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                        <label htmlFor="input-lastname">Last Name <span className="required-f">*</span></label>
                                        <input name="lastName" value={billingForm.lastName} onChange={handleBillingForm} id="input-lastname" type="text" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                        <label htmlFor="input-email">E-Mail <span className="required-f">*</span></label>
                                        <input name="email" value={billingForm.email} onChange={handleBillingForm} id="input-email" type="email" required />
                                    </div>
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                        <label htmlFor="input-telephone">Telephone <span className="required-f">*</span></label>
                                        <input name="telephone" value={billingForm.telephone} onChange={handleBillingForm} id="input-telephone" type="tel" required />
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset>
                                <div className="row">
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                        <label htmlFor="input-address-1">Address <span className="required-f">*</span></label>
                                        <input name="address" value={billingForm.address} onChange={handleBillingForm} id="input-address-1" type="text" required />
                                    </div>
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6">
                                        <label htmlFor="input-address-2">Apartment</label>
                                        <input name="apartment" value={billingForm.apartment} onChange={handleBillingForm} id="input-address-2" type="text" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                        <label htmlFor="input-city">City <span className="required-f">*</span></label>
                                        <input name="city" value={billingForm.city} onChange={handleBillingForm} id="input-city" type="text" required />
                                    </div>
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                        <label htmlFor="input-postcode">Post Code <span className="required-f">*</span></label>
                                        <input name="postCode" value={billingForm.postCode} onChange={handleBillingForm} id="input-postcode" type="text" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                        <label htmlFor="input-country">Country <span className="required-f">*</span></label>
                                        <select id="input-country" name="country" value={billingForm.country} onChange={handleCountryChange} required>
                                            <option value="" disabled selected hidden>Please select a country</option>
                                            {countries.map((row) => (
                                                <Option name={row.name} value={row.id} />
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                        <label htmlFor="input-zone">Region / State <span className="required-f">*</span></label>
                                        <select id="input-zone" name="state" value={billingForm.state} onChange={handleStateChange} required>
                                            <option value="" disabled selected hidden>Please select a state</option>
                                            {states.map((row) => (
                                                <Option name={row.name} value={row.id} />
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div> */}

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 offset-md-3">
                    <div className="your-order-payment">
                        <div className="your-order">
                            <h2 className="order-title mb-4">Your Order</h2>

                            <div className="table-responsive-sm order-table"> 
                                <table className="bg-white table table-bordered table-hover text-center">
                                    <thead>
                                        <tr>
                                            <th className="text-left">Plan Name</th>
                                            <th>Time</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="text-left">{plan.name}</td>
                                        <td>1 Month</td>
                                        <td>{plan.price}</td>
                                    </tr>
                                    </tbody>
                                    <tfoot className="font-weight-600">
                                        <tr>
                                            <td colspan="2" className="text-right">Total</td>
                                            <td>${plan.price}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        
                        <hr />

                        <div className="your-payment">
                            <h2 className="payment-title mb-3">payment method</h2>
                            <div className="payment-method">
                                <div className="payment-accordion">
                                    <div id="accordion" className="payment-section">
                                        <div className="card mb-2">
                                            <div className="card-header">
                                                <a className="collapsed card-link" data-toggle="collapse" href="#collapseFour"> Payment Information </a>
                                            </div>
                                            <div id="collapseFour" className="collapse" data-parent="#accordion">
                                                <div className="card-body">
                                                    <fieldset>
                                                        <div className="row">
                                                            <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                                                <label htmlFor="input-cardname">Name on Card <span className="required-f">*</span></label>
                                                                <input name="nameOnCard" value={paymentForm.nameOnCard} onChange={handlePaymentForm} placeholder="Card Name" id="input-cardname" className="form-control" type="text" required />
                                                            </div>
                                                            <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                                                <label htmlFor="input-country">Credit Card Type <span className="required-f">*</span></label>
                                                                <select name="cardType" className="form-control" value={paymentForm.cardType} onChange={handlePaymentForm} required>
                                                                    <option value=""> --- Please Select --- </option>
                                                                    <option value="American Express">American Express</option>
                                                                    <option value="Visa Card">Visa Card</option>
                                                                    <option value="Master Card">Master Card</option>
                                                                    <option value="Discover Card">Discover Card</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                                                <label htmlFor="input-cardno">Credit Card Number  <span className="required-f">*</span></label>
                                                                <input name="cardNumber" value={paymentForm.cardNumber} onChange={handlePaymentForm} placeholder="Credit Card Number" id="input-cardno" className="form-control" type="text" required />
                                                            </div>
                                                            <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                                                <label htmlFor="input-cvv">CVV Code <span className="required-f">*</span></label>
                                                                <input name="cvv" value={paymentForm.cvv} onChange={handlePaymentForm} placeholder="Card Verification Number" id="input-cvv" className="form-control" type="text" required />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                                                <label>Expiration Date <span className="required-f">*</span></label>
                                                                <input type="date" name="expDate" value={paymentForm.expDate} onChange={handlePaymentForm} className="form-control" required />
                                                            </div>
                                                            <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                                                <img className="padding-25px-top xs-padding-5px-top" src="/assets/images/payment-img.jpg" alt="card" title="card" />
                                                            </div>
                                                        </div>
                                                    </fieldset>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="order-button-payment">
                                    <button className="btn" value="Place order" type="submit" onClick={submitForm}>Place order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    );
}

export default Subscribe;