import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Navbar_a } from './Navbar_a'
import { UserList } from './UserList'
import axios from 'axios'

export const DashboardAdmin = () => {
  const [counts, setCounts] = useState({
    users: 0,
    doctors: 0,
    admins: 0,
    clinics: 0
  });

  useEffect(() => {
    getUserCount();
    getClinicCount();
  }, []);

  const getUserCount = async () => {
    try {
      const response = await axios.get("http://localhost:4000/user/user1/");
      const users = response.data.users;

      let userCount = 0, doctorCount = 0, adminCount = 0;

      users.forEach(user => {
        if (user.role.name === 'User') {
          userCount++;
        } else if (user.role.name === 'Admin') {
          adminCount++;
        } else {
          doctorCount++;
        }
      });

      setCounts(prevState => ({
        ...prevState,
        users: userCount,
        doctors: doctorCount,
        admins: adminCount
      }));
    } catch (error) {
      console.error("Error fetching user count", error);
    }
  };

  const getClinicCount = async () => {
    try {
      const response = await axios.get("http://localhost:4000/clinic/get");
      const clinicCount = response.data.data.length;

      setCounts(prevState => ({
        ...prevState,
        clinics: clinicCount
      }));
    } catch (error) {
      console.error("Error fetching clinic count", error);
    }
  };

  return (
    <div className="layout-page">
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="fw-bold py-3 mb-4">Admin Dashboard</h4>
          <div className="row g-4 mb-4">
            {['Users', 'Admins', 'Doctors', 'Clinics'].map((label, idx) => (
              <div key={idx} className="col-lg-3 col-md-6 col-sm-12">
                <div className="card text-center">
                  <div className="card-body">
                    <h2><i className={`bx bx-${getIcon(label)} display-6`}></i></h2>
                    <h4>{label}</h4>
                    <h5>{counts[label.toLowerCase()]}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <UserList />
        </div>
      </div>
    </div>
  );
};

const getIcon = (label) => {
  switch (label) {
    case 'Users': return 'user';
    case 'Admins': return 'user-plus';
    case 'Doctors': return 'user';
    case 'Clinics': return 'gift';
    default: return 'user';
  }
};
