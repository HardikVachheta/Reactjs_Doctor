import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';

export const UserNavbar = () => {
  const location = useLocation();  // Get current location/path

  const logout = () => {
    localStorage.removeItem("id");
  };

  // Function to check if the menu item is active
  const isActive = (path) => location.pathname === path;

  return (
    <aside id="layout-menu" className="layout-menu-horizontal menu-horizontal menu bg-menu-theme flex-grow-0">
      <Helmet>
        <title>User Dashboard</title>
        <link rel="canonical" href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/" />
        <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
        <link rel="stylesheet" href="../assets/vendor/fonts/fontawesome.css" />
        <link rel="stylesheet" href="../assets/vendor/fonts/flag-icons.css" />
        <link rel="stylesheet" href="../assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
        <link rel="stylesheet" href="../assets/vendor/css/rtl/theme-semi-dark.css" className="template-customizer-theme-css" />
        <link rel="stylesheet" href="../assets/css/demo.css" />
        <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
        <link rel="stylesheet" href="../assets/vendor/libs/typeahead-js/typeahead.css" />
        <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
        <script src="../assets/vendor/js/helpers.js"></script>
      </Helmet>
      <div className="container-xxl d-flex h-100">
        
        <ul className="menu-inner">
          {/* Dashboards */}
          <li className={`menu-item ${isActive('/user/dashboard') ? 'active' : ''}`}>
            <Link to="/user/dashboard" className="menu-link">
              <i className="menu-icon tf-icons bx bx-home-circle"></i>
              <div data-i18n="Dashboards">Dashboards</div>
            </Link>
          </li>
          {/* Profile */}
          <li className={`menu-item ${isActive('/user/profile') ? 'active' : ''}`}>
            <Link to="/user/profile" className="menu-link">
              <i className="menu-icon tf-icons bx bx-layout"></i>
              <div data-i18n="Layouts">Profile</div>
            </Link>
          </li>
          {/* Appointment */}
          <li className={`menu-item ${isActive('/user/showAppointment') ? 'active' : ''}`}>
            <Link to="/user/showAppointment" className="menu-link">
              <i className="menu-icon tf-icons bx bx-customize"></i>
              <div data-i18n="Layouts">Appointment</div>
            </Link>
          </li>
          {/* Logout */}
          <li className="menu-item" style={{ marginLeft: "55%" }}>
            <Link to="/login" className="menu-link" onClick={logout}>
              <i className="menu-icon tf-icons bx bx-power-off me-2"></i>
              <div data-i18n="Users">Logout</div>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
