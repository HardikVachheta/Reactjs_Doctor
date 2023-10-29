import logo from './logo1.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ForgotPassword } from './pages/ForgotPassword';
import { Error } from './pages/Error';


import { Dashboard_d } from './pages/doctorpage/Dashboard_d';
import { Dashboard_a } from './pages/adminpage/Dashboard_a';
import { Dashboard_u } from './pages/userpage/Dashboard_u';


import { Dashboard_u_main } from './pages/userpage/Dashboard_u_main';
import { Dashboard_d_main } from './pages/doctorpage/Dashboard_d_main';
import { Dashboard_a_main } from './pages/adminpage/Dashboard_a_main';
import { DoctorProfile } from './pages/doctorpage/DoctorProfile';
import { UserProfile } from './pages/userpage/UserProfile';
import { AdminProfile } from './pages/adminpage/AdminProfile';
import { UserList } from './pages/adminpage/UserList';
import { All_Doctor } from './pages/adminpage/All_Doctor';
import { Clinic } from './pages/doctorpage/Clinic';
import { ClinicView } from './pages/doctorpage/ClinicView';
import { DoctorDetails_u } from './pages/userpage/DoctorDetails_u';
import { ViewProfile1 } from './pages/doctorpage/ViewProfile1';
import { Appointment } from './pages/userpage/Appointment';
import { Dashboard_u2 } from './pages/userpage/Dashboard_u2';
import { Logout } from './pages/Logout';
import { ShowAppointment } from './pages/userpage/ShowAppointment';
import { Appointment2 } from './pages/userpage/Appointment2';




function App() {

  return (
    <div className="App">
      {/* <UserList/> */}
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
        
      </Helmet>

      <Routes>
        
        <Route path='/' element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path='/*' element={<Error />} />
      
        {/* --------------------ADMIN PAGES-------------------- */}
        <Route path='/dashboard_a_main' element={<Dashboard_a_main />} />
        <Route path='/dashboard_a' element={<Dashboard_a />} />
        <Route path='/AdminProfile' element={<AdminProfile />} />

        <Route path='/All_Doctor' element={<All_Doctor />} />
        <Route path='/UserList' element={<UserList />} />

        {/* --------------------DOCTOR PAGES-------------------- */}
        <Route path='/dashboard_u_main' element={<Dashboard_u_main />} />
        <Route path='/dashboard_d' element={<Dashboard_d />} />
        <Route path='/UserProfile' element={<UserProfile />} />
        <Route path='/viewprofile/:id' element={<ViewProfile1/>} />
        <Route path='/Clinic' element={<Clinic />} />
        <Route path='/ClinicView' element={<ClinicView />} />
        
        {/* --------------------USER PAGES---------------------- */}
        <Route path='/dashboard_d_main' element={<Dashboard_d_main />} />
        <Route path='/dashboard_u' element={<Dashboard_u />} />
        <Route path='/dashboard_u2' element={<Dashboard_u2 />} />
        
        <Route path='/DoctorProfile' element={<DoctorProfile />} />
        <Route path='/DoctorDetails_u/:id' element={<DoctorDetails_u />} />
        <Route path='/DoctorDetails_u/' element={<DoctorDetails_u />} />
        <Route path='/Appointment/:id' element={<Appointment/>} />  
        <Route path='/Appointment2/:id' element={<Appointment2/>} />  
        <Route path='/ShowAppointment' element={<ShowAppointment/>} />  
        <Route path='/Logout' element={<Logout/>} />  

      </Routes>
    </div>
  );
}

export default App;
