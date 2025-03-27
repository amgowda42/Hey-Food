import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./Pages/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contcat";
import Error from "./components/Error";
import RestaurantMenu from "./Pages/RestaurantMenu";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Pages/Cart";

const Grocery = lazy(() => import("./Pages/Grocery"));

const App = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    //data fetching from api by making an api call
    const data = {
      name: "Annappa Gowda",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <>
          <Header />
          <Outlet />
        </>
      </UserContext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
