import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Navbar_a } from './Navbar_a'
import { UserList } from './UserList'
import axios from 'axios'

export const Dashboard_a_main = ({ d2 }) => {

  const [users12, setusercount] = useState()
  const [doctors12, setdoctorcount] = useState()
  const [admins12, setadmincount] = useState()
  const [clinics12, setcliniccount] = useState()

  useEffect(() => {
    getUserCount()
    getClinic()
  }, [])

  // let numUsers = 0;
  // let numAdmins = 0;
  // let numDoctors = 0;
  // let numClinic = 0;

  const getUserCount = () => {
    let numUsers = 0;
    let numAdmins = 0;
    let numDoctors = 0;
    axios.get("http://localhost:4000/user/user1/").then((res) => {
      console.log(res.data)
      console.log("users.......", res.data.users)

      res.data.users?.forEach(x => {
        if (x.role.name === 'User') {
          numUsers++;
        } else if (x.role.name === 'Admin') {
          numAdmins++;
        } else {
          numDoctors++;
        }
      });

      // console.log("Users count", numUsers)
      setusercount(numUsers)
      // console.log("Admin count", numAdmins)
      setadmincount(numAdmins)
      // console.log("Doctors count", numDoctors)
      setdoctorcount(numDoctors)

    }).catch((err) => {
      console.log(err)
    })
  }

  const getClinic = () => {

    let numClinic = 0;
    axios.get("http://localhost:4000/clinic/get").then((res) => {
      console.log("users.......", res.data.data)
      res.data.data?.forEach(user => {
        numClinic++;
      })
      setcliniccount(numClinic)
    })
  }



  return (
    <div class="layout-wrapper layout-content-navbar ">
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>
      <div class="layout-container">

        <Navbar_a />
        <div class="layout-page">
          <div class="content-wrapper">
            <div class="container-xxl flex-grow-1 container-p-y">
              
              <h4 class="fw-bold py-3 mb-4">
                <span class="text-muted fw-light"></span> Admin Dashboard


              </h4>

              <div class="row g-4 mb-4" id="sortable-cards">
                <div class="col-lg-3 col-md-6 col-sm-12">
                  <div class="card drag-item mb-lg-0 mb-4">
                    <div class="card-body text-center">
                      <h2>
                        <i class="bx bx-user text-primary display-6"></i>
                      </h2>
                      <h4>Users</h4>
                      <h5>{users12}</h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                  <div class="card drag-item mb-lg-0 mb-4">
                    <div class="card-body text-center">
                      <h2>
                        <i class="bx bx-user-plus text-success display-6" icon="bx-user-plus"></i>
                      </h2>
                      <h4>Admin</h4>
                      <h5>{admins12}</h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                  <div class="card drag-item mb-lg-0 mb-4">
                    <div class="card-body text-center">
                      <h2>
                        <i class="bx bx-user text-info display-6" icon="bx-user"></i>
                      </h2>
                      <h4>Doctor</h4>
                      <h5>{doctors12}</h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                  <div class="card drag-item mb-lg-0 mb-4">
                    <div class="card-body text-center">
                      <h2>
                        <i class="bx bx-gift text-danger display-6"></i>
                      </h2>
                      <h4>Clinic</h4>
                      <h5>{clinics12}</h5>
                    </div>
                  </div>
                </div>

              </div>

              <UserList />
            </div>

            <div class="content-backdrop fade"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
