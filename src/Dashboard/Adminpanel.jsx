import React from 'react'
// import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';




const Adminpanel = () => {
  return (
    <>
    <div>
      <h1>Admin Panel</h1>
      <nav>
        <a href="/">Dashboard</a> | <a href="./Customer">Customer</a> | <a href="./FormHandling">Form Handling</a>
      </nav>
      <hr />
      {/* <Outlet /> Renders child components */}
    </div>
      <div class="container-fluid">
    {/* <!-- Sidebar --> */}
    <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark text-white sidebar">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white">
          <h4 class="my-3">Dashboard</h4>
          <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
            <li class="nav-item">
              <a href="./admin" class="nav-link text-white">Home</a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">Users</a>
            </li>
            <li>
              <a href="./formhandel" class="nav-link text-white">Forms</a>
            </li>
            <li>
              <a href="./customer" class="nav-link text-white">Customer Feedback</a>
            </li>
            <li>
            <li>
              <a href="#" class="nav-link text-white">Driver Management</a>
            </li>
              <a href="#" class="nav-link text-white">Settings</a>
            </li>
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
          <img src="src/images/tusharprofile.jpg" alt="Profile" class="rounded-circle" width="40" height="40"/>
        </div>
      </div>
    </div>
  </nav>

  {/* <!-- Nav Second --> */}
  <nav class="navsecond-custom py-3">
    <div class="container-fluid">
      <a href="#">Home</a>
      <a href="#"> / Dashboard</a>
    </div>
  </nav>
        </div>

        {/* <!-- Cards Section --> */}
        <div class="row mb-3">
          <div class="col-md-3">
            <div class="card text-white bg-primary">
              <div class="card-body">
                <h5 class="card-title">26K</h5>
                <p class="card-text">Users</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card text-white bg-info">
              <div class="card-body">
                <h5 class="card-title">अनगिनत पैसा</h5>
                <p class="card-text">Income</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card text-white bg-warning">
              <div class="card-body">
                <h5 class="card-title">10%</h5>
                <p class="card-text">Conversion Rate</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card text-white bg-danger">
              <div class="card-body">
                <h5 class="card-title">10,000 +</h5>
                <p class="card-text">Rides Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Chart Placeholder --> */}
        <div class="card">
          <div class="card-body">
            <h5 class="card-title , text-center , w-100 , fw-bold">Welcome to the admin Panel of the JCR Cab Services</h5>
            <canvas id="trafficChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* <RouterProvider router={router}/> */}
    </>
  
  )
}

export default Adminpanel;
