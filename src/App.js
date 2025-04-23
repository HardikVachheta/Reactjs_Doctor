import logo from './logo1.svg';
import './App.css';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ForgotPassword } from './pages/ForgotPassword';
import { Error } from './pages/Error';


// import { Dashboard_d } from './pages/doctor/Dashboard_d';
// import { Dashboard_u } from './pages/user/Dashboard_u';

// import { DoctorDashboard } from './pages/doctor/DoctorDashboard';
// // import { Dashboard_a_main } from './pages/admin/DashboardAdmin';
// // import { DoctorProfile } from './pages/doctor/DoctorProfile';
// import { UserProfile } from './pages/user/UserProfile';
// import { AdminProfile } from './pages/admin/AdminProfile';
// import { UserList } from './pages/admin/UserList';
// import { All_Doctor } from './pages/admin/AllDoctors';
// import { Clinic } from './pages/doctor/Clinic';
// import { ClinicView } from './pages/doctor/ClinicView';
// import { DoctorDetails_u } from './pages/user/DoctorDetails_u';
import { ViewProfile1 } from './pages/doctor/ViewProfile1';
// import { Dashboard_u2 } from './pages/user/Dashboard_u2';
import { Logout } from './pages/Logout';
// import { ShowAppointment } from './pages/user/ShowAppointment';
import { Appointment } from './pages/user/Appointment';
import { AdminRoutes } from './routes/AdminRoutes';
import { useEffect, useState } from 'react';
import { DoctorRoutes } from './routes/DoctorRoutes';
import { UserRoutes } from './routes/UserRoutes';




