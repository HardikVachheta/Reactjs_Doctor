import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export const Navbar_u2 = () => {
    const logout = () => {

        localStorage.removeItem("id")

    }
    return (
        <header class="header header-fixed header-one">

            <Helmet>

                <link rel="shortcut icon" href="../assetsdoc/img/favicon.png" type="image/x-icon" />
                <link rel="stylesheet" href="../assetsdoc/css/bootstrap.min.css" />
                <link rel="stylesheet" href="../assetsdoc/plugins/fontawesome/css/fontawesome.min.css" />
                <link rel="stylesheet" href="../assetsdoc/plugins/fontawesome/css/all.min.css" />
                <link rel="stylesheet" href="../assetsdoc/css/feather.css" />
                <link rel="stylesheet" href="../assetsdoc/css/bootstrap-datetimepicker.min.css" />
                <link rel="stylesheet" href="../assetsdoc/css/owl.carousel.min.css" />
                <link rel="stylesheet" href="../assetsdoc/css/aos.css" />
                <link rel="stylesheet" href="../assetsdoc/css/custom.css" />

            </Helmet>
            <div class="container">
                <nav class="navbar navbar-expand-lg header-nav">
                    <div class="navbar-header">
                        <a id="mobile_btn" href="javascript:void(0);">
                            <span class="bar-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </a>
                        <a href="index.html" class="">
                            <img src="assetsdoc/img/brand/brand-logo-02-removebg-preview.png" class="img-fluid" alt="Logo" />
                        </a>
                    </div>
                    <div class="main-menu-wrapper">
                        <div class="menu-header">
                            <a href="index.html" class="menu-logo mb-3">
                                <img src="assetsdoc/img/brand/brand-logo-02-removebg-preview.png" class="img-fluid" alt="Logo" />
                            </a>
                            <a id="menu_close" class="menu-close" href="javascript:void(0);">
                                <i class="fas fa-times"></i>
                            </a>
                        </div>
                        <ul class="main-nav">
                            <li class="has-submenu active">
                            <Link to="/dashboard_u_main">Dashboard <i class="fas fa-chevron"></i></Link>
                            </li>
                            <li class="has-submenu">
                                <Link to="/UserProfile">Profile <i class="fas fa-chevron"></i></Link>
                            </li>
                            <li class="has-submenu">
                                <Link to="/ShowAppointment">Appointment <i class="fas fa-chevron"></i></Link>
                            </li>
                        </ul>
                    </div>
                    <ul class="nav header-navbar-rht">

                        <li class="nav-item">
                            {/* <a href="login.html" class="btn btn-primary prime-btn"> */}
                            <Link to={"/login"} class="nav-link header-login" onClick={() => { logout() }}>
                                {/* <i class="feather-lock"></i> */}
                                <i class="bx bx-power-off me-2" ></i>Logout
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}
