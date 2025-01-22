import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import HomePage from "../Pages/Home/HomePage";
import AddCraft from "../Pages/AddCraft";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <h1>404 error</h1>,
      children: [
        {
            path: "/",
            element: <HomePage/>
        },
        {
            path: "/addCraft",
            element: <AddCraft/>
        },
      ]
    },
  ]);

export default router;