import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

function Login (props) {
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });

    function handleChangeLogin (event) {
        const {name, value} = event.target;
        setLoginForm((prev) => {
            return ({
                ...prev,
                [name]: value,
            });
        });
    }

    async function handleLogin (event) {
        event.preventDefault();
        try {
            const response = await axios.post("/Login", {username: loginForm.email, password: loginForm.password});
            if (response.status === 200) {
                props.setUser();
                if (typeof window !== 'undefined' && window.history.length > 1) {
                    navigate(-1);
                  } else {
                    navigate("/");
                  }
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Invalid username or password. Please try again.',
                confirmButtonText: 'OK',
                allowOutsideClick: false,
              });
        }
    };

    useEffect(() => {
        if (props.isUser) {
            navigate("/");
        }
    }, [props.isUser]);

    return (
        <div id="page-content" style={{paddingTop: "0px"}}>
    	<div className="page section-header text-center">
			<div className="page-title">
        		<div className="wrapper"><h1 className="page-width">Login</h1></div>
      		</div>
		</div>
        
        <div className="container">
        	<div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3">
                	<div className="mb-4">
                       <form onSubmit={handleLogin} id="CustomerLoginForm" acceptCharset="UTF-8" className="contact-form">	
                          <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="CustomerEmail">Email</label>
                                    <input type="email" name="email" placeholder="" id="CustomerEmail" className="" autocorrect="off" autocapitalize="off" autofocus="" onChange={handleChangeLogin} value={loginForm.email} />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="CustomerPassword">Password</label>
                                    <input type="password" name="password" placeholder="" id="CustomerPassword" className="" onChange={handleChangeLogin} value={loginForm.password} />                        	
                                </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                                <input type="submit" className="btn mb-3" value="Sign In" />
                                <p className="mb-4">
									<a href="#" id="RecoverPassword">Forgot your password?</a> &nbsp; | &nbsp;
								    <Link to="/Register" id="customer_register_link">Create account</Link>
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