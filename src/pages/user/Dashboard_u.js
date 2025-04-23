import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Dashboard_u = () => {


  const [users, setUsers] = useState([])
  useEffect(() => {
    getSpecification()
  }, [])


  const getSpecification = () => {
    axios.get("http://localhost:4000/doctor/get").then((res) => {

      console.log("doctors........... :- ", res.data)
      console.log("Users id :- ", res.data.users[0]?.userId[0]?._id)

      var doctorsid = res.data.users.filter((d) => {
        return d.userId
      })
      console.log("Doctors 2:- ", doctorsid)
      setUsers(doctorsid)

    }).catch((err) => {
      console.log(err)
    })
  }

  return (

    <div class="layout-wrapper layout-content-navbar ">
      <div class="layout-container">
        <div class="layout-page">
          <div class="content-wrapper">
            <div class="container-xxl flex-grow-1 container-p-y">
              <h4 class="fw-bold py-3 mb-4">Doctors </h4>

              <div class="row mb-4">

                {
                  users?.map((u) => {
                    return (

                      <>
                        <div class="col-12 col-sm-6 col-lg-4 mb-4">
                          {/* <Link to="/DoctorDetails_u/"> */}
                            <Link to = {`/DoctorDetails_u/${u._id}`}>
                            <div class="card">
                              <div class="card-body text-center d-flex align-items-center">
                                <div class="d-flex">
                                  <div class="avatar avatar-xl">
                                    <img src="../assets/img/avatars/1.png" alt="Avatar" class="rounded-circle" />
                                  </div>
                                </div>
                                <div class="d-flex">
                                  <div class="card-body text-center">
                                    <p>{u.userId?.fname}</p>
                                    <p>{u.specialization}</p>

                                    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#pricingModal"> Show </button> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div >

                      </>
                    )
                  })
                }

              </div>

            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
