import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AdminDash from './Dashboard/AdminDash';
import Coustomer from './Dashboard/Customer';
import FormHandling from './Dashboard/FormHandling';
import ContactUs from './ContactUsComponents/ContactUs.jsx';
import Driver from './Dashboard/Driver.jsx';
import Drivertable from './Dashboard/Drivertable.jsx';
import Admin from './Dashboard/Admin.jsx';
import AdminLogin from './AdminLogin.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

const route = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    
  },
  {
    path:'/admin',
    element:<AdminDash/>
  },
  {
    path:'/customer',
    element:<Coustomer/>
  },
  {
    path:'/formhandel',
    element:<FormHandling/>
  },
  {
    path: '/contactus',
    element: <ContactUs />,
  },
  {
    path:'/driver',
    element:<Driver/>
  },
  {
    path:'/driver-view',
    element:<Drivertable/>
  },
  {
    path:'/adminprofile',
    element:<Admin/>
  },
  {
    path:'/adminlogin',
    element:<AdminLogin/>
  }
])
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Shopp/> */}
    <RouterProvider router={route}/>
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
