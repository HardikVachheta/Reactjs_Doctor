import axios from '../../utils/axiosConfig';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from '../Navbar';  // Assuming Navbar is used somewhere

export const UserList = () => {

    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        getUser();
    }, []);

    // Fetch all users
    const getUser = () => {
        axios.get("/user/user1/")
            .then((res) => {
                setUsers(res.data.users);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // Delete a user
    const deleteUser = (id) => {
        axios.delete(`/user/user/${id}`)
            .then(() => {
                getUser();
                toast.success("User deleted successfully");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Error deleting user");
            });
    };

    // Handle search query change
    const handleSearch = (e) => {
        setQuery(e.target.value.toLowerCase());
    };

    // Filter users by role, name, or email
    const filteredUsers = users.filter((user) =>
        user.role.name.toLowerCase().includes(query) ||
        user.fname.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );

    // Get role icon
    const getRoleIcon = (role) => {
        switch (role.toLowerCase()) {
            case 'admin':
                return <i className="bx bx-shield-quarter"></i>;  // Admin icon
            case 'doctor':
                return <i className="bx bx-plus-medical"></i>;  // Doctor icon
            case 'user':
            default:
                return <i className="bx bx-user"></i>;  // Default user icon
        }
    };

    return (
        <>
            <div class="card">
                <div class="card-header border-bottom">
                    <div class="d-flex justify-content-center">
                        <h5 class="card-title">ALL Users</h5>
                    </div>
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
                            <div className="col">
                                <div className="dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0">
                                    <div id="DataTables_Table_0_filter" className="dataTables_filter">
                                        <div className="input-group">
                                            <span className="input-group-text" id="search-icon">
                                                <i className="bx bx-search"></i>  {/* Using Bootstrap Icons for search */}
                                            </span>
                                            <input
                                                type="search"
                                                className="form-control"
                                                style={{ width: '250px' }}
                                                onChange={handleSearch}
                                                placeholder="Search Users..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* User Table */}
                        <table className="table border-top">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Role</th>
                                    <th>User Id</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((user) => (
                                    <tr key={user._id}>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="avatar avatar-sm me-3">
                                                    <i className="bx bx-user"></i>
                                                </div>
                                                <div>
                                                    <span className="fw-semibold">{user.fname}</span>
                                                    <br />
                                                    <small className="text-muted">{user.email}</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge bg-primary">
                                                {getRoleIcon(user.role?.name)} {/* Add icon before role */}
                                                &nbsp;{user.role?.name}
                                            </span>
                                        </td>
                                        <td>{user._id}</td>
                                        <td>
                                            <button
                                                className="btn btn-sm"
                                                style={{ backgroundColor: '#dc3545', color: 'white' }} // Proper red color for delete
                                                onClick={() => deleteUser(user._id)}
                                            >
                                                <i className="bx bx-trash"></i> Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}