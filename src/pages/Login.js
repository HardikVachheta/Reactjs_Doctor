import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Dashboard_a } from './adminpage/Dashboard_a'
import { Dashboard_d } from './doctorpage/Dashboard_d'
import { Dashboard_u } from './userpage/Dashboard_u'

export const Login = () => {

    const { register, handleSubmit } = useForm()

    var navigate = useNavigate()

    const submit = (data) => {

        axios.post('http://localhost:4000/user/user/login', data).then((res) => {
            if (res.data) {
                console.log("user found....")
                console.log(data)
                console.log(res.data)
                console.log(res.data.data[0].role.name)
                console.log("id name :- ", res.data.data[0]?._id)

                localStorage.setItem("id", res.data.data[0]?._id)
                console.log(res.data.data[0]?.role.name)
                if (res.data.data[0]?.role.name === "User") {
                    // <Dashboard_u idname={res.data.data[0]?._id}/>
                    navigate("/dashboard_u_main")
                }
                else if (res.data.data[0]?.role.name === "Admin") {
                    // <Dashboard_a idname={res.data}/>
                    navigate("/dashboard_a_main")
                }
                else {
                    // <Dashboard_d idname={res.data.data[0]?._id}/>
                    navigate("/dashboard_d_main")
                }
                //role...

            }

        }).catch((err) => {
            console.log("user not found....")
            alert("user not found....")
        })
    }


    return (

        <div class="light-style customizer-hide">
            <Helmet>
                <title>Login Basic</title>
                <link rel="canonical" href="https://themeselection.com/products/sneat-bootstrap-html-admin-template/" />
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/css/core.css" class="template-customizer-core-css" />
                <link rel="stylesheet" href="../assets/vendor/css/theme-default.css" class="template-customizer-theme-css" />
                <link rel="stylesheet" href="../assets/css/demo.css" />

                <link rel="stylesheet" type="text/css" href="../assets/vendor/css/rtl/theme-default.css" class="template-customizer-theme-css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/css/pages/page-auth.css" />
                {/* <script src="../assets/vendor/js/helpers.js"></script> */}
                {/* <script src="../assets/js/config.js"></script> */}
                {/* <script async="async" src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
                <script src="../assets/vendor/libs/jquery/jquery.js"></script>
                <script src="../assets/vendor/libs/popper/popper.js"></script>
                <script src="../assets/vendor/js/bootstrap.js"></script>
                <script src="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script> */}

                {/* <script src="../assets/vendor/js/menu.js"></script>
                <script src="../assets/js/main.js"></script>
                <script async defer src="https://buttons.github.io/buttons.js"></script> */}
            </Helmet>
            <div class="container-xxl">
                <div class="authentication-wrapper authentication-basic container-p-y">
                    <div class="authentication-inner">
                        {/* <!-- Register --> */}
                        <div class="card">
                            <div class="card-body">
                                <div class="justify-content-center">
                                    <Link to="#" class="app-brand-link">

                                        <span class="justify-content-center">&emsp;&emsp;&emsp;&emsp;&emsp;
                                            <img src='assetsdoc/img/brand/brand-logo-02.png' />
                                        </span>

                                    </Link>
                                </div>

                                <div class="app-brand justify-content-center">
                                    <span class="app-brand-text demo text-body fw-bolder">Login Page</span>
                                </div>

                                <div class="d-flex justify-content-between">
                                    <p class="mb-4">Please sign-in to your account</p></div>

                                <form
                                    id="formAuthentication"
                                    class="mb-3"
                                    onSubmit={handleSubmit(submit)}>
                                    <div class="mb-3">
                                        <div class="d-flex justify-content-between">
                                            <label for="email" class="form-label">Email or Username</label></div>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="email"
                                            {...register("email")}
                                            placeholder="Enter your email or username"
                                            autofocus="" />
                                    </div>
                                    <div class="mb-3 form-password-toggle">
                                        <div class="d-flex justify-content-between">
                                            <label class="form-label" for="password">Password</label>
                                            <Link to="/forgot">
                                                <small>Forgot Password?</small>
                                            </Link>
                                        </div>
                                        <div class="input-group input-group-merge">
                                            <input
                                                type="password"
                                                id="password"
                                                class="form-control"
                                                {...register("password")}
                                                placeholder="············"
                                                aria-describedby="password" />
                                            <span class="input-group-text cursor-pointer">
                                                <i class="bx bx-hide"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="remember-me" />
                                            <div class="d-flex justify-content-between">
                                                <label class="form-check-label" for="remember-me">
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <button class="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                                    </div>
                                </form>

                                <p class="text-center">
                                    <span>New on our platform?</span>
                                    <Link to="/">
                                        <span> Create an account</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
