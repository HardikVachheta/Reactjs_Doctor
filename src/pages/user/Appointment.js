import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import axios from '../../utils/axiosConfig';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Appointment = () => {

    var docid = useParams().id
    var useid = localStorage.getItem('id')

    const { register, handleSubmit } = useForm()
    const [clinic1, setClinic] = useState()

    const submit = (data) => {

        console.log(data)
        axios.post("/appointment/add", data).then((res) => {

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

        axios.get("/clinic/get").then((res) => {
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
        <>
            <Helmet>

                <link rel="stylesheet" href="../assetsdoc/css/bootstrap.min.css" />
                <link rel="stylesheet" href="../assetsdoc/plugins/fontawesome/css/fontawesome.min.css" />
                <link rel="stylesheet" href="../assetsdoc/plugins/fontawesome/css/all.min.css" />
                <link rel="stylesheet" href="../assetsdoc/css/feather.css" />
                <link rel="stylesheet" href="../assetsdoc/plugins/select2/css/select2.min.css" />
                <link rel="stylesheet" href="../assetsdoc/css/custom.css" />
                <link rel="stylesheet" href="assets/plugins/bootstrap-tagsinput/css/bootstrap-tagsinput.css" />
                <link rel="stylesheet" href="assets/plugins/dropzone/dropzone.min.css" />



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
            <div class="content" style={{ transform: "none;", minHeight: "825.406px;" }}>
                <div class="container" style={{ transform: "none;" }}>
                    {/* <div class="row" style={{transform: "none;"}}> */}


                    {/* <div class="col-md-7 col-lg-8 col-xl-9"> */}
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Schedule Timings</h4>
                                    <form class="profile-box" onSubmit={handleSubmit(submit)}>
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <label>Select Date</label>
                                                    <div class="col-md-12">
                                                        <input type="date" id="datefield"{...register("appointmentDate")} min={new Date().toISOString().split('T')[0]} class="form-control" placeholder="DD-MM-YYYY" />
                                                        {/* <input id="datefield" type='date' min='1899-01-01' max='2000-13-13'></input> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4"></div>
                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <label>Select Clinic</label>
                                                    <div class="mb-3" >
                                                        {/* <div class="form-group"> */}
                                                        <select class="form-select form-control" {...register("clinicId")}>
                                                            <option selected>Choose...</option>
                                                            {
                                                                clinic1?.map((c) => {
                                                                    return (
                                                                        <option value={c._id}>{c.clinicname}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                        {/* </div> */}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="card schedule-widget mb-0">

                                                    <div class="tab-content schedule-cont">




                                                        <div id="slot_monday" class="tab-pane fade show active" role="tabpanel">
                                                            <h4 class="card-title d-flex justify-content-between">
                                                                <span>Time Slots</span>
                                                                {/* <a class="edit-link" data-bs-toggle="modal" href="#edit_time_slot"><i class="fa fa-edit me-1"></i>Edit</a> */}
                                                            </h4>

                                                            <div class="doc-times" style={{ justifyContent: " center;" }}>
                                                                <div class="doc-slot-list">

                                                                    <input type="radio" class="doc-slot-list" {...register("appointmentTime")} value="8:00 am - 11:30 am" />
                                                                    8:00 am - 11:30 am
                                                                </div>
                                                                <div class="doc-slot-list">

                                                                    <input type="radio" class="doc-slot-list" {...register("appointmentTime")} value="11:30 am - 1:30 pm" />
                                                                    11:30 am - 1:30 pm
                                                                </div>
                                                                <div class="doc-slot-list">
                                                                    <input type="radio" class="doc-slot-list" {...register("appointmentTime")} value="3:00 pm - 5:00 pm" />
                                                                    3:00 pm - 5:00 pm
                                                                </div>
                                                                <div class="doc-slot-list">
                                                                    <input type="radio" class="doc-slot-list" {...register("appointmentTime")} value="6:00 pm - 11:00 pm" />
                                                                    6:00 pm - 11:00 pm
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <input type="hidden" {...register("patientId")} value={useid} class="form-control phone-number-mask" />

                                                        <input type="hidden" {...register("doctorId")} value={docid} class="form-control phone-number-mask" />


                                                        <div class="submit-section submit-btn-bottom pt-4">
                                                            <button type="submit" class="btn btn-primary prime-btn me-4">Send</button>
                                                            <Link to={'/user/dashboard'} type="reset" class="btn btn-label-secondary">Cancel</Link>
                                                        </div>
                                                        {/* <div class="pt-4">
                                                            <button type="submit" style={{backgroundColor: "#0979e5;"}} class="btn btn-primary">Submit</button>
                                                            <Link to={'/dashboard_u_main'} type="reset" class="btn btn-label-secondary">Cancel</Link>
                                                        </div> */}

                                                    </div>
                                                    <div class="footer-about-content">
                                                        <p>Sunday closed... </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>

        </>
    )
}
