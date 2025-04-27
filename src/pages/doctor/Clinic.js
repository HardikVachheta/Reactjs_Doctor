import React, { useEffect, useState } from 'react'
import { Country, State, City } from 'country-state-city';
import { useForm } from 'react-hook-form';
import axios from '../../utils/axiosConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Indian_states_cities_list from "indian-states-cities-list";

export const Clinic = () => {


    var id = localStorage.getItem('id')

    var style1 = { width: " 360.625px;" }
    var style2 = { width: " 489.5px;" }
    var sel = { width: " 468.258px;" }
    var btn = { width: " 20%" }
    var rat = { marginLeft: "0px;" }
    var rat1 = { width: "32px", height: "32px", marginLeft: "0px;" }
    var rat2 = { width: "32px", height: "32px" }
    var w1 = { width: " 50%;" }
    var w2 = { width: " 160px;" }

    // console.log(Indian_states_cities_list.STATE_WISE_CITIES.Gujarat);

    const [state12, setState] = useState([])
    const [city12, setCity] = useState()

    // console.log("getAllCountries------------------------------",Country.getAllCountries())
    // console.log("getAllCountries------------------------------", Country.getCountryByCode("IN"))
    // console.log("getAllStates------------------------------", State.getStatesOfCountry("IN"))
    // console.log("getAllCity------------------------------",City.getAllCities("IN"))

    // setCity(State.getStatesOfCountry("IN"))
    // console.log(cities)


    useEffect(() => {
        getState()
        getCity()
        // getClinic()

    }, [])

    const getState = () => {
        axios.get("/state/get").then((res) => {
            console.log("state data ----", res.data.data)
            setState(res.data.data)

        }).catch((err) => {

        })
    }

    const getCity = () => {
        axios.get("/city/get1").then((res) => {
            console.log("city data ----", res.data.users)
            setCity(res.data.users)

        }).catch((err) => {

        })
    }


    // const getClinic = () => {
    //     axios.get("/clinic/get1").then((res) => {
    //         console.log("clinic data ----", res.data.users)
    //         setState(res.data.data)

    //     }).catch((err) => {

    //     })
    // }

    const { register, handleSubmit } = useForm()

    const submit = (data) => {

        console.log(data)
        axios.post("/clinic/add", data).then((res) => {
            console.log("clinic data ----", res.data.data)
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
                <span class="text-muted fw-light"></span> Clinic Page
            </h4>

            <div class="row my-4">
                <div class="col">
                    <div class="accordion" id="collapsibleSection">
                        <div class="card accordion-item">
                            <h2 class="accordion-header" id="headingDeliveryAddress">
                                <button type="button" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseDeliveryAddress" aria-expanded="true" aria-controls="collapseDeliveryAddress">
                                    Clinic Details </button>
                            </h2>
                            <form onSubmit={handleSubmit(submit)}>
                                <div id="collapseDeliveryAddress" class="accordion-collapse collapse show" data-bs-parent="#collapsibleSection">
                                    <div class="accordion-body">
                                        <div class="row g-3">

                                            <div class="col-md-6">
                                                <div class="d-flex justify-content-between">
                                                    <label class="form-label" for="collapsible-fullname">Full Name</label></div>
                                                <input type="text" {...register("clinicname")} id="collapsible-fullname" class="form-control" placeholder="John Doe" />
                                            </div>

                                            <div class="col-md-6">
                                                <div class="d-flex justify-content-between">
                                                    <label class="form-label" for="collapsible-phone">Phone No</label></div>
                                                <input type="text" {...register("phoneno")} id="collapsible-phone" class="form-control phone-mask" placeholder="658 799 8941" aria-label="658 799 8941" />
                                            </div>

                                            <div class="col-12">
                                                <div class="d-flex justify-content-between">
                                                    <label class="form-label" for="collapsible-address">Address</label></div>
                                                <textarea {...register("address")} class="form-control" id="collapsible-address" rows="2" placeholder="1456, Mall Road"></textarea>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="d-flex justify-content-between">
                                                    <label class="form-label" for="collapsible-pincode">Pincode</label></div>
                                                <input type="text" {...register("pincode")} id="collapsible-pincode" class="form-control" placeholder="658468" />
                                            </div>

                                            <div class="col-md-6">
                                                <div class="d-flex justify-content-between">
                                                    <label class="form-label" for="collapsible-landmark">Timing</label></div>
                                                <input class="form-control" {...register("timing")} type="time" id="html5-time-input" placeholder="Nr. Wall Street" />
                                            </div>

                                            <div class="col-md-6">
                                                <div class="d-flex justify-content-between">
                                                    <label class="form-label" for="collapsible-city">State</label>
                                                </div>
                                                <select class="form-select" {...register("stateId")} id="exampleFormControlSelect1" aria-label="Default select example">
                                                    <option selected="">Select State . . .  </option>
                                                    <option value="Gujarat">Gujarat</option>

                                                    {/* {
                                                                    state12?.map((u) => {
                                                                        return (
                                                                            <option value={u._id} >{u.statename}</option>
                                                                        )
                                                                    })
                                                                } */}
                                                </select>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="d-flex justify-content-between">
                                                    <label class="form-label" for="collapsible-city">City</label></div>
                                                <select class="form-select" {...register("cityId")} id="exampleFormControlSelect1" aria-label="Default select example">
                                                    <option selected="">Select City . . .</option>
                                                    {
                                                        city12?.map((u) => {
                                                            return (
                                                                <option value={u._id}>{u.cityname}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>

                                            <div class="col-12">
                                                <div class="d-flex justify-content-between">
                                                    <label class="form-label" for="collapsible-address">About</label></div>
                                                <textarea {...register("about")} class="form-control" id="collapsible-address" rows="2" placeholder="1456, Mall Road"></textarea>
                                            </div>

                                            <input type="hidden" {...register("doctorId")} value={id} class="form-control phone-number-mask" />

                                            <div class="col-12">
                                                <div class="d-flex justify-content-center">
                                                    <button type="submit" class="btn btn-primary d-grid" style={btn}>Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
