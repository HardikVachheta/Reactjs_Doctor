import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
export const Navbar_u = () => {

    const logout = () => {

        localStorage.removeItem("id")

    }



    // const { query, searchPost } = useGlobalContext();

    return (
        <aside id="layout-menu" class="layout-menu-horizontal menu-horizontal  menu bg-menu-theme flex-grow-0">
            <Helmet>
                <title>User Dashboard</title>

                <link rel="canonical" href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/" />

                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/fontawesome.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/flag-icons.css" />

                <link rel="stylesheet" href="../assets/vendor/css/rtl/core.css" class="template-customizer-core-css" />
                {/* <link rel="stylesheet" href="../assets/vendor/css/rtl/theme-default.css" class="template-customizer-theme-css" /> */}
                <link rel="stylesheet" href="../assets/vendor/css/rtl/theme-semi-dark.css" class="template-customizer-theme-css" />
                <link rel="stylesheet" href="../assets/css/demo.css" />

                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/typeahead-js/typeahead.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />

                <script src="../assets/vendor/js/helpers.js"></script>

                {/* <script src="../assets/vendor/js/template-customizer.js"></script> */}
                {/* <script src="../assets/js/config.js"></script> */}
                {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"/> */}


            </Helmet>
            <div class="container-xxl d-flex h-100">
                <ul class="menu-inner">
                    {/* <!-- Dashboards --> */}

                    <li class="menu-item active">
                        <Link to="/dashboard_u_main" class="menu-link">
                            <i class="menu-icon tf-icons bx bx-home-circle"></i>
                            <div data-i18n="Dashboards">Dashboards</div>
                        </Link>
                    </li>
                    {/* <!-- Layouts --> */}
                    <li class="menu-item">
                        <Link to="/UserProfile" class="menu-link">
                            <i class="menu-icon tf-icons bx bx-layout"></i>
                            <div data-i18n="Layouts">Profile</div>
                        </Link>
                    </li>
                    <li class="menu-item">
                        <Link to="/ShowAppointment" class="menu-link">
                            <i class="menu-icon tf-icons bx bx-customize"></i>
                            <div data-i18n="Layouts">Appointment</div>
                        </Link>
                    </li>
                    {/* <li class="menu-item">
                        <input type="text" class="form-control search-input border-0 tt-input"
                            placeholder="Search..." aria-label="Search..." autocomplete="off" spellcheck="false" dir="auto" style={{ position: "relative;", width: "100%" }} />
                    </li> */}
                    <li class="menu-item" style={{ marginLeft: "55%" }}>
                        <Link to={"/login"} class="menu-link" onClick={() => { logout() }}>
                            <i class="menu-icon tf-icons bx bx-power-off me-2" ></i>
                            <div data-i18n="Users">Logout</div>
                        </Link>
                    </li>
                    {/* <!-- Apps --> */}
                    {/* <li class="menu-item">
                        <a href="javascript:void(0)" class="menu-link menu-toggle">
                            <i class='menu-icon tf-icons bx bx-customize'></i>
                            <div data-i18n="Apps">Apps</div>
                        </a>
                        <ul class="menu-sub">
                            <li class="menu-item">
                                <a href="app-email.html" class="menu-link">
                                    <i class="menu-icon tf-icons bx bx-envelope"></i>
                                    <div data-i18n="Email">Email</div>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="app-chat.html" class="menu-link">
                                    <i class="menu-icon tf-icons bx bx-chat"></i>
                                    <div data-i18n="Chat">Chat</div>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="app-calendar.html" class="menu-link">
                                    <i class="menu-icon tf-icons bx bx-calendar"></i>
                                    <div data-i18n="Calendar">Calendar</div>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="app-kanban.html" class="menu-link">
                                    <i class="menu-icon tf-icons bx bx-grid"></i>
                                    <div data-i18n="Kanban">Kanban</div>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:void(0);" class="menu-link menu-toggle">
                                    <i class='menu-icon tf-icons bx bx-food-menu'></i>
                                    <div data-i18n="Invoice">Invoice</div>
                                </a>
                                <ul class="menu-sub">
                                    <li class="menu-item">
                                        <a href="app-invoice-list.html" class="menu-link">
                                            <div data-i18n="List">List</div>
                                        </a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="app-invoice-preview.html" class="menu-link">
                                            <div data-i18n="Preview">Preview</div>
                                        </a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="app-invoice-edit.html" class="menu-link">
                                            <div data-i18n="Edit">Edit</div>
                                        </a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="app-invoice-add.html" class="menu-link">
                                            <div data-i18n="Add">Add</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:void(0);" class="menu-link menu-toggle">
                                    <i class="menu-icon tf-icons bx bx-user"></i>
                                    <div data-i18n="Users">Users</div>
                                </a>
                                <ul class="menu-sub">
                                    <li class="menu-item">
                                        <a href="app-user-list.html" class="menu-link">
                                            <div data-i18n="List">List</div>
                                        </a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="javascript:void(0);" class="menu-link menu-toggle">
                                            <div data-i18n="View">View</div>
                                        </a>
                                        <ul class="menu-sub">
                                            <li class="menu-item">
                                                <a href="app-user-view-account.html" class="menu-link">
                                                    <div data-i18n="Account">Account</div>
                                                </a>
                                            </li>
                                            <li class="menu-item">
                                                <a href="app-user-view-security.html" class="menu-link">
                                                    <div data-i18n="Security">Security</div>
                                                </a>
                                            </li>
                                            <li class="menu-item">
                                                <a href="app-user-view-billing.html" class="menu-link">
                                                    <div data-i18n="Billing & Plans">Billing & Plans</div>
                                                </a>
                                            </li>
                                            <li class="menu-item">
                                                <a href="app-user-view-notifications.html" class="menu-link">
                                                    <div data-i18n="Notifications">Notifications</div>
                                                </a>
                                            </li>
                                            <li class="menu-item">
                                                <a href="app-user-view-connections.html" class="menu-link">
                                                    <div data-i18n="Connections">Connections</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="menu-item
                  ">
                                <a href="javascript:void(0);" class="menu-link menu-toggle">
                                    <i class='menu-icon tf-icons bx bx-check-shield'></i>
                                    <div data-i18n="Roles & Permissions">Roles & Permission</div>
                                </a>
                                <ul class="menu-sub">
                                    <li class="menu-item">
                                        <a href="app-access-roles.html" class="menu-link">
                                            <div data-i18n="Roles">Roles</div>
                                        </a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="app-access-permission.html" class="menu-link">
                                            <div data-i18n="Permission">Permission</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li> */}
                </ul>
            </div>
        </aside>
    )
}