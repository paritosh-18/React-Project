import ReactDOM from "react-dom/client";
import FooterContainer from "./components/FooterContainer";
import BodyContainer from "./components/BodyContainer";
import HeaderContainer from "./components/HeaderContainer";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginForm from "./components/LoginForm";

const PageContainer = () => (
  <>
    <HeaderContainer />
    <Outlet />
    <FooterContainer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <PageContainer />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <BodyContainer />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
