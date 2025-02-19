import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const nav = useNavigate();

  const FormHandel = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    // data.append('userr', (Userr));

    try {
      const response = await axios.post(`http://localhost:8000/api/jcr-services/admin/register-admin`, data)
      if(response.status==200){
        Cookies.remove("JcrAdmin-login")
        nav('/adminlogin')
      }

    }
    catch (error) {
      console.log(error);
    }
    e.target.name.value = ''
    e.target.profile.value = ''
    e.target.email.value = ''
    e.target.password.value = ''
  }

  const [Data,setData] = useState([]);
  const [path,setpath] = useState([]);
  const [getAdminData, SetAdminData] = useState({})
  const [profile, setprofile] = useState([])


const ShowForm =async()=>{
  try {
    const response = await axios.get(`http://localhost:8000/api/jcr-services/admin/show-admin`)
  
    setData(response.data.data);
    setpath(response.data.file_path);
  }
  catch (error) {
    console.log(error);
  }
}

const AdminData = () => {
  const cookiedata = JSON.parse(Cookies.get("JcrAdmin-login"))
  // console.log(cookiedata)
  if (cookiedata) {
      SetAdminData(cookiedata[0])

  }
  // console.log(getAdminData)
  // setAdminData(cookiedata)
}

const checkedifloggedin = () => {
  let cookiedata = Cookies.get("JcrAdmin-login");
  if (!cookiedata) {
    nav("/adminlogin")
  } else {
    cookiedata = JSON.parse(cookiedata)
    setprofile(cookiedata)
  }
}

useEffect(()=>{ShowForm(); AdminData(); checkedifloggedin();},[])
// console.log(profile)


  return (
    <div class="container-fluid">
        {/* <!-- Sidebar --> */}
        <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark text-white sidebar" style={{ height: '100vh' }} >
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white">
              <h4 class="my-3">Dashboard</h4>
              <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
                <li class="nav-item">
                  <a href="./admin" class="nav-link text-white">Home</a>
                </li>
                <li>
                  <a href="./adminprofile" class="nav-link text-white">Admin-profile</a>
                </li>
                <li>
                  <a href="./formhandel" class="nav-link text-white">Forms</a>
                </li>
                <li>
                  <a href="./customer" class="nav-link text-white">Customer Feedback</a>
                </li>

                <li>
                  <a href="./driver" class="nav-link text-white">Add Driver</a>
                </li>

                <li>
                  <a href="./driver-view" class="nav-link text-white">View Driver</a>
                </li>

                {/* <li>
              <a href="#" class="nav-link text-white">Settings</a>
            </li> */}
              </ul>
            </div>
          </div>

          {/* <!-- Main Content --> */}
          <div class="col py-3">
            <div className='col'>
              {/* <!-- Navbar --> */}
              <nav class="navbar navbar-expand-lg navbar-custom ">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">Dashboard</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" href="#">Dashboard</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Users</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Settings</a>
                      </li>
                    </ul>
                    <div class="d-flex align-items-center">
                      <i class="fas fa-bell me-3 text-white"></i>
                      <i class="fas fa-envelope me-3 text-white"></i>
                      <i class="fas fa-clock me-3 text-white"></i>
                      <img src={`http://localhost:8000/keshaveJcr-files/Admin/${profile.map((v) => v.profile)}`} alt="Profile" class="rounded-circle" width="40" height="40" />
                    </div>
                  </div>
                </div>
              </nav>

              {/* <!-- Nav Second --> */}
              <nav class="navsecond-custom py-3">
                <div class="container-fluid">
                  <a href="/">Home</a>
                  <a href="./admin"> / Dashboard</a>
                </div>
              </nav>
            </div>
            <div className='container d-flex flex-column align-items-center'>
              <h1 className='text-center bg-primary text-white p-2 rounded shadow'>Admin Details</h1>
              <div className='card p-3 shadow-lg w-75'>
                <form className='w-100' onSubmit={FormHandel} >
                  <div className='mb-3'>
                    <label className='form-label fw-bold'>User Name:</label>
                    <input type='text' name='name' className='form-control' value={getAdminData.name} onChange={(e) => { SetAdminData({ ...getAdminData, name: e.target.value }) }} placeholder='Enter User name' required />
                  </div>

                  <div className='mb-3'>
                    <label className='form-label fw-bold'>User Image:</label>
                    <input type='file' name='profile' className='form-control' />
                  </div>

                  <div className='mb-3'>
                    <label className='form-label fw-bold'>User Email:</label>
                    <input type='text' name='email' value={getAdminData.email} className='form-control' onChange={(e) => { SetAdminData({ ...getAdminData, email: e.target.value }) }} placeholder='Enter User Email' required />
                  </div>

                  <div className='mb-3'>
                    <label className='form-label fw-bold'>User Password:</label>
                    <input type='text' name='password' className='form-control' value={getAdminData.password} onChange={(e) => { SetAdminData({ ...getAdminData, password: e.target.value }) }} placeholder='Enter User Password' required />
                  </div>

                  <div className='d-grid'>
                    <button type='submit' className='btn btn-success py-2 fw-bold shadow-sm'>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Admin
