import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Navbar } from '../Navbar'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dashboard_a_main } from './Dashboard_a_main';

export const UserList = () => {

    var style1 = { width: " 1214px;" }
    var style2 = { width: " 0px; display: none;" }
    var style3 = { display: " none;" }
    var style4 = { width: " 302px;" }
    var style5 = { width: " 148px;" }
    var style6 = { width: "98px;" }
    var style7 = { width: "183px;" }
    var style8 = { width: "95px;" }
    var style9 = { width: "122px;" }
    var style10 = { display: " none;" }
    var style11 = { width: " 352px;" }
    var s3 = { display: " block;" }
    var h1 = { width: "70%" }
    var ide;


    // var id = localStorage.getItem('id')
    const [users, setusers] = useState()
    const [query, setQuery] = useState("");
    const keys = ["fname", "email"];

    const [values, setValues] = useState({
        id: "",
        fname: "",
        lname: "",
        email: "",
        password: ""
    })
    useEffect(() => {
        getUser()
        // search()
    }, [])

    const getUser = () => {
        axios.get("http://localhost:4000/user/user1/").then((res) => {
            console.log(res.data)
            console.log(".......", res.data.users)
            setusers(res.data.users)
            setValues(res.data.users)


        }).catch((err) => {
            console.log(err)
        })
    }
    const deleteUser = (id) => {
        axios.delete("http://localhost:4000/user/user/" + id).then((res) => {
            getUser()
        }).catch((err) => {
            console.log(err)
        })
    }





    // const handleupdate=(event)=>{};

    // const getiduser = (id)=>{

    // const handleupdate = (event) => {
    //     event.preventDefault();
    //     axios.put("http://localhost:4000/user/update/" + id, values).then((res) => {

    //         if (res.status === 200) {
    //             toast.success('Your Data Updated Successfully...', {
    //                 position: "top-right",
    //                 autoClose: 3000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "dark",
    //             });

    //         } else {
    //             toast.error('Error in Updateing Data!', {
    //                 position: "top-right",
    //                 autoClose: 3000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "dark",
    //             });
    //         }
    //         // console.log(res)

    //     }).catch((err) => {

    //         console.log(err)
    //     })


    // }

    // }



    return (
        <>
            {/* <input type="text"
                class="form-control search-input border-0 tt-input"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..." aria-label="Search..." autocomplete="off" spellcheck="false" dir="auto"
                style={{ position: "relative;", width: "100%" }}
            /> */}

            <div class="card">

                <Helmet>
                    {/* <title>User List</title> */}
                </Helmet>
                <div class="card-header border-bottom">
                    <div class="d-flex justify-content-center">
                        <h5 class="card-title">ALL Users</h5>
                    </div>
                    {/* <div class="d-flex justify-content-between align-items-center row py-3 gap-3 gap-md-0"> */}
                    {/* <div class="col-md-4 user_role">
                            <select id="UserRole" class="form-select text-capitalize">
                                <option value=""> Select Role </option>
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
                                <option value="Doctor">Doctor</option>
                            </select>
                        </div> */}
                    {/* <div class="col-md-4 user_plan">
                            <select id="UserPlan" class="form-select text-capitalize">
                                <option value=""> Select Plan </option>
                                <option value="Basic">Basic</option>
                                <option value="Company">Company</option>
                                <option value="Enterprise">Enterprise</option>
                                <option value="Team">Team</option>
                            </select>
                        </div>
                        <div class="col-md-4 user_status">
                            <select id="FilterTransaction" class="form-select text-capitalize">
                                <option value=""> Select Status </option>
                                <option value="Pending" class="text-capitalize">Pending</option>
                                <option value="Active" class="text-capitalize">Active</option>
                                <option value="Inactive" class="text-capitalize">Inactive</option>
                            </select>
                        </div> */}
                    {/* </div> */}
                </div>
                <div class="card-datatable table-responsive">
                    <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer">
                        <div class="row">
                            <div class="col-md-4">
                                <select id="UserRole" class="form-select text-capitalize" onChange={(e) => setQuery(e.target.value.toLowerCase())} style={{ marginTop: "6%" }} >
                                    <option value=""> Select Role </option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                    <option value="doctor">Doctor</option>

                                </select>
                            </div>
                            <div class="col">
                                <div class="dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0">
                                    <div id="DataTables_Table_0_filter" class="dataTables_filter">
                                        <label><input type="search" class="form-control" onChange={(e) => setQuery(e.target.value.toLowerCase())} placeholder="Search Users.." aria-controls="DataTables_Table_0" /></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table class="datatables-users table border-top dataTable no-footer dtr-column" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info"
                            style={style1}>
                            <thead>
                                <tr>
                                    {/* <th class="control sorting_disabled dtr-hidden" rowspan="1" colspan="1"
                                        style={style2} aria-label="">
                                    </th> */}
                                    <th tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
                                        style={style4} aria-label="User: activate to sort column ascending" aria-sort="descending">User</th>
                                    <th tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
                                        style={style5} aria-label="Role: activate to sort column ascending">Role</th>
                                    <th tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
                                        style={style5} aria-label="Role: activate to sort column ascending">User Id</th>
                                    {/* <th></th> */}
                                    <th></th>
                                    <th></th>
                                    <th class="sorting_disabled" rowspan="1" colspan="1"
                                        style={style9} aria-label="Actions">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    // users?.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query)))

                                    users?.filter((item) =>
                                        item.role.name.toLowerCase().includes(query) ||
                                        item.fname.toLowerCase().includes(query) ||
                                        item.email.toLowerCase().includes(query))?.map((u) => {

                                            return (
                                                <tr class="odd">
                                                    {/* <td class="" tabindex="0" style={style3}></td> */}
                                                    <td class="sorting_1">
                                                        <div class="d-flex justify-content-start align-items-center user-name">
                                                            <div class="avatar-wrapper">
                                                                <div class="avatar avatar-sm me-3">
                                                                    {/* <img src="../assets/img/avatars/2.png" alt="Avatar" class="rounded-circle" /> */}
                                                                    <i class="bx bx-user"></i>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex flex-column">
                                                                <a href="app-user-view-account.html" class="text-body text-truncate">
                                                                    <span class="fw-semibold">{u.fname}</span>
                                                                </a>
                                                                <small class="text-muted">{u.email}</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span class="text-truncate d-flex align-items-center">
                                                            <span class="badge badge-center rounded-pill bg-label-primary w-px-30 h-px-30 me-2">
                                                                &nbsp;
                                                                {
                                                                    u.role?.name === "Doctor" ? <i class="bx bx-pie-chart-alt bx-xs"></i> :
                                                                        u.role?.name === "User" ? <i class="bx bx-user bx-xs"></i> :
                                                                            u.role?.name === "Admin" ? <i class="bx bx-mobile-alt bx-xs"></i> : "Exit"
                                                                }
                                                            </span>
                                                            {/* <i class="bx bx-mobile-alt bx-xs"></i> Admin */}
                                                            {/* <i class="bx bx-pie-chart-alt bx-xs"></i> Doctor */}
                                                            {/* <i class="bx bx-user bx-xs"></i> User */}


                                                            {
                                                                u.role?.name
                                                            }
                                                        </span>
                                                    </td>

                                                    <td>
                                                        <span class="fw-semibold">
                                                            {
                                                                u._id
                                                            }
                                                        </span>
                                                    </td>

                                                    <td></td>

                                                    <td>
                                                        <span class="badge bg-label-success"></span>
                                                    </td>

                                                    <td>
                                                        <div class="d-inline-block text-nowrap">
                                                            {/* <button class="btn btn-sm btn-icon"> */}
                                                            {/* <i class="bx bx-edit" ></i> */}

                                                            {/* </button> */}
                                                            <button class="btn btn-sm btn-icon delete-record">
                                                                <i class="bx bx-trash" onClick={() => { deleteUser(u._id) }}></i>
                                                            </button>
                                                            {/* <button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                            <i class="bx bx-dots-vertical-rounded"></i>
                                                        </button> */}
                                                            {/* <div class="dropdown-menu dropdown-menu-end m-0">
                                                            <a href="app-user-view-account.html" class="dropdown-item">View</a>
                                                            <a href="javascript:;" class="dropdown-item">Suspend</a> */}
                                                            {/* </div> */}
                                                        </div>

                                                    </td>
                                                </tr>
                                            )
                                        })
                                }

                            </tbody>
                        </table>
                        <div class="row mx-2">

                        </div>
                    </div>
                </div>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasAddUser" aria-labelledby="offcanvasAddUserLabel">
                    <div class="offcanvas-header">
                        <h5 id="offcanvasAddUserLabel" class="offcanvas-title">Add User</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body mx-0 flex-grow-0">
                        <form class="add-new-user pt-0 fv-plugins-bootstrap5 fv-plugins-framework" id="addNewUserForm" onsubmit="return false" novalidate="novalidate">
                            <div class="row mb-3 fv-plugins-icon-container">
                                <label class="form-label" for="add-user-fullname">Full Name</label>
                                <input type="text" class="col form-control" id="add-user-fullname" placeholder="First name" name="userFullname" aria-label="John Doe" />
                                <input type="text" class="col form-control" id="add-user-fullname" placeholder="Last name" name="userFullname" aria-label="John Doe" />
                                <div class="fv-plugins-message-container invalid-feedback"></div>
                            </div>
                            <div class="mb-3 fv-plugins-icon-container">
                                <label class="form-label" for="add-user-email">Email</label>
                                <input type="text" id="add-user-email" class="form-control" placeholder="name@gmail.com" aria-label="john.doe@example.com" name="userEmail" />
                                <div class="fv-plugins-message-container invalid-feedback"></div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="add-user-contact">Contact</label>
                                <input type="text" id="add-user-contact" class="form-control phone-mask" placeholder="+91 111-111-1111" aria-label="john.doe@example.com" name="userContact" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="add-user-company">Company</label>
                                <input type="text" id="add-user-company" class="form-control" placeholder="Web Developer" aria-label="jdoe1" name="companyName" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="country">Country</label>
                                <div class="position-relative">
                                    <select id="country" class="select2 form-select select2-hidden-accessible" data-select2-id="country" tabindex="-1" aria-hidden="true">
                                        <option value="" data-select2-id="2">Select</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="Canada">Canada</option>
                                        <option value="China">China</option>
                                        <option value="France">France</option>
                                        <option value="Germany">Germany</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Korea">Korea, Republic of</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Russia">Russian Federation</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                    </select>
                                    <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1"
                                        style={style11}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-country-container"><span class="select2-selection__rendered" id="select2-country-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Select Country</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit">Submit</button>
                            <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}