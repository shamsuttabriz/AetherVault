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
import axios from "axios";
import Loading from "../components/Loading";
import ArtifactsDetails from "../pages/ArtifactsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Loading />,
        loader: () => axios(`${import.meta.env.VITE_API_URL}/artifacts`),
        Component: Home,
      },
      {
        path: "all-artifacts",
        hydrateFallbackElement: <Loading />,
        loader: () => axios(`${import.meta.env.VITE_API_URL}/artifacts`),
        Component: AllArtifacts,
      },
      {
        path: "artifact-detail",
        element: (
          <PrivateRoute>
            <ArtifactsDetails />
          </PrivateRoute>
        ),
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
