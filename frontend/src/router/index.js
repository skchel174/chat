import {useRoutes} from "react-router-dom";
import MainPage from "pages/MainPage";
import AuthGuard from "infrastructure/Auth/AuthGuard";
import GuestGuard from "infrastructure/Auth/GuestGuard";
import AuthLayout from "layouts/AuthLayout";
import SignInPage from "pages/SignInPage";
import SignUpPage from "pages/SignUpPage";
import NotFoundPage from "pages/NotFound/NotFoundPage";

const Router = () => {
  return useRoutes([
    /* Main page */
    {
      path: "/",
      element: <AuthGuard><MainPage/></AuthGuard>,
    },

    /* Auth */
    {
      element: <GuestGuard><AuthLayout/></GuestGuard>,

      children: [
        {
          path: "/login",
          element: <SignInPage/>,
        },
        {
          path: "/register",
          element: <SignUpPage/>,
        },
      ],
    },

    /* 404 */
    {
      path: "*",
      element: <NotFoundPage/>,
    },
  ]);
};

export default Router;
