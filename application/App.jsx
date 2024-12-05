import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
])

export default function App() {
  return (
    <RouterProvider router={routes}/>

  );
}