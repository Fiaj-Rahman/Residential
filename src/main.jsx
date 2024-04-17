import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Compoment/Router/Router.jsx'
import FirebaseProvider from './Compoment/FirebaseProvider/FirebaseProvider.jsx'
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <FirebaseProvider>
      <RouterProvider router={router} />
   </FirebaseProvider>
   <ToastContainer />
  </React.StrictMode>,
)
