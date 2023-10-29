import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Navbar_a } from './Navbar_a'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AdminProfile = () => {
    // var id = "641a014477cb5a2e91c67b05"

    var id = localStorage.getItem('id')
    const { register, handleSubmit } = useForm()
    const [users, setusers] = useState()
    const [values, setValues] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        gender:""
    })

    var s3 = { display: " block;" }
    var h1 = { width: "70%" }

    const submit = (data) => {

        console.log(data)
        // axios.post("http://localhost:4000/doctor/add", data).then((res) => {

        //     console.log(res)
        //     if (res.status === 201) {

        //         console.log("successfully")
        //         // navigate("/login")

        //     } else {
        //         alert("failed")
        //     }

        // }).catch((err) => {

        // })
    }



    useEffect(() => {
        getUser()
        // idname()
    }, [])
    const getUser = () => {
        var id = localStorage.getItem('id')
        axios.get("http://localhost:4000/user/user/" + id).then((res) => {
            // console.log(res)
            // console.log(".......", res.data.data)
            if (res.data.data?.role.name === "Admin") {
                setusers(res.data.data)
                setValues(res.data.data)
            }
            else {

            }

        }).catch((err) => {
            console.log(err)
        })
    }

    const handleupdate = (event) => {
        event.preventDefault();
        axios.put("http://localhost:4000/user/update/" + id, values).then((res) => {

            if (res.status === 200) {
                toast.success('Your Data Updated Successfully...', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });

            } else {
                toast.error('Error in Updateing Data!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
            // console.log(res)

        }).catch((err) => {

            console.log(err)
        })


    }

    return (
        <div class="layout-wrapper layout-content-navbar ">
            <div class="layout-container">
            <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <Navbar_a />
                <div class="layout-page">
                    <div class="content-wrapper">
                        {/*  Content */}
                        <div class="container-xxl flex-grow-1 container-p-y">


                            <h4 class="fw-bold py-3 mb-4">
                                <span class="text-muted fw-light">User Profile /</span> Profile
                            </h4>


                            {/*  Header */}
                            <div class="row">
                                <div class="col-12">
                                    <div class="card mb-4">
                                        <div class="user-profile-header-banner">
                                        {/* C:\Pro\Royal\MY Project\Doctor Managment\Reactjs_Folder\doctor\public\assetsdoc\img\doctors\best-doctor-bg.jpg */}
                                            <img src="../assets/img/pages/profile-banner.png" alt="Banner image" class="rounded-top" />
                                            {/* <img src="../assetsdoc/mg/doctors/best-doctor-bg.jpg" alt="Banner image" class="rounded-top" /> */}
                                        </div>
                                        <div class="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
                                            <div class="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                                                <img src="../assets/img/avatars/1.png" alt="user image" class="d-block h-auto ms-0 ms-sm-4 rounded user-profile-img" />
                                            </div>
                                            <div class="flex-grow-1 mt-3 mt-sm-5">
                                                <div class="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                                                    <div class="user-profile-info">
                                                        <h4>{users?.fname}</h4>
                                                        <span class="fw-semibold">{users?.email}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* / Header */}

                            {/*  Navbar pills */}
                            <div class="row">
                                <div class="col-md-12">
                                    <ul class="nav nav-pills flex-column flex-sm-row mb-4">
                                        <li class="nav-item"><a class="nav-link active" href="javascript:void(0);"><i class='bx bx-user me-1'></i> Profile</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* / Navbar pills */}

                            {/*  User Profile Content */}
                            <div class="row">
                                <div class="col-xl-4 col-lg-5 col-md-5">
                                    {/*  About User */}
                                    <div class="card mb-4">
                                        <div class="card-body">
                                            {/* <small class="text-muted text-uppercase">About</small> */}
                                            <h5 class="text-muted text-uppercase fw-semibold">About</h5>

                                            <ul class="list-unstyled mb-4 mt-3">

                                                <li class="d-flex align-items-center mb-3"><i class="bx bx-user"></i><span class="fw-semibold mx-2">Full Name:</span> <span>{users?.fname} {users?.lname}</span></li>
                                                <li class="d-flex align-items-center mb-3"><i class="bx bx-envelope"></i><span class="fw-semibold mx-2">Email:</span> <span>{users?.email}</span></li>
                                                <li class="d-flex align-items-center mb-3"><i class="bx bx-star"></i><span class="fw-semibold mx-2">Role:</span> <span>{users?.role.name}</span></li>
                                                <li class="d-flex align-items-center mb-3"><i class="bx bx-flag"></i><span class="fw-semibold mx-2">Gender:</span> <span>{users?.gender}</span></li>
                                                <li class="d-flex align-items-center mb-3"><i class="bx bx-detail"></i><span class="fw-semibold mx-2">Languages:</span> <span>English</span></li>
                                            </ul>

                                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editUser"> Edit </button>
                                        </div>
                                    </div>

                                </div>
                                <div class="modal fade" id="editUser" tabindex="-1" style={s3} aria-hidden="true" role="dialog">
                                    <div class="modal-dialog modal-lg modal-simple modal-edit-user">
                                        <div class="modal-content p-3 p-md-5" style={h1} >
                                            <div class="modal-body">
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div class="text-center mb-4">
                                                    <h3>Edit User Information</h3>
                                                </div>
                                                <form id="editUserForm" onSubmit={handleupdate} class="row g-3 fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate">
                                                    <div class="col-12 col-md-6 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                                                        <label class="form-label" for="modalEditUserFirstName">First Name</label>
                                                        <input type="text" id="modalEditUserFirstName" name="modalEditUserFirstName" value={values.fname} onChange={e => setValues({ ...values, fname: e.target.value })} class="form-control" placeholder="First Name" />

                                                        <div class="fv-plugins-message-container invalid-feedback"></div></div>
                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label class="form-label" for="modalEditUserLastName">Last Name</label>
                                                        <input type="text" id="modalEditUserLastName" name="modalEditUserLastName" value={values.lname} onChange={e => setValues({ ...values, lname: e.target.value })} class="form-control" placeholder="Last Name" />

                                                        <div class="fv-plugins-message-container invalid-feedback"></div></div>
                                                    <div class="col-12">
                                                        <label class="form-label" for="modalEditUserEmail">Email</label>
                                                        <input type="text" id="modalEditUserEmail" name="modalEditUserEmail" value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} class="form-control" placeholder="example@domain.com" />
                                                    </div>
                                                    {/* <div class="col-12">
                                                        <label class="form-label" for="modalEditTaxID">Gender</label>
                                                        <div class="row gy-2 text-nowrap">
                                                            <div class="col">
                                                                <div class="form-check custom-option custom-option-basic">
                                                                    <label class="form-check-label py-1" for="customRadioPaypal">
                                                                        <input value={values.gender} onChange={e => setValues({ ...values, gender: e.target.value })} class="form-check-input" type="radio" />
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
                                                                        <input value={values.gender} onChange={e => setValues({ ...values, gender: e.target.value })} class="form-check-input" type="radio" />
                                                                        <div class="d-flex justify-content-between py-0">
                                                                            <span class="custom-option-header pb-0">
                                                                                <span>Female</span>
                                                                            </span>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                    <div class="col-12">
                                                        <label class="form-label" for="modalEditUserPhone">Password</label>
                                                        <div class="input-group input-group-merge">
                                                            <input type="text" id="modalEditUserPhone" value={values.password} onChange={e => setValues({ ...values, password: e.target.value })} name="modalEditUserPhone" class="form-control phone-number-mask" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="col-12 text-center">
                                                        <button type="submit" class="btn btn-primary me-sm-3 me-1">Submit</button>
                                                        <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                                    </div>
                                                    <input type="hidden" /></form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>


                        <div class="content-backdrop fade"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
