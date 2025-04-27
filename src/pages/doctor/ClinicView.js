import React, { useEffect, useState } from 'react'
import axios from '../../utils/axiosConfig';

export const ClinicView = () => {
    // var txt1 = { textAlign: "center;" }
    var style2 = { width: " 100px;" }
    var style3 = { width: " 119px;" }
    var style4 = { width: " 217px;" }
    var style5 = { width: " 115px;" }
    var style6 = { width: " 0px;", display: " none;" }
    var style6 = { width: " 1391px;" }
    var style1 = { width: " 353px;" }
    var style7 = { width: " 145px;" }
    var style8 = { display: " none;" }
    var style10 = { width: "351.984px;" }


    const [clinic1, setClinic] = useState()


    useEffect(() => {
        getClinic()
    }, [])

    const getClinic = () => {

        var id = localStorage.getItem('id')

        axios.get("/clinic/get1/" + id).then((res) => {
            console.log(res.data.data)
            setClinic(res.data.data)

        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div class="card">
            <div class="card-header border-bottom">
                <h5 class="card-title">Clinic List</h5>
            </div>
            <div class="card-datatable table-responsive">
                <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer">

                    <table class="datatables-users table border-top dataTable no-footer dtr-column" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info" style={style7}>
                        <thead>
                            <tr>
                                <th class="" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style={style1} aria-label="User: activate to sort column ascending" aria-sort="descending">Clinic Name</th>
                                <th class="" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style={style2} aria-label="Role: activate to sort column ascending">Address</th>
                                <th class="" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style={style3} aria-label="Plan: activate to sort column ascending">Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clinic1?.map((u) => {
                                    return (


                                        <tr class="odd">
                                            {/* <td class="" tabindex="0" style={style8}></td> */}
                                            <td class="sorting_1">
                                                <div class="d-flex justify-content-start align-items-center user-name">
                                                    <div class="d-flex flex-column">
                                                        <a href="app-user-view-account.html" class="text-body text-truncate">
                                                            <span class="fw-semibold">{u.clinicname}</span>
                                                        </a>
                                                        <small class="text-muted"></small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span class="text-truncate d-flex align-items-center">
                                                    <span class="badge badge-center rounded-pill bg-label-primary w-px-30 h-px-30 me-2">
                                                        <i class="bx bx-home" style={{ fontSize: "1.25rem " }}></i>
                                                        {/* <i class="bx bx-pie-chart-alt bx-xs"></i> */}
                                                    </span>
                                                    {u.address} , {u.cityId.cityname}, {u.stateId}
                                                </span>
                                            </td>
                                            <td><span class="fw-semibold">{u.phoneno}</span></td>
                                            {/* <td>Auto Debit</td> */}
                                            {/* <td><span class="badge bg-label-success">Active</span></td> */}

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
            {/* <!-- Offcanvas to add new user --> */}
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasAddUser" aria-labelledby="offcanvasAddUserLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasAddUserLabel" class="offcanvas-title">Add User</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body mx-0 flex-grow-0">
                    <form class="add-new-user pt-0 fv-plugins-bootstrap5 fv-plugins-framework" id="addNewUserForm" onsubmit="return false" novalidate="novalidate">
                        <div class="mb-3 fv-plugins-icon-container">
                            <label class="form-label" for="add-user-fullname">Full Name</label>
                            <input type="text" class="form-control" id="add-user-fullname" placeholder="John Doe" name="userFullname" aria-label="John Doe" />
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                        <div class="mb-3 fv-plugins-icon-container">
                            <label class="form-label" for="add-user-email">Email</label>
                            <input type="text" id="add-user-email" class="form-control" placeholder="john.doe@example.com" aria-label="john.doe@example.com" name="userEmail" />
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="add-user-contact">Contact</label>
                            <input type="text" id="add-user-contact" class="form-control phone-mask" placeholder="+1 (609) 988-44-11" aria-label="john.doe@example.com" name="userContact" />
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
                                <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1" style={style10} ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-country-container"><span class="select2-selection__rendered" id="select2-country-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Select Country</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="user-role">User Role</label>
                            <select id="user-role" class="form-select">
                                <option value="subscriber">Subscriber</option>
                                <option value="editor">Editor</option>
                                <option value="maintainer">Maintainer</option>
                                <option value="author">Author</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="user-plan">Select Plan</label>
                            <select id="user-plan" class="form-select">
                                <option value="basic">Basic</option>
                                <option value="enterprise">Enterprise</option>
                                <option value="company">Company</option>
                                <option value="team">Team</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit">Submit</button>
                        <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
                        <input type="hidden" />
                    </form>
                </div>
            </div>
        </div>
    )
}