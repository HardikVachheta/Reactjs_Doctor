import React from 'react'
import { AdminNavbar } from '../components/Navbar/AdminNavbar'
import { AdminProfile, AllDoctors, DashboardAdmin } from '../pages/admin';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const AdminRoutes = () => {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>
      <div className="layout-container">
        <AdminNavbar />
        <Routes>
          <Route path="/admin/dashboard" element={<DashboardAdmin />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/admin/doctors" element={<AllDoctors />} />
          {/* Add more admin-specific routes here */}
        </Routes>
      </div>
    </div>
  )
}
