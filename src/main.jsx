import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/add-reviews",
        element: <AddReviews></AddReviews>
      },
      {
        path: "/all-reviews",
        element: <Reviews></Reviews>,
        loader: () => fetch("http://localhost:5000/reviews")
      },
      {
        path: '/reviews/:id',
        element: <ReviewDetails></ReviewDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`)
      },
      {
        path: "/my-reviews/:email",
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/my-reviews/${params.email}`)
      },
      {
        path: '/update-review/:id',
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) => fetch(`http://localhost:5000/update-review/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },

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
