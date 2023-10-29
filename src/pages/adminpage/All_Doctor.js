import React, { useEffect, useState } from 'react'
import { Navbar_a } from './Navbar_a'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const All_Doctor = () => {

    const [users, setUsers] = useState([])
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        getDoctor()
        getSpecification()
    }, [])

    const getDoctor = () => {
        axios.get("http://localhost:4000/user/user1").then((res) => {

            // console.log("res :- ", res.data)
            // console.log("res users :- ", res.data.users)

            var doc = res.data.users.filter((d) => {
                return d.role.name === "Doctor"
            })

            console.log("Doctors 1 :- ", doc)
            // console.log("Doctors id :- ", doc[0]?._id)
            // console.log("Doctors id :- ", doctorsid)
            setDoctors(doc)

        }).catch((err) => {
            console.log(err)
        })

    }

    const getSpecification = () => {
        axios.get("http://localhost:4000/doctor/get2").then((res) => {

            console.log("doctors........... :- ", res.data.data)
            // console.log("Users id :- ", res.data.users[0]?.userId[0]?._id)

            var doctorsid = res.data.data.filter((d) => {
                return d.userId === doctors._id
            })
            console.log("Doctors 2:- ", doctorsid)
            setUsers(res.data.data)
            // console.log("mansi------------------------",users)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div class="layout-wrapper layout-content-navbar ">
            <div class="layout-container">
                <Navbar_a />
                <div class="layout-page">
                    <div class="content-wrapper">
                        <div class="container-xxl flex-grow-1 container-p-y">
                            <h4 class="fw-bold py-3 mb-4">All Doctors</h4>

                            <div class="row mb-4">

                                {
                                    users?.map((u) => {
                                        return (

                                            <>
                                                <div class="col-12 col-sm-6 col-lg-4 mb-4">

                                                    <div class="card">
                                                        <div class="card-body text-center d-flex align-items-center">
                                                            <div class="d-flex">
                                                                <div class="avatar avatar-xl">
                                                                    {/* <img src="../assets/img/avatars/1.png" alt="Avatar" class="rounded-circle" /> */}
                                                                    <img class="rounded-circle" alt="User Image" src={`${process.env.PUBLIC_URL}/Photos/${u?.profile_pic}`} />


                                                                </div>
                                                            </div>
                                                            <div class="d-flex">
                                                                <div class="card-body text-center">
                                                                    <p>Name : {u.userId.fname}<br></br>
                                                                    Specialization : {u.specialization}</p>
                                                                    <Link to={`/viewprofile/${u.userId._id}`}>ViewProfile</Link>

                                                                    {/* {
                                                                        users?.map((u) => {
                                                                            return ( */}
                                                                                {/* <p>{u.specialization}</p> */}
                                                                            {/* )
                                                                        })
                                                                    
                                                                    } */}

                                                                    {/* <p>{u._id}</p> */}


                                                                    {/* <p>{ v.specialization }</p> */}
                                                                    {/* <p>{ u._id }</p> */}
                                                                    {/* <p>{ v._id }</p> */}

                                                                    {/* <p>{v._id === u._id ? v.specialization : "Null"}</p> */}
                                                                    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#pricingModal"> Show </button> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>



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
