
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import UserWrapper from "../layouts/UserWrapper";
import Notfound from "../pages/Notfound";

import ShoppingCart from "../pages/shopping-cart/ShoppingCart";
import MultiStepForm from "../pages/multi-step-form/MultiStepForm";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <UserWrapper />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shopping-cart",
        element: <ShoppingCart />,
      },
      {
        path: "multi-step-form",
        element: <MultiStepForm />,
      },
    ],
  },

  {
    path: "*",
    element: <Notfound />,
  },
]);

export default Routes;
