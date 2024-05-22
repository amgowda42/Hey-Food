import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contcat";
import Error from "./components/Error";

const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const router = createBrowserRouter([
  { path: "/", element: <App />
,errorElement: <Error/>},
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
