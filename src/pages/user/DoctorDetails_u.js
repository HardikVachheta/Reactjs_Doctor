import axios from '../../utils/axiosConfig';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'

export const DoctorDetails_u = () => {
    // var st = { minHeight: " 84.477px;" }
    var st = { minHeight: "minHeight: 492.555px;" }
    var x = { marginBottom: "10npm start%" }

    var card12 = {
        // text: "left"
    }
    var id = useParams().id

    // var docid = useParams().id

    const [clinic1, setClinic] = useState()
    const [users, setUsers] = useState([])

    useEffect(() => {
        getSpecification()
    }, [])

    const getSpecification = () => {
        axios.get("/doctor/get1/" + id).then((res) => {

            console.log("doctors........... :- ", res.data.data)
            setUsers(res.data.data)


            var docid = res.data.data.userId._id


            axios.get("/clinic/get").then((res) => {
                console.log(res.data.data)
                // console.log("doctor id get", docid)
                // console.log("doctor id get 2",res.data.data?.doctorId._id)
                var doctorsid = res.data.data.filter((d) => {
                    return d.doctorId._id === docid
                })

                console.log("--------------------+++++", doctorsid)
                setClinic(doctorsid)


            })





        }).catch((err) => {
            console.log(err)
        })
    }


    // const [users, setUsers] = useState([])

    // useEffect(() => {
    //     getSpecification()
    // }, [])


    // const getSpecification = () => {
    //     axios.get("/doctor/get2").then((res) => {

    //         console.log("doctors........... :- ", res)
    //         // console.log("Users id :- ", res.data.users[0]?.userId[0]?._id)

    //         var doctorsid = res.data.data.filter((d) => {
    //             return d.userId
    //         })
    //         console.log("Doctors 2:- ", doctorsid)
    //         setUsers(doctorsid)

    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }



    return (
        <div class="main-wrapper">
            <Helmet>
                <title>Doccure</title>
                <link href="../assets/img/logo1.png" rel="icon" />
                <link rel="stylesheet" href="../assetsdoc/css/bootstrap.min.css" />
                <link rel="stylesheet" href="../assetsdoc/plugins/fontawesome/css/fontawesome.min.css" />
                <link rel="stylesheet" href="../assetsdoc/plugins/fontawesome/css/all.min.css" />
                <link rel="stylesheet" href="../assetsdoc/css/feather.css" />
                <link rel="stylesheet" href="../assetsdoc/plugins/fancybox/jquery.fancybox.min.css" />
                <link rel="stylesheet" href="../assetsdoc/css/style.css" />
            </Helmet>
            <div class="content" style={st}>
                <div class="container">

                    <div class="card">
                        <div class="card-body">
                            <div class="doctor-widget">
                                <div class="doc-info-left" style={{ textAlign: "initial" }}>
                                    <div class="doctor-img">
                                        <img src={`${process.env.PUBLIC_URL}/Photos/${users?.profile_pic}`} class="img-fluid" alt="User Image" />
                                    </div>
                                    <div class="doc-info-cont">
                                        <h4 class="doc-name">{users.userId?.fname}</h4>
                                        <p class="doc-speciality">{users.qualification}</p>
                                        <p class="doc-department">

                                            {
                                                users.specialization === "Urology" ? <img src="../assetsdoc/img/specialities/specialities-01.png" class="img-fluid" alt="Speciality" /> :
                                                    users.specialization === "Dentist" ? <img src="../assetsdoc/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality" /> :
                                                        users.specialization === "Cardiology" ? <img src="../assetsdoc/img/specialities/specialities-04.png" class="img-fluid" alt="Speciality" /> :
                                                            users.specialization === "Orthopaedics" ? <img src="../assetsdoc/img/specialities/specialities-03.png" class="img-fluid" alt="Speciality" /> :
                                                                <img src="../assetsdoc/img/specialities/specialities-02.png" class="img-fluid" alt="Speciality" />
                                            }
                                            {/* <img src="../assetsdoc/img/specialities/specialities-04.png" class="img-fluid" alt="Speciality" /> */}

                                            {users.specialization}
                                        </p>
                                        <div class="rating">
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="d-inline-block average-rating">(35)</span>
                                        </div>
                                        <div class="clinic-details">
                                            {/* <p class="doc-location"><i class="fas fa-map-marker-alt"></i> Newyork, USA - <a href="javascript:void(0);">Get Directions</a></p> */}
                                            {/* <ul class="clinic-gallery">
                                                <li>
                                                    <a href="../assetsdoc/img/features/feature-01.jpg" data-fancybox="gallery">
                                                        <img src="../assetsdoc/img/features/feature-01.jpg" alt="Feature" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="../assetsdoc/img/features/feature-02.jpg" data-fancybox="gallery">
                                                        <img src="../assetsdoc/img/features/feature-02.jpg" alt="Feature Image" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="../assetsdoc/img/features/feature-03.jpg" data-fancybox="gallery">
                                                        <img src="../assetsdoc/img/features/feature-03.jpg" alt="Feature" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="../assetsdoc/img/features/feature-04.jpg" data-fancybox="gallery">
                                                        <img src="../assetsdoc/img/features/feature-04.jpg" alt="Feature" />
                                                    </a>
                                                </li>
                                            </ul> */}
                                        </div>
                                        {/* <div class="clinic-services">
                                            <span>Dental Fillings</span>
                                            <span>Teeth Whitneing</span>
                                        </div> */}
                                    </div>
                                </div>
                                <div class="doc-info-right">
                                    <div class="clini-infos" >
                                        <ul style={{textAlign: "initial"}}>
                                            <li><i class="far fa-thumbs-up"></i> 99%</li>
                                            <li><i class="far fa-comment"></i> 35 Feedback</li>
                                            <li><i class="fas fa-map-marker-alt"></i> Gujarat</li>
                                            <li><i class="far fa-money-bill-alt"></i> ₹100 per hour </li>
                                        </ul>
                                    </div>
                                    {/* <div class="doctor-action">
                                        <a href="javascript:void(0)" class="btn btn-white fav-btn">
                                            <i class="far fa-bookmark"></i>
                                        </a>
                                        <a href="chat.html" class="btn btn-white msg-btn">
                                            <i class="far fa-comment-alt"></i>
                                        </a>
                                        <a href="javascript:void(0)" class="btn btn-white call-btn" data-bs-toggle="modal" data-bs-target="#voice_call">
                                            <i class="fas fa-phone"></i>
                                        </a>
                                        <a href="javascript:void(0)" class="btn btn-white call-btn" data-bs-toggle="modal" data-bs-target="#video_call">
                                            <i class="fas fa-video"></i>
                                        </a>
                                    </div> */}
                                    <div class="clinic-booking">
                                        <Link to={`/Appointment/${users?.userId?._id}`} class="apt-btn">Book Appointment</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="card">
                        <div class="card-body pt-0">

                            <nav class="user-tabs mb-4">
                                <ul class="nav nav-tabs nav-tabs-bottom nav-justified" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        {/* <a class="nav-link active" href="#doc_overview" data-bs-toggle="tab">Overview</a> */}
                                        <a class="nav-link active" href="#doc_overview" data-bs-toggle="tab" aria-selected="true" role="tab">Overview</a>
                                    </li>
                                    {/* <li class="nav-item">
                                        <a class="nav-link" href="#doc_locations" data-bs-toggle="tab">Locations</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#doc_reviews" data-bs-toggle="tab">Reviews</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#doc_business_hours" data-bs-toggle="tab">Business Hours</a>
                                    </li> */}
                                </ul>
                            </nav>


                            <div class="tab-content pt-0">

                                <div role="tabpanel" id="doc_overview" class="tab-pane fade show active">
                                    <div class="row">
                                        <div class="col-md-12 col-lg-9" style={{ textAlign: "initial" }}>

                                            <div class="widget about-widget">
                                                <h4 class="widget-title">About Me</h4>
                                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                                                <p>{users.about}</p>
                                            </div>


                                            {/* <div class="widget education-widget">
                                                <h4 class="widget-title">Education</h4>
                                                <div class="experience-box">
                                                    <ul class="experience-list">
                                                        <li>
                                                            <div class="experience-user">
                                                                <div class="before-circle"></div>
                                                            </div>
                                                            <div class="experience-content">
                                                                <div class="timeline-content">
                                                                    <a href="#/" class="name">American Dental Medical University</a>
                                                                    <div>BDS</div>
                                                                    <span class="time">1998 - 2003</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="experience-user">
                                                                <div class="before-circle"></div>
                                                            </div>
                                                            <div class="experience-content">
                                                                <div class="timeline-content">
                                                                    <a href="#/" class="name">American Dental Medical University</a>
                                                                    <div>MDS</div>
                                                                    <span class="time">2003 - 2005</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div> */}


                                            <div class="widget experience-widget">
                                                <h4 class="widget-title">Experience</h4>
                                                <div class="experience-box">
                                                    <ul class="experience-list">

                                                        <li>
                                                            <div class="experience-user">
                                                                <div class="before-circle"></div>
                                                            </div>
                                                            <div class="experience-content">
                                                                <div class="timeline-content">
                                                                    <a href="#/" class="name">Dream {users.specialization} Practice</a>
                                                                    <span class="time">{users.experience}</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="widget experience-widget">
                                                <h4 class="widget-title">Clinic</h4>
                                                {
                                                    clinic1?.map((u) => {
                                                        return (

                                                            <div class="experience-box">
                                                                <ul class="experience-list">

                                                                    <li>
                                                                        <div class="experience-user">
                                                                            <div class="before-circle"></div>
                                                                        </div>
                                                                        <div class="experience-content">
                                                                            <div class="timeline-content">

                                                                                <a href="#/" class="name">{u.clinicname} Practice</a>
                                                                                <span class="time"><i class="fas fa-map-marker-alt"></i> &emsp; {u.address}</span>
                                                                                <span class="time"><i class="bx bx-phone"></i> &nbsp;  {u.phoneno}</span><br></br>                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                        )
                                                    })
                                                }
                                            </div>


                                            <div class="service-list">
                                                <h4>Specializations</h4>
                                                <ul class="clearfix">
                                                    {/* <li>Children Care</li> */}
                                                    <li>{users.specialization}</li>
                                                    {/* <li>Oral and Maxillofacial Surgery </li> */}
                                                    {/* <li>Orthodontist</li> */}
                                                    {/* <li>Periodontist</li> */}
                                                    {/* <li>Prosthodontics</li> */}
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
