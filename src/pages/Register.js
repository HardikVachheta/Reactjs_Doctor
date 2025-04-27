import axios from '../utils/axiosConfig';
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
        axios.post("/user/user", data).then((res) => {

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

        axios.get("/role/get").then((res) => {
            //console.log(res.data.data)
            setroles(res.data.data)
        })

    }

    return (
        <div class="light-style customizer-hide">
            <Helmet>
                <title>Register Page</title>
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
