import ReactDOM from "react-dom/client";
import FooterContainer from "./components/FooterContainer";
import BodyContainer from "./components/BodyContainer";
import HeaderContainer from "./components/HeaderContainer";
// import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import { lazy, Suspense } from "react";

// to lazy load or to make a component load on demand, we use lazy() method of react library.
const About = lazy(() => import("./components/About"));
console.log(About);

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
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        children: [
          {
            //cildren of children will be consumed by Outlet in the parent component, here parent is <About /> and child on /about/profile route is <Profile />
            path: "profile",
            element: <Profile />,
          },
        ],
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