function App() {

  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch user role from localStorage (or any other auth logic)
    const role = localStorage.getItem('role');
    setUserRole(role);
    setIsLoading(false);
  }, []);
  console.log("userRole", userRole)
  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner component
  }
  return (
    <div className="App">
      <Helmet>
        <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
        <link rel="stylesheet" href="../assets/vendor/fonts/fontawesome.css" />
        <link rel="stylesheet" href="../assets/vendor/fonts/flag-icons.css" />

        <link rel="stylesheet" href="../assets/vendor/css/core.css" class="template-customizer-core-css" />
        {/* 
      <link rel="stylesheet" href="../assets/vendor/css/theme-default.css" class="template-customizer-theme-css" />
      */}
        <link rel="stylesheet" href="../assets/vendor/css/rtl/core.css" class="template-customizer-core-css" />
        <link rel="stylesheet" href="../assets/vendor/css/pages/page-profile.css" />
        <link rel="stylesheet" href="../assets/vendor/css/pages/page-misc.css" />
        <link rel="stylesheet" href="../assets/vendor/css/pages/page-icons.css" />

        <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
        <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
        <link rel="stylesheet" href="../assets/vendor/libs/typeahead-js/typeahead.css" />
        <link rel="stylesheet" href="../assets/vendor/libs/select2/select2.css" />
        <link rel="stylesheet" href="../assets/vendor/libs/formvalidation/dist/css/formValidation.min.css" />
        <link rel="stylesheet" href="../assets/vendor/libs/bs-stepper/bs-stepper.css" />

        <link rel="stylesheet" href="../assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css" />
        <link rel="stylesheet" href="../assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css" />
        <link rel="stylesheet" href="../assets/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.css" />
        <link rel="stylesheet" href="../assets/vendor/libs/datatables-checkboxes-jquery/datatables.checkboxes.css" />

        <link rel="stylesheet" href="../assets/css/demo.css" />
        <link rel="canonical" href="https://themeselection.com/products/sneat-bootstrap-html-admin-template/" />
        <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
        <link rel="stylesheet" href="../assets/vendor/css/core.css" class="template-customizer-core-css" />
        <link rel="stylesheet" href="../assets/vendor/css/theme-default.css" class="template-customizer-theme-css" />
        <link rel="stylesheet" href="../assets/css/demo.css" />

        <link rel="stylesheet" type="text/css" href="../assets/vendor/css/rtl/theme-default.css" class="template-customizer-theme-css" />
        <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
        <link rel="stylesheet" href="../assets/vendor/css/pages/page-auth.css" />

        <link rel="canonical" href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/"></link>
        <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
        <link rel="stylesheet" href="../assets/vendor/fonts/fontawesome.css" />
        <link rel="stylesheet" href="../assets/vendor/fonts/flag-icons.css" />
        <link rel="stylesheet" href="../assets/vendor/css/core.css" class="template-customizer-core-css" />
        <link rel="stylesheet" href="../assets/vendor/css/theme-default.css" class="template-customizer-theme-css" />
        <link rel="stylesheet" href="../assets/css/demo.css" />
        <link rel="stylesheet" href="../assets/vendor/css/pages/page-auth.css" />
        <link rel="stylesheet" href="../assets/vendor/libs/animate-css/animate.css" />
        <link rel="stylesheet" href="../assets/vendor/libs/sweetalert2/sweetalert2.css" />
        <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
        <link rel="stylesheet" href="../assets/vendor/libs/typeahead-js/typeahead.css" />
        <link rel="stylesheet" type="text/css" href="../assets/vendor/css/rtl/core.css" class="template-customizer-core-css" />
        <link rel="stylesheet" type="text/css" href="../assets/vendor/css/rtl/theme-default.css" class="template-customizer-theme-css" />

        <script src="../assets/vendor/libs/jquery/jquery.js"></script>
        <script src="../assets/vendor/libs/popper/popper.js"></script>
        <script src="../assets/vendor/js/bootstrap.js"></script>
        <script src="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>
        <script src="../assets/vendor/js/helpers.js"></script>
        <script src="../assets/vendor/js/menu.js"></script>
        <script src="../assets/js/main.js"></script>
        {/* <script src="../assets/js/config.js"/> */}
        <script async defer src="https://buttons.github.io/buttons.js"></script>


        <link rel="stylesheet" href="../assetsdoc/css/bootstrap.min.css" />
        <link rel="stylesheet" href="../assetsdoc/plugins/fontawesome/css/fontawesome.min.css" />
        <link rel="stylesheet" href="../assetsdoc/plugins/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="../assetsdoc/css/feather.css" />

        <link rel="stylesheet" href="../assetsdoc/css/bootstrap.min.css" />
        <link rel="stylesheet" href="../assetsdoc/plugins/fontawesome/css/fontawesome.min.css" />
        <link rel="stylesheet" href="../assetsdoc/plugins/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="../assetsdoc/css/feather.css" />
        <link rel="stylesheet" href="../assetsdoc/css/custom.css" />
        <link rel="stylesheet" href="../assetsdoc/css/custom.css" />
      </Helmet>

      <Routes>
        <Route path='/' element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        {/* <Route path='*' element={<Error />} /> */}

        {/* --------------------ADMIN PAGES-------------------- */}
        {/* <Route path='/dashboard_a_main' element={<Dashboard_a_main />} />
        <Route path='/dashboard_a' element={<Dashboard_a />} />
        <Route path='/AdminProfile' element={<AdminProfile />} />

        <Route path='/All_Doctor' element={<All_Doctor />} />
        <Route path='/UserList' element={<UserList />} /> */}


        {/* Protect Admin Routes */}
        {userRole === 'Admin' && <Route path="/*" element={<AdminRoutes />} />}

        {/* Redirect or show a fallback page if role is not found */}
        {!userRole && <Route path="*" element={<Navigate to="/login" />} />}

        {/* --------------------DOCTOR PAGES---------------------- */}
        {userRole === 'Doctor' && <Route path="/*" element={<DoctorRoutes />} />}


        {/* <Route path='/dashboard_d_main' element={<DoctorDashboard />} />
        <Route path='/dashboard_u' element={<Dashboard_u />} />
        <Route path='/dashboard_u2' element={<Dashboard_u2 />} />

        <Route path='/DoctorProfile' element={<DoctorProfile />} />
        */}



        {/* --------------------USER PAGES-------------------- */}
        {userRole === 'User' && <Route path="/*" element={<UserRoutes />} />}


        {/* <Route path='/user/dashboard' element={<UserDashboard />} /> */}
        {/* <Route path='/dashboard_d' element={<Dashboard_d />} /> */}
        {/* <Route path='/UserProfile' element={<UserProfile />} /> */}
        <Route path='/viewprofile/:id' element={<ViewProfile1 />} />
        {/* <Route path='/DoctorDetails_u/:id' element={<DoctorDetails_u />} /> */}
        {/* <Route path='/DoctorDetails_u/' element={<DoctorDetails_u />} /> */}
        {/* <Route path='/ShowAppointment' element={<ShowAppointment />} /> */}
        <Route path='/Appointment/:id' element={<Appointment />} />
        {/* <Route path='/Clinic' element={<Clinic />} /> */}
        {/* <Route path='/ClinicView' element={<ClinicView />} /> */}



        <Route path='/Logout' element={<Logout />} />

      </Routes>
    </div>
  );
}

export default App;
