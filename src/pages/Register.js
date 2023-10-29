import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
    const { register, handleSubmit } = useForm()
    const [roles, setroles] = useState()

    var box = { display: "none;" }

    var dis = { display: "flex;" }
    var dis2 = { display: "inline-block;" }
    var dis3 = { display: "block;" }
    var dis4 = { display: "grid;" }
    var dis5 = { overflowY: " auto;" }

    var bg = { backgroundColor: "rgb(255, 255, 255);" }

    var navigate = useNavigate()

    const submit = (data) => {

        console.log(data)
        axios.post("http://localhost:4000/user/user", data).then((res) => {

            // console.log(res.data.data.fname)
            if (res.status === 201) {

                navigate("/login")

            } else {
                alert("failed")
            }

        }).catch((err) => {

        })
    }


    useEffect(() => {
        getRoles();
    }, [])

    const getRoles = () => {

        axios.get("http://localhost:4000/role/get").then((res) => {
            //console.log(res.data.data)
            setroles(res.data.data)
        })

    }

    return (
        <div class="light-style customizer-hide">
            <Helmet>

                <title>Register Page</title>
                <link rel="canonical" href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/"></link>
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/fontawesome.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/flag-icons.css" />
                <link rel="stylesheet" href="../assets/vendor/css/core.css" class="template-customizer-core-css" />
                <link rel="stylesheet" href="../assets/vendor/css/theme-default.css" class="template-customizer-theme-css" />
                <link rel="stylesheet" href="../assets/css/demo.css" />
                <link rel="stylesheet" href="../assets/vendor/css/pages/page-auth.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/animate-css/animate.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/sweetalert2/sweetalert2.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/typeahead-js/typeahead.css" />
                <link rel="stylesheet" type="text/css" href="../assets/vendor/css/rtl/core.css" class="template-customizer-core-css" />
                <link rel="stylesheet" type="text/css" href="../assets/vendor/css/rtl/theme-default.css" class="template-customizer-theme-css" />

                <script src="../assets/vendor/libs/jquery/jquery.js"></script>
                <script src="../assets/vendor/libs/popper/popper.js"></script>
                <script src="../assets/vendor/js/bootstrap.js"></script>
                <script src="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>
                <script src="../assets/vendor/js/helpers.js"></script>
                {/* <script src="../assets/vendor/js/menu.js"></script> */}
                <script src="../assets/js/main.js"></script>
                {/* <script src="../assets/js/config.js"/> */}
                <script async defer src="https://buttons.github.io/buttons.js"></script>

            </Helmet>
            
            <div class="container-xxl">
                <div class="authentication-wrapper authentication-basic container-p-y">
                    <div class="authentication-inner">
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
                                    <span class="app-brand-text demo text-body fw-bolder">Register Page</span>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <p class="mb-4">Make your app management easy and fun!</p></div>

                                <form id="formAuthentication" class="mb-3" onSubmit={handleSubmit(submit)}>
                                    <div class="mb-3">
                                        <div class="d-flex justify-content-between">
                                            <label for="username" class="form-label">Name</label>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="row gy-3 text-nowrap">
                                                <div class="col">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="fname"
                                                        {...register("fname")}
                                                        placeholder="First name"
                                                        autofocus
                                                    />
                                                </div>
                                                <div class="col">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="lname"
                                                        {...register("lname")}
                                                        placeholder="Last name"
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <div class="d-flex justify-content-between">
                                            <label for="email" class="form-label">Email</label></div>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="email"
                                            placeholder="Enter your email"
                                            {...register("email")}
                                        />
                                    </div>

                                    <div class="md-3">
                                        <div class="col-md-8">
                                            <div class="d-flex justify-content-between">
                                                <label for="gender" class="form-label">Gender</label>
                                            </div>
                                            <div class="row gy-2 text-nowrap">
                                                <div class="col">
                                                    <div class="form-check custom-option custom-option-basic">
                                                        <label class="form-check-label py-1" for="customRadioPaypal">
                                                            <input {...register("gender")} class="form-check-input" type="radio" value="Male" />
                                                            <div class="d-flex justify-content-between py-0">
                                                                <span class="custom-option-header pb-0">
                                                                    <span>Male</span>
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="form-check custom-option custom-option-basic">&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <label class="form-check-label py-1" for="customRadioCC">
                                                            <input {...register("gender")} class="form-check-input" type="radio" value="Female" />
                                                            <div class="d-flex justify-content-between py-0">
                                                                <span class="custom-option-header pb-0">
                                                                    <span>Female</span>
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div><p></p></div>
                                    </div>

                                    <div class="mb-3 form-password-toggle" ><div class="d-flex justify-content-between">
                                        <label class="form-label" for="password">Password</label></div>
                                        <div class="input-group input-group-merge">
                                            <input
                                                type="password"
                                                id="password"
                                                class="form-control"
                                                {...register("password")}
                                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                aria-describedby="password"
                                            />

                                            <span class="input-group-text cursor-pointer"  >
                                                <i class="bx bx-hide"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="mb-3" >
                                        <div class="input-group">
                                            <select class="form-select" id="inputGroupSelect02" {...register("role")}>
                                                <option selected>Choose...</option>
                                                {
                                                    roles?.map((role) => {
                                                        return (
                                                            <option value={role._id}>{role.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                            <label class="input-group-text" for="inputGroupSelect02">Role</label>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary d-grid w-100" id="type-success">Sign up</button>
                                </form>

                                <p class="text-center">
                                    <span>Already have an account? </span>
                                    <Link to="/login">
                                        <span>Sign in instead</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div >
        </div >
    )
}
