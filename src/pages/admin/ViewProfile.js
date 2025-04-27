import React from "react";
import { useParams } from "react-router-dom";
import axios from '../../utils/axiosConfig';
import { useState, useEffect } from "react";
import { get } from "react-hook-form";
import { Helmet } from "react-helmet";

export const ViewProfile = () => {
  const [docList, setDoc] = useState();
  var id = useParams().id;


  const getApi = () => {

    axios.get("/doctor/get/" + id).then((res) => {
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", res.users);
      setDoc(res.data.data);
    })
      .catch((err) => {
        console.log(err);
      });
  };
  getApi()
  useEffect(() => {
    getApi();
  }, []);

  return (

    <div>
      <Helmet>
        <link href="./.../assetsdoc/img/favicon.png" rel="icon" />

        <link rel="stylesheet" href="../assetsdoc/css/bootstrap.min.css" />

        <link rel="stylesheet" href="../assetsdoc/plugins/fontawesome/css/fontawesome.min.css" />
        <link rel="stylesheet" href="../assetsdoc/plugins/fontawesome/css/all.min.css" />

        <link rel="stylesheet" href="../assetsdoc/css/feather.css" />

        <link rel="stylesheet" href="../assetsdoc/plugins/fancybox/jquery.fancybox.min.css" />

        <link rel="stylesheet" href="../assetsdoc/css/style.css" />

      </Helmet>
            <div className="content-profile">
              <div className="container-fluid">

                <div className="card">
                  {/* <button onClick={getApi}>btn</button> */}
                  <div class="d-flex justify-content-center">
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                      <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden">
                          <img
                            class="img-fluid"
                            src={`${process.env.PUBLIC_URL}/Photos/${docList?.profile_pic}`}
                            alt="user"
                          />
                        </div>
                      </div>

                    </div>

                  </div>
                  <div class="team-text bg-light text-center p-4">
                    {/* <h5> DRName:{docList?.DrName}</h5> */}
                    <h5>Qualification  :  {docList?.qualification}</h5>
                    <h5>Specalization  :  {docList?.specialization}</h5>
                    <h5>Experiance  :  {docList?.experience}</h5>
                    {/* <h5>Fees:{docList?.Fees}</h5> */}
                    <p>
                      <h5>
                        <b>About  :  </b>
                      </h5>
                      {docList?.about}
                    </p>

                    <p class="text-primary"></p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        
  );
};