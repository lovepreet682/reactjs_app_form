import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <>
            <section class="h-100 gradient-form" id='register' style={{ backgroundColor: "#eee" }} >
                <div class="container py-4 h-100">
                    <div class="row  d-flex justify-content-center align-items-center h-100" style={{ marginTop: "4rem" }}>
                        <div class="col-xl-5">
                            <div class="card rounded-3 text-black">
                                <div class="row g-0">
                                    <div class="card-body p-md-5 mx-md-4">
                                        <div class="text-center">
                                            <img src="image/exato_logo.png"
                                                style={{ width: "105px" }} alt="logo" />
                                            <h4 class="mt-1 mb-3 pb-1">We are The Exato Team</h4>
                                        </div>

                                        <form>
                                            <p>Please Register to your account</p>

                                            <div class="form-outline mb-2">
                                            <label class="form-label" for="form2Example22">Name</label>
                                                <input type="text" placeholder='Enter Your Name' id="form2Example22" class="form-control" />
                                                
                                            </div>

                                            <div class="form-outline mb-2">
                                            <label class="form-label" for="form2Example11">Username</label>
                                                <input type="email" id="form2Example11" class="form-control"
                                                    placeholder="Phone number or email address" />
                                                
                                            </div>

                                            <div class="form-outline mb-2">
                                            <label class="form-label" for="form2Example11">Password</label>
                                                <input type="password" id="form2Example22" class="form-control" />
                                               
                                            </div>

                                            <div class="text-center pt-1 mb-2 pb-1">
                                                <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Submit
                                                    </button>
                                                <div>
                                                    <a class="text-muted" href="#!" >Forgot password?</a>
                                                </div>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-center pb-3">
                                                <p class="mb-0 me-2">Click Here To </p>
                                                <Link to={"/login"} className='btn btn-outline-danger'>Login</Link>
                                                
                                            </div>

                                        </form>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register