import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const DoctorDashboard = () => {


  var s1 = { transform: " none;", minHeight: "201.684px;" }
  var s2 = { transform: " none;" }


  var id = localStorage.getItem('id')

  const [appo, setAppointment] = useState([])

  useEffect(() => {
    getAppointment();
  }, [])

  const getAppointment = () => {

    axios.get("http://localhost:4000/appointment/get/" + id).then((res) => {

      console.log(res.data.data)
      setAppointment(res.data.data)

    })

  }

  const deleteUser = (id) => {
    axios.delete("http://localhost:4000/appointment/delete/" + id).then((res) => {
      getAppointment()
    }).catch((err) => {
      console.log(err)
    })
  }

  // export const DoctorDashboard = () => {
  return (
    <>
      <Helmet>
        <link href="assetsdoc/img/favicon.png" rel="icon" />

        <link rel="stylesheet" href="assetsdoc/css/bootstrap.min.css" />

        <link rel="stylesheet" href="assetsdoc/plugins/fontawesome/css/fontawesome.min.css" />
        <link rel="stylesheet" href="assetsdoc/plugins/fontawesome/css/all.min.css" />

        <link rel="stylesheet" href="assetsdoc/css/feather.css" />

        <link rel="stylesheet" href="assetsdoc/css/custom.css" />
      </Helmet>
      <h4 class="fw-bold py-3 mb-4">
        Doctor Dashboard
      </h4>
      {/* <div class="content" style={s1}> */}
      {/* <div class="container" style={s2}> */}
      <div class="row" style={s2}>
        {
          appo?.map((u) => {
            return (
              <div class="col-md-7 col-lg-8 col-xl-5">
                <div class="appointments">
                  <div class="appointment-list">
                    <div class="profile-info-widget">
                      <a href="patient-profile.html" class="booking-doc-img">
                        {/* <img src="assetsdoc/img/patients/patient.jpg" alt="User Image" /> */}
                        {
                          u?.patientId.gender === "Female" ? <img src="../assets/img/avatars/2.png" alt="user image" /> :
                            <img src="../assets/img/avatars/1.png" alt="user image" />
                        }
                      </a>
                      <div class="profile-det-info">
                        <h3>
                          <a href="patient-profile.html" >{u?.patientId.fname}   {u?.patientId.lname}</a>
                        </h3>

                        <div class="patient-details">
                          <br></br>
                          <h5><i class="far fa-clock"></i> {(u?.appointmentDate).toString().slice(0, -14)} , {u?.appointmentTime}</h5>
                          <h5><i class="fas fa-map-marker-alt"></i> {u?.clinicId?.clinicname} </h5>
                          <h5><i class="fas fa-envelope"></i> {u?.patientId?.email}</h5>
                        </div>
                      </div>
                    </div>
                    <div class="appointment-action">
                      {/* <a href="#" class="btn btn-sm bg-info-light" data-bs-toggle="modal" data-bs-target="#appt_details">
                        <i class="far fa-eye"></i> View
                      </a>
                      <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                        <i class="fas fa-check"></i> Accept
                      </a> */}
                      <Link onClick={() => { deleteUser(u._id) }} class="btn btn-sm bg-danger-light">
                        <i class="fas fa-trash"></i> Cancel
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>
    </>
  )
}



