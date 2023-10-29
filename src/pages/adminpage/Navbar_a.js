import React from 'react'
import { Button } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar_a = () => {

    var style1 = { left: "0px; bottom: -692px;" }
    var style2 = { left: "0px; width: 0px;" }
    var style3 = { top: "692px; height: 199px; right: 4px;" }
    var style4 = { top: "155px; height: 44px;" }

    var navigate = useNavigate()

    const logout = () => {
        
        localStorage.removeItem("id")
        
    }

    return (

        <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
            <Helmet>
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/css/core.css" class="template-customizer-core-css" />

                {/* <link rel="stylesheet" href="../assets/vendor/css/theme-default.css" class="template-customizer-theme-css" /> */}
                <link rel="stylesheet" href="../assets/vendor/css/rtl/theme-semi-dark.css" class="template-customizer-theme-css" />

                <link rel="stylesheet" href="../assets/css/demo.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
                <script src="../assets/vendor/js/helpers.js"></script>
                {/* <script src="../assets/js/config.js"></script> */}

                {/* ---------------------------------------------------------------------------------------- */}
                <script src="../assets/vendor/libs/jquery/jquery.js"></script>
                <script src="../assets/vendor/libs/popper/popper.js"></script>
                <script src="../assets/vendor/js/bootstrap.js"></script>
                <script src="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>
                <script src="../assets/vendor/js/menu.js"></script>
                <script src="../assets/vendor/libs/apex-charts/apexcharts.js"></script>
                {/* <script src="../assets/js/main.js"></script> */}
                {/* <script src="../assets/js/dashboards-analytics.js"></script> */}
                <script async defer src="https://buttons.github.io/buttons.js"></script>
                {/* ---------------------------------------------------------------------------------------- */}
            </Helmet>



            {/* <!-- Menu --> */}

           
            <div class="justify-content-center">
                <Link to="#" class="app-brand-link">
                    <span class="justify-content-center">&emsp;&emsp;&emsp;&emsp;&emsp;
                        <img src='assetsdoc/img/brand/brand-logo-02-removebg-preview.png' />
                    </span>
                </Link>
            </div>
            

            <div class="menu-inner-shadow"></div>

            <ul class="menu-inner py-1">
                {/* <!-- Dashboard --> */}
                <li class="menu-item active">
                    <Link to="/dashboard_a_main" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-home-circle"></i>
                        <div data-i18n="Analytics">Dashboard</div>
                    </Link>
                </li>

                {/* <!-- Layouts --> */}
                <li class="menu-item">
                    <Link to="/AdminProfile" class="menu-link ">
                        <i class="menu-icon tf-icons bx bx-layout"></i>
                        <div data-i18n="Layouts">Profile</div>
                    </Link>
                </li>

                <li class="menu-item">
                    <Link to="/All_Doctor" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-dock-top"></i>
                        <div data-i18n="Account Settings">Doctors</div>
                    </Link>
                </li>
                
                <li class="menu-item">
                    <Link to="/UserList" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-user"></i>
                        <div data-i18n="Users">Users</div>
                    </Link>
                    
                </li>
                
                <li class="menu-item">
                    <Link to={"/login"} class="menu-link" onClick={() => { logout() }}>
                        <i class="menu-icon tf-icons bx bx-power-off me-2" ></i>
                        <div data-i18n="Users">Logout</div>
                    </Link>
                </li>

                               <div class="ps__rail-x" style={style1}>
                    <div class="ps__thumb-x" tabindex="0" style={style2}>
                    </div>
                </div>
                <div class="ps__rail-y" style={style3}>
                    <div class="ps__thumb-y" tabindex="0" style={style4}>
                    </div>
                </div>
            </ul>
        </aside>


    )
}
