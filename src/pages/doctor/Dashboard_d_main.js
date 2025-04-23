import React from 'react'
import { Helmet } from 'react-helmet'
import { Navbar_d } from './Navbar_d'
import { DoctorProfile } from './DoctorProfile'
import { Dashboard_d } from './Dashboard_d'

export const Dashboard_d_main = () => {
  return (
    <div class="layout-wrapper layout-content-navbar">
      <Helmet>
        <title>Doctor Dashboard</title>
      </Helmet>
      <div class="layout-container">
        <Navbar_d />
        <div class="layout-page">
          <div class="content-wrapper">
            <div class="container-xxl flex-grow-1 container-p-y">
              <Dashboard_d />
              {/* <img src="C:\Pro\Royal\MY Project\Doctor Managment\Reactjs_Folder\doctor\public\assets\img\favicon"/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

