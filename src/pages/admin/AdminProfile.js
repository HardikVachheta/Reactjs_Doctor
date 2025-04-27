import axios from '../../utils/axiosConfig';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AdminProfile = () => {

    var id = localStorage.getItem('id')
    const [users, setUsers] = useState({});
    const [values, setValues] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        gender: ""
    });

    var s3 = { display: " block;" }
    var h1 = { width: "70%" }

    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        axios
            .get(`/user/user/${id}`)
            .then((res) => {
                if (res.data.data?.role.name === 'Admin') {
                    setUsers(res.data.data);
                    setValues(res.data.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleupdate = (event) => {
        event.preventDefault();
        axios.put(`/user/update/${id}`, values).then((res) => {
            if (res.status === 200) {
                toast.success('Your Data Updated Successfully...', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });
            } else {
                toast.error('Error in Updating Data!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });
            }
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <>
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
            <h4 className="fw-bold py-3 mb-4">
                <span className="text-muted fw-light">User Profile /</span> Profile
            </h4>

            {/*  Header */}
            <div className="row">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="user-profile-header-banner">
                            <img
                                src="../assets/img/pages/profile-banner.png"
                                alt="Banner image"
                                className="rounded-top"
                            />
                        </div>
                        <div className="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
                            <div className="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                                <img
                                    src="../assets/img/avatars/1.png"
                                    alt="user image"
                                    className="d-block h-auto ms-0 ms-sm-4 rounded user-profile-img"
                                />
                            </div>
                            <div className="flex-grow-1 mt-3 mt-sm-5">
                                <div className="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                                    <div className="user-profile-info">
                                        <h4>{users?.fname}</h4>
                                        <span className="fw-semibold">{users?.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  About User */}
            <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-5">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="text-muted text-uppercase fw-semibold">About</h5>
                            <ul className="list-unstyled mb-4 mt-3">
                                <li className="d-flex align-items-center mb-3">
                                    <i className="bx bx-user"></i>
                                    <span className="fw-semibold mx-2">Full Name:</span>
                                    <span>{users?.fname} {users?.lname}</span>
                                </li>
                                <li className="d-flex align-items-center mb-3">
                                    <i className="bx bx-envelope"></i>
                                    <span className="fw-semibold mx-2">Email:</span>
                                    <span>{users?.email}</span>
                                </li>
                                <li className="d-flex align-items-center mb-3">
                                    <i className="bx bx-star"></i>
                                    <span className="fw-semibold mx-2">Role:</span>
                                    <span>{users?.role?.name}</span>
                                </li>
                                <li className="d-flex align-items-center mb-3">
                                    <i className="bx bx-flag"></i>
                                    <span className="fw-semibold mx-2">Gender:</span>
                                    <span>{users?.gender}</span>
                                </li>
                                <li className="d-flex align-items-center mb-3">
                                    <i className="bx bx-detail"></i>
                                    <span className="fw-semibold mx-2">Languages:</span>
                                    <span>English</span>
                                </li>
                            </ul>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#editUser"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
                {/* Edit User Modal */}
                <div className="modal fade" id="editUser" tabIndex="-1" style={s3} aria-hidden="true" role="dialog">
                    <div className="modal-dialog modal-lg modal-simple modal-edit-user">
                        <div className="modal-content p-3 p-md-5" style={h1}>
                            <div className="modal-body">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div className="text-center mb-4">
                                    <h3>Edit User Information</h3>
                                </div>
                                <form
                                    id="editUserForm"
                                    onSubmit={handleupdate}
                                    className="row g-3"
                                    noValidate
                                >
                                    <div className="col-12 col-md-6">
                                        <label className="form-label" htmlFor="modalEditUserFirstName">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="modalEditUserFirstName"
                                            name="modalEditUserFirstName"
                                            value={values.fname}
                                            onChange={(e) => setValues({ ...values, fname: e.target.value })}
                                            className="form-control"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label" htmlFor="modalEditUserLastName">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="modalEditUserLastName"
                                            name="modalEditUserLastName"
                                            value={values.lname}
                                            onChange={(e) => setValues({ ...values, lname: e.target.value })}
                                            className="form-control"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="modalEditUserEmail">
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            id="modalEditUserEmail"
                                            name="modalEditUserEmail"
                                            value={values.email}
                                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                                            className="form-control"
                                            placeholder="example@domain.com"
                                        />
                                    </div>
                                    {/* Gender Selection */}
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="modalEditUserGender">Gender</label>
                                        <select
                                            className="form-select"
                                            id="modalEditUserGender"
                                            value={values.gender}
                                            onChange={(e) => setValues({ ...values, gender: e.target.value })}
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="modalEditUserPassword">
                                            Password
                                        </label>
                                        <div className="input-group input-group-merge">
                                            <input
                                                type="password"
                                                id="modalEditUserPassword"
                                                value={values.password}
                                                onChange={(e) => setValues({ ...values, password: e.target.value })}
                                                name="modalEditUserPassword"
                                                className="form-control"
                                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="btn btn-primary me-sm-3 me-1">Submit</button>
                                        <button type="reset" className="btn btn-label-secondary" data-bs-dismiss="modal" aria-label="Close">
                                            Cancel
                                        </button>
                                    </div>
                                    <input type="hidden" />
                                </form>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="content-backdrop fade"></div>
        </>
    )
}
