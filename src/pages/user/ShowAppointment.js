import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../utils/axiosConfig';

export const ShowAppointment = () => {

    const [appointment, setAppointment] = useState()


    useEffect(() => {
        getAppointmentOfUser()
    }, [])

    var xz;

    // const compareDates = (d1, d2, delid) => {};
    const getAppointmentOfUser = () => {

        var id = localStorage.getItem('id')

        axios.get("/appointment/getUser/" + id).then((res) => {
            console.log(res.data.data)
            setAppointment(res.data.data)




        }).catch((err) => {
            console.log(err)
        })
    }

    const compareDates = (d1, d2, delid) => {
        let date1 = new Date(d1).getTime();
        let date2 = new Date(d2).getTime();

        if (date1 < date2) {
            console.log("Yes");
        } else if (date1 > date2) {
            console.log("delete" + delid);

            axios.delete("/appointment/delete/" + delid).then((res) => {

            }).catch((err) => {
                console.log(err)
            })

        } else {
            console.log(`Both dates are equal`);
        }
    }

    const current = new Date()
    // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const datex = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;

    // const compareDates = (d1, d2, delid) => {
    //     let date1 = new Date(d1).getTime();
    //     let date2 = new Date(d2).getTime();

    //     if (date1 < date2) {
    //         console.log("Yes");
    //     } else if (date1 > date2) {
    //         console.log("delete" + delid);

    //         axios.delete("/user/user/" + delid).then((res) => {
    //             getAppointmentOfUser()
    //         }).catch((err) => {
    //             console.log(err)
    //         })

    //     } else {
    //         console.log(`Both dates are equal`);
    //     }
    // }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <h4 class="fw-bold py-3 mb-4">
                <span class="text-muted fw-light"></span>Appointment
            </h4>
            <div class="col-md-7 col-lg-8 col-xl-12">
                <div class="row row-grid">
                    {
                        appointment?.map((u) => {
                            return (

                                <div class="col-md-6 col-lg-4 col-xl-3">
                                    <div class="card widget-profile pat-widget-profile">
                                        <div class="card-body">
                                            <div class="pro-widget-content">
                                                <div class="profile-info-widget">
                                                    <a href="patient-profile.html" class="booking-doc-img">
                                                        {/* <img src="assetsdoc/img/patients/patient.jpg" alt="User Image" /> */}
                                                        {
                                                            u?.patientId.gender === "Female" ? <img src="../assets/img/avatars/2.png" alt="user image" /> :
                                                                <img src="../assets/img/avatars/1.png" alt="user image" />
                                                        }
                                                    </a>
                                                    <div class="profile-det-info">
                                                        <h3><a href="patient-profile.html">{u.doctorId.fname} {u.doctorId.lname}</a></h3>
                                                        <div class="patient-details">
                                                            {/* <h5><b>Patient ID :</b> P0016</h5> */}
                                                            <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i>{u.clinicId.clinicname}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="patient-info">
                                                <ul>
                                                    {
                                                        compareDates(datex, (u.appointmentDate).toString().slice(0, -14), u._id)
                                                        // datex > xz ? "YES" : "delete"
                                                    }
                                                    <li>Phone <span>{u.clinicId.phoneno}</span></li>
                                                    <li>Date <span>{(u.appointmentDate).toString().slice(0, -14)}</span></li>
                                                    <li>Address <span>{u.clinicId.address}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>

    )
}
