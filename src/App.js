import ReactDOM from "react-dom/client";
import FooterContainer from "./components/FooterContainer";
import BodyContainer from "./components/BodyContainer";
import HeaderContainer from "./components/HeaderContainer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import { lazy, Suspense, useContext, useState } from "react";
import UserContext from "./utils/UserContext";
import InstaMart from "./components/InstaMart";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

// to lazy load or to make a component load on demand, we use lazy() method of react library.
const About = lazy(() => import("./components/About"));
// console.log(About);

const PageContainer = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <HeaderContainer />
        <Outlet />
        <FooterContainer />
      </UserContext.Provider>
    </Provider>
  );
};

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
      {
        path: "/instamart",
        element: <InstaMart />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
