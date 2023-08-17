import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [errorMessage, seterrorMessage] = useState("");
    const navigate = useNavigate();
    const handleLogin = () => {
        if (email === "admin@gmail.com" && password === "admin") {
            
            navigate('/bankFormDetails');
        } else {
            seterrorMessage('Invalid email or password');
            setTimeout(() => {
                seterrorMessage('')
                // Clear input fields
                setEmail("");
                setPassword("");
            }, 3000);


        }
    }
    return (
        <>
            <form action="" method="POST">
                <section class="h-100 gradient-form" style={{ backgroundColor: "#eee" }} id='loginForm'>
                    <div class="container py-4 h-100">
                        <div class="row  d-flex justify-content-center align-items-center h-100" style={{ marginTop: "4rem" }}>
                            <div class="col-xl-10">
                                <div class="card rounded-3 text-black">
                                    <div class="row g-0">
                                        <div class="col-lg-6">
                                            <div class="card-body p-md-5 mx-md-4">

                                                <div class="text-center">
                                                    <img src="image/exato_logo.png"
                                                        style={{ width: "105px" }} alt="logo" />
                                                    <h4 class="mt-1 mb-3 pb-1">We are The Exato Team</h4>
                                                </div>

                                                <form>
                                                    <p>Please login to your account</p>

                                                    {/* Show the Error message */}
                                                    {errorMessage && <div class="alert alert-danger" role="alert">
                                                        {errorMessage}
                                                    </div>}

                                                    <div class="form-outline mb-2">
                                                        <input type="email" id="form2Example11" class="form-control"
                                                            placeholder="Phone number or email address" value={email}
                                                            onChange={(e) => setEmail(e.target.value)} required />
                                                        <label class="form-label" for="form2Example11" >Username</label>
                                                    </div>

                                                    <div class="form-outline mb-2">
                                                        <input type="password" id="form2Example22" class="form-control" value={password}
                                                            onChange={(e) => setPassword(e.target.value)} required />
                                                        <label class="form-label" for="form2Example22">Password</label>
                                                    </div>

                                                    <div class="text-center pt-1 mb-2 pb-1">
                                                        <button onClick={handleLogin} class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
                                                            in</button>
                                                        <div>
                                                            <a class="text-muted" href="#!" >Forgot password?</a>
                                                        </div>
                                                    </div>

                                                    <div class="d-flex align-items-center justify-content-center pb-3">
                                                        <p class="mb-0 me-2">Don't have an account?</p>
                                                        <Link to={"/register"} className='btn btn-outline-danger'>Create new</Link>

                                                    </div>

                                                </form>

                                            </div>
                                        </div>
                                        <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                                            <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                                                <h4 class="mb-3">We are more than just a company</h4>
                                                <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </>
    )
}

export default Login