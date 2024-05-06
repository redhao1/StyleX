import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register (props) {
    const navigate = useNavigate();
    const [registerForm, setRegisterForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    function handleRegisterForm (event) {
        const {name, value} = event.target;
        setRegisterForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleRegister (event) {
        event.preventDefault();
        try {
            const response = await axios.post("/Register", {firstName: registerForm.firstName, lastName: registerForm.lastName, email: registerForm.email, password: registerForm.password});
            if (response.status === 200) {
                navigate("/Login");
            };
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (props.isUser) {
            navigate("/");
        }
    }, [props.isUser]);

    return(
        <div id="page-content" style={{paddingTop: "0px"}}>
    	<div class="page section-header text-center">
			<div class="page-title">
        		<div class="wrapper"><h1 class="page-width">Create an Account</h1></div>
      		</div>
		</div>
        
        <div class="container">
        	<div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3">
                	<div class="mb-4">
                       <form onSubmit={handleRegister} id="CustomerLoginForm" acceptCharset="UTF-8" class="contact-form">	
                          <div class="row">
	                          <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="form-group">
                                    <label htmlFor="FirstName">First Name</label>
                                    <input type="text" name="firstName" placeholder="" id="FirstName" autofocus="" onChange={handleRegisterForm} value={registerForm.firstName} />
                                </div>
                               </div>
                               <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="form-group">
                                    <label htmlFor="LastName">Last Name</label>
                                    <input type="text" name="lastName" placeholder="" id="LastName" onChange={handleRegisterForm} value={registerForm.lastName} />
                                </div>
                               </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="form-group">
                                    <label htmlFor="CustomerEmail">Email</label>
                                    <input type="email" name="email" placeholder="" id="CustomerEmail" class="" autocorrect="off" autocapitalize="off" autofocus="" onChange={handleRegisterForm} value={registerForm.email} />
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="form-group">
                                    <label htmlFor="CustomerPassword">Password</label>
                                    <input type="password" name="password" placeholder="" id="CustomerPassword" class="" onChange={handleRegisterForm} value={registerForm.password} />                        	
                                </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                                <input type="submit" class="btn mb-3" value="Create" />
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