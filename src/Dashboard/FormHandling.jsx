import React from 'react'

const Form = () => {
  return (
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

        {/* <!-- Form Handling --> */}
        <div class="container mt-4">
            <form id="formExample" onsubmit="handleSubmit(event)">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="name" class="form-control" id="name" placeholder="Enter your name"/>
                </div>
                <div class="mb-3">
                    <label for="address" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email"/>
                </div>
                <div class="mb-3">
                    <label for="phoneNumber" class="form-label">Phone Number</label>
                    <input type="mobilenumber" class="form-control" id="number" placeholder="Enter your Mobile Number"/>
                </div>
                <div class="mb-3">
                    <label for="address" class="form-label">Pickup Address</label>
                    <input type="address" class="form-control" id="address" placeholder="Enter pickup address"/>
                </div>
                <div class="mb-3">
                    <label for="numberpeople" class="form-label">Number of People</label>
                    <input type="number" class="form-control" id="password" placeholder="Enter Number of People" />
                </div>
                <div class="mb-3">
                    <label for="carservice" class="form-label">Car Service</label>
                    <input type="carservice" class="form-control" id="carservice" placeholder="Enter the car you want"/>
                </div>
                <div class="mb-3">
                    <label for="pickupdate" class="form-label">Pickup Date</label>
                    <input type="date" class="form-control" id="pickupdate" placeholder="Enter Pickup date" />
                </div>
                <div class="mb-3">
                    <label for="dropupdate" class="form-label">Drop Date</label>
                    <input type="date" class="form-control" id="password" placeholder="Enter Drop date" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Form
