import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';

export const DoctorNavbar = () => {
    const location = useLocation();  // Get current location/path

    const logout = () => {
        localStorage.removeItem("id");
    };

    // Function to check if the menu item is active
    const isActive = (path) => location.pathname === path;

    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <Helmet>
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/css/core.css" className="template-customizer-core-css" />
                <link rel="stylesheet" href="../assets/vendor/css/rtl/theme-semi-dark.css" className="template-customizer-theme-css" />
                <link rel="stylesheet" href="../assets/css/demo.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
            </Helmet>

            <div className="justify-content-center">
                <Link to="#" className="app-brand-link">
                    <span className="justify-content-center">
                        <img src='assetsdoc/img/brand/brand-logo-02-removebg-preview.png' alt="Brand Logo" />
                    </span>
                </Link>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">
                {/* Dashboard */}
                <li className={`menu-item ${isActive('/dashboard_d_main') ? 'active' : ''}`}>
                    <Link to="/dashboard_d_main" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-home-circle"></i>
                        <div data-i18n="Analytics">Dashboard</div>
                    </Link>
                </li>

                {/* Profile */}
                <li className={`menu-item ${isActive('/DoctorProfile') ? 'active' : ''}`}>
                    <Link to="/DoctorProfile" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-layout"></i>
                        <div data-i18n="Layouts">Profile</div>
                    </Link>
                </li>

                {/* Clinic Page */}
                <li className={`menu-item ${isActive('/Clinic') ? 'active' : ''}`}>
                    <Link to="/Clinic" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-dock-top"></i>
                        <div data-i18n="Account Settings">Clinic Page</div>
                    </Link>
                </li>

                {/* Clinic View */}
                <li className={`menu-item ${isActive('/ClinicView') ? 'active' : ''}`}>
                    <Link to="/ClinicView" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
                        <div data-i18n="Authentications">Clinic View</div>
                    </Link>
                </li>

                {/* Logout */}
                <li className="menu-item">
                    <Link to="/login" className="menu-link" onClick={logout}>
                        <i className="menu-icon tf-icons bx bx-power-off me-2"></i>
                        <div data-i18n="Users">Logout</div>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};
