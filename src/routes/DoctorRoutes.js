import React from 'react';
import { DoctorNavbar } from '../components/Navbar/DoctorNavbar';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import { DoctorProfile } from '../pages/doctor/DoctorProfile';
// import { DoctorDashboard, DoctorProfile, Clinic, ClinicView } from '../pages/doctor';
import { DoctorDashboard } from '../pages/doctor/DoctorDashboard';
import { DoctorProfile } from '../pages/doctor/DoctorProfile';
import { Clinic } from '../pages/doctor/Clinic';
import { ClinicView } from '../pages/doctor/ClinicView';

export const DoctorRoutes = () => {
    return (
        <div className="layout-wrapper layout-content-navbar">
            <Helmet>
                <title>Doctor Dashboard</title>
            </Helmet>
            <div className="layout-container">
                <DoctorNavbar />
                <div class="layout-page">
                    <div class="content-wrapper">
                        <div class="container-xxl flex-grow-1 container-p-y">
                            <Routes>
                                <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
                                <Route path="/doctor/profile" element={<DoctorProfile />} />
                                <Route path='/doctor/clinic' element={<Clinic />} />
                                <Route path='/doctor/clinicView' element={<ClinicView />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
