import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import HomePage from "../Pages/Home/HomePage";
import AddCraft from "../Pages/AddCraft";
import Details from "../Pages/Details";
import AllCategories from "../Pages/AllCategories";
import Categories from "../Pages/Categories";
import ArtAndCraftList from "../Pages/ArtAndCraftList";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import ProtectedRoute from "../Protected/ProtectedRoute";
import UserProfile from "../Pages/UserProfile";
import MyArtAndCraft from "../Pages/MyArtAndCraft";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import UpdateCraft from "../Pages/UpdateCraft";

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
            element: <ProtectedRoute>
                <AddCraft/>
            </ProtectedRoute>
        },
        {
            path: "/details/:id",
            element: <ProtectedRoute>
                        <Details/>
                    </ProtectedRoute>,
            loader:({params})=>fetch(`http://localhost:3000/details/${params.id}`)
        },
        {
            path: "/all-categories",
            element: <AllCategories/>,
        },
        {
            path: "/categories",
            element: <Categories/>,
        },
        {
            path: "/all-art-craft-item",
            element: <ArtAndCraftList/>,
        },
        {
            path: "/registration",
            element: <Register/>,
        },
        {
            path: "/login",
            element: <LogIn/>,
        },
        {
            path: "/user-profile",
            element: <ProtectedRoute>
                <UserProfile/>
            </ProtectedRoute>,
        },
        {
            path: "/my-added-craft-list",
            element: <ProtectedRoute>
                <MyArtAndCraft/>
            </ProtectedRoute>,
        },
        {
            path: "/update",
            element: <ProtectedRoute>
                <UpdateCraft/>
            </ProtectedRoute>,
        },
      ]
    },
  ]);

export default router;