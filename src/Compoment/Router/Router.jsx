
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddDocument from "../AddDocument/AddDocument";
import UpdateProfile from "../ComponentCss/UpdateProfile/UpdateProfile";
import ProfileDetails from "../ComponentCss/ProfileDetails/ProfileDetails";
import Blog from "../Blog/Blog";
import LoginPage from "../LoginPage/LoginPage";
import LogOutPage from "../LogOutPage/LogOutPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('../FackData.json'),
        },

        {
            path: '/updateProfile',
            element: <PrivateRoute>
              <UpdateProfile></UpdateProfile>
            </PrivateRoute>
        },

        {
          path: '/profileDetails',
          element: <PrivateRoute>
            <ProfileDetails></ProfileDetails>
          </PrivateRoute>
      },

        {
            path: '/addDocument',
            element:<PrivateRoute>
              <AddDocument></AddDocument>
            </PrivateRoute>,
            loader: () => fetch('../FackData.json'),
        },
        {
          path: '/blog/:id',
          element: <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>,
          loader: () => fetch('../FackData.json'),
        },
        {
          path: '/login',
          element: <LoginPage></LoginPage>
      },

      {
        path: '/signUp',
        element: <LogOutPage></LogOutPage>
    },
      ]
    },
    
  ]);

  export default router;