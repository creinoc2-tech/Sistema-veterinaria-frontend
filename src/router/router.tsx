import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomeContainer from "../features/home/Home.container"
import SigninContainer from "../features/auth/signin/signin.auth.container"
import SignupContainer from "../features/auth/signup/signup.auth.container"


const router = createBrowserRouter([
    {
    path: "/*",
    element: <HomeContainer />,
  },
  {
    path: "signin",
    element: <SigninContainer />,
  },
  {
    path: "signup",
    element: <SignupContainer />,
  },
])

export const  MyRoutes = () => <RouterProvider router={router} />