import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

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
                localStorage.setItem("role",res.data.data[0].role.name)
                console.log("id name :- ", res.data.data[0]?._id)

                localStorage.setItem("id", res.data.data[0]?._id)
                console.log(res.data.data[0]?.role.name)
                if (res.data.data[0]?.role.name === "User") {
                    // <Dashboard_u idname={res.data.data[0]?._id}/>
                    navigate("/user/dashboard")
                }
                else if (res.data.data[0]?.role.name === "Admin") {
                    // <Dashboard_a idname={res.data}/>
                    navigate("/admin/dashboard")
                }
                else {
                    // <Dashboard_d idname={res.data.data[0]?._id}/>
                    navigate("/doctor/dashboard")
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
