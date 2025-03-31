import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AddReviews from './Components/reviews/AddReviews';
import HomeLayout from './Components/HomeLayout';
import Reviews from './Components/reviews/Reviews';
import Login from './Components/Authontications/Login';
import AuthProvider, { AuthContext } from './Components/Authontications/AuthProvider';
import Signup from './Components/Authontications/Signup';
import MyReviews from './Components/reviews/MyReviews';
import PrivateRoute from './Components/Authontications/PrivateRoute';
import ReviewDetails from './Components/reviews/ReviewDetails';
import UpdateReview from './Components/reviews/UpdateReview';
import Home from './Home/Home';
import WatchList from './WatchList';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://game-review-server-site.vercel.app/reviews")
      },
      {
        path: "/add-reviews",
        element: <PrivateRoute><AddReviews></AddReviews></PrivateRoute>
      },
      {
        path: "/all-reviews",
        element: <Reviews></Reviews>,
        loader: () => fetch("https://game-review-server-site.vercel.app/reviews")
      },
      {
        path: '/reviews/:id',
        element: <ReviewDetails></ReviewDetails>,
        loader: ({ params }) => fetch(`https://game-review-server-site.vercel.app/reviews/${params.id}`)
      },
      {
        path: "/my-reviews/:email",
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
        loader: ({ params }) => fetch(`https://game-review-server-site.vercel.app/my-reviews/${params.email}`)
      },
      {
        path: '/update-review/:id',
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) => fetch(`https://game-review-server-site.vercel.app/update-review/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/watchList",
        element: <PrivateRoute><WatchList></WatchList></PrivateRoute>,
        loader: () => fetch('https://game-review-server-site.vercel.app/watchList')
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)
