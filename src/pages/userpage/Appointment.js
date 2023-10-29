import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Appointment = () => {
    // var style1 = { width: " 668.016px;" }

    var docid = useParams().id
    var useid = localStorage.getItem('id')

    const { register, handleSubmit } = useForm()
    const [clinic1, setClinic] = useState()

    const submit = (data) => {

        console.log(data)
        axios.post("http://localhost:4000/appointment/add", data).then((res) => {

            if (res.status === 201) {
                toast.success('Your Data Updated Successfully...', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });

            } else {
                toast.error('Error in Updateing Data!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }

        }).catch((err) => {

        })

    }


    useEffect(() => {
        getDoctorClinic();
    }, [])

    const getDoctorClinic = () => {

        axios.get("http://localhost:4000/clinic/get").then((res) => {
            console.log(res.data.data)
            console.log("doctor id get", docid)
            // console.log("doctor id get 2",res.data.data?.doctorId._id)
            var doctorsid = res.data.data.filter((d) => {
                return d.doctorId._id === docid
            })

            console.log("-----------------------", doctorsid)
            setClinic(doctorsid)


        })

    }


    return (
        <div class="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
            <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" />

                <link rel="stylesheet" href="assets/vendor/libs/flatpickr/flatpickr.css" />
                {/* <script src="assets/vendor/libs/flatpickr/flatpickr.js" /> */}

                <link rel="stylesheet" href="../assets/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/jquery-timepicker/jquery-timepicker.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/pickr/pickr-themes.css" />
                <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-5DDHKGP" />
{/*             
                <link rel="stylesheet" href="../assetsdoc/css/bootstrap.min.css" />
                <link rel="stylesheet" href="../assetsdoc/plugins/fontawesome/css/fontawesome.min.css" />
                <link rel="stylesheet" href="../assetsdoc/plugins/fontawesome/css/all.min.css" />
                <link rel="stylesheet" href="../assetsdoc/css/feather.css" />
                <link rel="stylesheet" href="../assetsdoc/plugins/select2/css/select2.min.css" />
                <link rel="stylesheet" href="../assetsdoc/css/custom.css" />
             */}

            </Helmet>
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

            <div class="layout-container">
                <div class="layout-page">
                    <div class="content-wrapper">
                        <div class="row my-5">
                            <div class="col">
                                <h4 class="mb-5"> Appointment Form </h4>

                                <div class="d-flex justify-content-center">
                                    <div class="accordion col-md-6 col-lg-4 col-xl-4" id="collapsibleSection">
                                        <div class="card accordion-item active">
                                            {/* <h2 class="accordion-header" id="headingDeliveryAddress">
                                                <button type="button" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseDeliveryAddress" aria-expanded="true" aria-controls="collapseDeliveryAddress"> Delivery Address </button>
                                            </h2> */}
                                            <form id="collapseDeliveryAddress" class="accordion-collapse collapse show" data-bs-parent="#collapsibleSection" onSubmit={handleSubmit(submit)} >
                                                <div class="accordion-body">
                                                    <div class="row g-3">
                                                        <div></div>
                                                        {/* <div class="col-md-6">
                                                            <label class="form-label" for="collapsible-fullname">Reference Name</label>
                                                            <input type="text" id="collapsible-fullname" class="form-control" placeholder="John Doe" />
                                                        </div> */}
                                                        {/* <div class="col-md-6">
                                                            <label class="form-label" for="collapsible-phone">Phone No</label>
                                                            <input type="text" id="collapsible-phone" class="form-control phone-mask" placeholder="658 799 8941" aria-label="658 799 8941" />
                                                        </div> */}
                                                        {/* <div class="col-md-6 col-12 mb-4">
                                                            <label for="flatpickr-date" class="form-label">Date Picker</label>
                                                            <input type="Date" placeholder="YYYY-MM-DD" />
                                                        </div> */}
                                                        <div class="col-md-12">
                                                            <label class="form-label" for="collapsible-pincode">Date</label>
                                                            <input type="date" {...register("appointmentDate")} id="datefield" min={new Date().toISOString().split('T')[0]} class="form-control" placeholder="DD-MM-YYYY" />
                                                            {/* <input id="datefield" type='date' min='1899-01-01' max='2000-13-13'></input> */}
                                                        </div>
                                                        {/* <div class="col-md-6">
                                                            <label class="form-label" for="collapsible-landmark">Time</label>
                                                            <input type="time" {...register("appointmentTime")} id="collapsible-landmark" class="form-control" placeholder="Nr. Wall Street" />
                                                        </div> */}
                                                        <div class="tab-content schedule-cont">

                                                            <div id="slot_monday" class="tab-pane fade show active" role="tabpanel">
                                                                <h4 class="card-title d-flex justify-content-between">
                                                                    <span>Time Slots</span>
                                                                </h4>

                                                                <div class="doc-times">
                                                                    <div class="doc-slot-list">
                                                                        8:00 am - 11:30 am
                                                                        
                                                                    </div>
                                                                    <div class="doc-slot-list">
                                                                        11:30 am - 1:30 pm
                                                                        
                                                                    </div>
                                                                    <div class="doc-slot-list">
                                                                        3:00 pm - 5:00 pm
                                                                        
                                                                    </div>
                                                                    <div class="doc-slot-list">
                                                                        6:00 pm - 11:00 pm
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>

                                                        <input type="hidden" {...register("patientId")} value={useid} class="form-control phone-number-mask" />

                                                        <input type="hidden" {...register("doctorId")} value={docid} class="form-control phone-number-mask" />

                                                        <div class="mb-3" >
                                                            <div class="input-group">
                                                                <select class="form-select" id="inputGroupSelect02" {...register("clinicId")}>
                                                                    <option selected>Choose...</option>
                                                                    {
                                                                        clinic1?.map((c) => {
                                                                            return (
                                                                                <option value={c._id}>{c.clinicname}</option>
                                                                            )
                                                                        })
                                                                    }
                                                                </select>
                                                                <label class="input-group-text" for="inputGroupSelect02">Clinic</label>
                                                            </div>
                                                        </div>

                                                        <div class="pt-4">
                                                            <button type="submit" class="btn btn-primary me-sm-3 me-1">Submit</button>
                                                            <Link to={'/dashboard_u_main'} type="reset" class="btn btn-label-secondary">Cancel</Link>
                                                        </div>
                                                        {/* <div class="col-12">
                                                            <label class="form-label" for="collapsible-address">Address</label>
                                                            <textarea name="collapsible-address" class="form-control" id="collapsible-address" rows="2" placeholder="1456, Mall Road"></textarea>
                                                        </div> */}
                                                        <div></div>
                                                    </div>
                                                </div>
                                            </form>
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