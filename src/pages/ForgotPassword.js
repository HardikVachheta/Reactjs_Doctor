import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ForgotPassword = () => {

    const { register, handleSubmit } = useForm()

    var navigate = useNavigate()

    const submit = (data) => {
        axios.post('http://localhost:4000/user/user/forgot', data).then((res) => {
            if (res.data) {
                console.log("user forgot password..." + data)
                toast.success('Send password on your email address ', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                    // navigate("/login")
            }
            else{
                toast.error('Error in email address', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }

        }).catch((err) => {
            console.log("user not found....")
            alert("user not found....")
        })
    }


    return (

        <div class="light-style customizer-hide">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
            <Helmet>
                <title>Forgot Password</title>

                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/css/core.css" class="template-customizer-core-css" />
                <link rel="stylesheet" href="../assets/vendor/css/theme-default.css" class="template-customizer-theme-css" />
                <link rel="stylesheet" href="../assets/css/demo.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/css/pages/page-auth.css" />
                <script src="../assets/vendor/js/helpers.js"></script>

                {/* <script src="../assets/js/config.js"></script> */}
                {/* <script src="../assets/vendor/libs/jquery/jquery.js"></script>
                <script src="../assets/vendor/libs/popper/popper.js"></script>
                <script src="../assets/vendor/js/bootstrap.js"></script>
                <script src="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script> */}

                {/* <script src="../assets/vendor/js/menu.js"></script> */}
                {/* <script src="../assets/js/main.js"></script>
                <script async defer src="https://buttons.github.io/buttons.js"></script> */}
            </Helmet>
            {/* <!-- Content --> */}

            <div class="container-xxl">
                <div class="authentication-wrapper authentication-basic container-p-y">
                    <div class="authentication-inner py-4">
                        {/* <!-- Forgot Password --> */}
                        <div class="card">
                            <div class="card-body">
                                <div class="justify-content-center">
                                    <Link to="#" class="app-brand-link">
                                        <span class="justify-content-center">&emsp;&emsp;&emsp;&emsp;&emsp;
                                            <img src='assetsdoc/img/brand/brand-logo-02.png' />
                                        </span>
                                    </Link>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <h4 class="mb-2">Forgot Password? 🔒</h4></div>
                                {/* <div class="d-flex justify-content-between"> */}
                                <p class="mb-4">Enter your email and we'll send you instructions to reset your password</p>
                                {/* </div> */}
                                <form id="formAuthentication" onSubmit={handleSubmit(submit)} class="mb-3" >
                                    <div class="mb-3">
                                        <div class="d-flex justify-content-between">
                                            <label for="email" class="form-label">Email</label></div>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="email"
                                            {...register("email")}
                                            placeholder="Enter your email"
                                            autofocus
                                        />
                                    </div>
                                    <button type="submit" class="btn btn-primary d-grid w-100">Send Reset Link</button>
                                </form>
                                <div class="text-center">
                                    <Link to="/login" class="d-flex align-items-center justify-content-center">
                                        <i class="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
                                        Back to login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}