import React from 'react';
import { UserNavbar } from '../components/Navbar/UserNavbar';
import { Link, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { UserDashboard } from '../pages/user/UserDashboard';
import { DoctorDetails_u } from '../pages/user/DoctorDetails_u';
import { UserProfile } from '../pages/user/UserProfile';
import { ShowAppointment } from '../pages/user/ShowAppointment';

export const UserRoutes = () => {
    
    return (
        <div class="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
            <Helmet>
                <title>User Dashboard</title>
            </Helmet>
            <div className="layout-container">
                <div class="layout-container">
                    <nav class="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme" id="layout-navbar">
                        <div class="container-xxl">
                            <div class="navbar-brand app-brand demo d-none d-xl-flex py-0 me-4">
                                <a href="index.html" class="app-brand-link gap-2">
                                    <div class="app-brand-text demo menu-text fw-bolder">
                                        <Link to="#" class="app-brand-link">
                                            <span>
                                                <img src='/assetsdoc/img/brand/brand-logo-02-removebg-preview.png' />
                                            </span>
                                        </Link>
                                    </div>
                                </a>
                                <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-xl-none">
                                    <i class="bx bx-chevron-left bx-sm align-middle"></i>
                                </a>
                            </div>
                        </div>
                    </nav>
                    <div class="layout-page">
                        <div class="content-wrapper">
                            <UserNavbar />
                            <div class="container-xxl flex-grow-1 container-p-y">
                                <Routes>

                                    <Route path="/user/dashboard" element={<UserDashboard />} />
                                    <Route path="/user/doctor-details/:id" element={<DoctorDetails_u />} />
                                    <Route path="/user/profile" element={<UserProfile />} />
                                    <Route path="/user/showAppointment" element={<ShowAppointment />} />
                                    
                                    {/* <Route path="/user/book" element={<BookAppointment />} />
                                        <Route path="/user/profile" element={<UserProfile />} /> */}
                                    {/* Add more user-specific routes here */}
                                </Routes>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
