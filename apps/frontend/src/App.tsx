import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExampleRoute from "./routes/ExampleRoute.tsx";
//import PathGrapher from "./components/map_page/PathGrapher.tsx";
import { LocationSelector } from "./components/map_page/LocationSelector.tsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <div />,
      element: <Root />,
      children: [
        {
          path: "",
          element: <ExampleRoute />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
  function Root() {
    //return <PathGrapher></PathGrapher>;
    return <LocationSelector></LocationSelector>;
  }
}

export default App;
