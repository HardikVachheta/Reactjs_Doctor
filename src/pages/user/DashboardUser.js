import React from 'react'
import { Helmet } from 'react-helmet'
import { Dashboard_u } from './Dashboard_u'
import { Navbar_u } from './Navbar_u'
import { Dashboard_u2 } from './Dashboard_u2'
import { Link } from 'react-router-dom'

export const Dashboard_u_main = () => {

  var style1 = { transform: "none min height 479.219px" }
  var style2 = { textalign: "initial;" }
  return (
    <div class="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
      <Helmet>
        <title>User Dashboard</title>
      </Helmet>
      <div class="layout-container">
        <nav class="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme" id="layout-navbar">
          <div class="container-xxl">
            <div class="navbar-brand app-brand demo d-none d-xl-flex py-0 me-4">
              <a href="index.html" class="app-brand-link gap-2">
                <div class="app-brand-text demo menu-text fw-bolder">
                  <Link to="#" class="app-brand-link">
                    <span>
                      <img src='assetsdoc/img/brand/brand-logo-02-removebg-preview.png' />
                    </span>
                  </Link>
                </div>
              </a>
              <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-xl-none">
                <i class="bx bx-chevron-left bx-sm align-middle"></i>
              </a>
            </div>
          </div>
        </nav>
        <div class="layout-page">
          <div class="content-wrapper">
            <Navbar_u />
            <div class="container-xxl flex-grow-1 container-p-y">
              {/* <h4 class="fw-bold py-3 mb-4">
                <span class="text-muted fw-light"></span> User Dashboard
              </h4> */}
              <Dashboard_u2 xy="hellow"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
