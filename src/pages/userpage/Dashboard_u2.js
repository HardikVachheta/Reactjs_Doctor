import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export const Dashboard_u2 = () => {
    var s2 = { minHeight: "479.219px" }
    var s3 = { transform: " none;" }



    const [users, setUsers] = useState([])
    const [query, setQuery] = useState("");
    const keys = ["specialization"];

    useEffect(() => {
        getSpecification()
    }, [])


    const getSpecification = () => {
        axios.get("http://localhost:4000/doctor/get2").then((res) => {

            console.log("doctors........... :- ", res)
            // console.log("Users id :- ", res.data.users[0]?.userId[0]?._id)

            var doctorsid = res.data.data.filter((d) => {
                return d.userId
            })
            console.log("Doctors 2:- ", doctorsid)
            setUsers(doctorsid)

        }).catch((err) => {
            console.log(err)
        })
    }



    return (
        <>
            {/* // <section class="doctors-section"> */}
            <Helmet>

                {/* <title>Doctors</title> */}

                {/* <link href="../assetsdoc/img/favicon.png" rel="icon" /> */}
                <link rel="stylesheet" href="../assetsdoc/css/bootstrap.min.css" />
                <link rel="stylesheet" href="../assetsdoc/plugins/fontawesome/css/fontawesome.min.css" />
                <link rel="stylesheet" href="../assetsdoc/plugins/fontawesome/css/all.min.css" />
                <link rel="stylesheet" href="../assetsdoc/css/feather.css" />
                <link rel="stylesheet" href="../assetsdoc/css/custom.css" />
                <link rel="stylesheet" href="../assetsdoc/plugins/select2/css/select2.min.css" />
                <link rel="stylesheet" href="../assetsdoc/css/style.css" />
                {/* <script src="../assets/js/dashboards-analytics.js"></script> */}
            </Helmet>

            <div class="container-fluid" style={s3}>
                <div class="row" style={s3}>
                    <div class="col-md-7 col-lg-5 col-lg-12 " style={{ textAlign: "initial" }}>
                        {/* ------------------------------------------------------------------------------------------------------------------------------------ */}

                        <div class="input-group input-group-merge" style={{ marginBottom: "1.5%" }} >
                            <span class="input-group-text" id="basic-addon-search31" style={{ background: "white" }}><i class="bx bx-search" style={{ fontSize: "1.3rem", color: "#272b41b0" }}></i></span>
                            <input type="text" class="form-control"
                                onChange={(e) => setQuery(e.target.value.toLowerCase())}
                                placeholder="Search..." aria-label="Search..." aria-describedby="basic-addon-search31" />
                        </div>

                        {/* <input type="search" class="form-control"
                            onChange={(e) => setQuery(e.target.value.toLowerCase())}
                            placeholder="Search Speciality..." aria-controls="DataTables_Table_0" style={{ marginBottom: "2%" }} aria-autocomplete=''/> */}



                        <div class="row row-grid">
                            {
                                users?.filter((item) => item.specialization.toLowerCase().includes(query))?.map((u) => {
                                    return (

                                        // <div class="col-md-6 col-lg-4 col-xl-6">
                                        <div class="col-sm-6 col-md-4 col-xl-6">
                                            <div class="profile-widget">
                                                <div class="doc-img">
                                                    <Link to={`/DoctorDetails_u/${u._id}`}>
                                                        <img class="img-fluid" alt="User Image" src={`${process.env.PUBLIC_URL}/Photos/${u?.profile_pic}`} />
                                                    </Link>
                                                    {/* <a href="javascript:void(0)" class="fav-btn">
                                                                <i class="far fa-bookmark"></i>
                                                            </a> */}
                                                </div>
                                                <div class="pro-content">
                                                    <h3 class="title">
                                                        <Link to={`/DoctorDetails_u/${u._id}`} >Dr. {u.userId.fname}</Link>
                                                        <i class="fas fa-check-circle verified"></i>
                                                    </h3>
                                                    <p class="speciality">{u.qualification} <br></br>Specialist : {u.specialization}</p>
                                                    <div class="rating">
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <i class="fas fa-star filled"></i>
                                                        <span class="d-inline-block average-rating">(17)</span>
                                                    </div>
                                                    <ul class="available-info">

                                                        <li>
                                                            <i class="far fa-clock"></i> Available between Mon to Fri
                                                        </li>
                                                        <li>
                                                            <i class="far fa-money-bill-alt"></i> ₹300 - ₹1000 <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Lorem Ipsum" aria-label="Lorem Ipsum"></i>
                                                        </li>
                                                    </ul>
                                                    <div class="row row-sm">
                                                        <div class="col-6">
                                                            <Link to={`/DoctorDetails_u/${u._id}`} class="btn view-btn">View Profile</Link>
                                                        </div>
                                                        <div class="col-6">
                                                            <Link to={`/Appointment2/${u?.userId?._id}`} class="btn book-btn">Appointment</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    {/* </div >
                </div >*/}
                </div >
            </div>




            {/* // </section> */}
        </>
    )
}
