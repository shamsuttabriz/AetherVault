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
        path: 'all-artifacts',
        Component: AllArtifacts,
      },
      {
        path: 'add-artifacts',
        element: <AddArtifacts/>,
      },
      {
        path: 'login',
        element: <Login/>,
      },
      {
        path: 'register',
        element: <Register/>,
      },
      {
        path: 'profile',
        element: <Profile/>
      },
      {
        path: 'my-artifacts',
        element: <MyArtifacts/>,
      },
      {
        path: 'liked-artifacts',
        element: <LikedArtifacts/>,
      }
    ],
  },
]);

export default router;
