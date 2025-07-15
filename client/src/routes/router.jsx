import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllArtifacts from "../pages/AllArtifacts";
import AddArtifacts from "../pages/AddArtifacts";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import MyArtifacts from "../pages/MyArtifacts";
import LikedArtifacts from "../pages/LikedArtifacts";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "all-artifacts",
        Component: AllArtifacts,
      },
      {
        path: "add-artifacts",
        element: (
          <PrivateRoute>
            <AddArtifacts />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "my-artifacts",
        element: (
          <PrivateRoute>
            <MyArtifacts />
          </PrivateRoute>
        ),
      },
      {
        path: "liked-artifacts",
        element: (
          <PrivateRoute>
            <LikedArtifacts />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
