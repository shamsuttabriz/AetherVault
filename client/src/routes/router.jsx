import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllArtifacts from "../pages/AllArtifacts";
import AddArtifacts from "../pages/AddArtifacts";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Profile from "../pages/Profile";
import MyArtifacts from "../pages/MyArtifacts";
import LikedArtifacts from "../pages/LikedArtifacts";


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
        element: <Registration/>,
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
