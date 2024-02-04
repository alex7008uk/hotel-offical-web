import { createBrowserRouter } from "react-router-dom";

import { Nav } from "../components/nav";
import { PageIntro } from "../pages/introduction/indexIntro";
import { PageRoom } from "../pages/roomType/indexRoom";
import { PageServices } from "../pages/services/indexServices";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "/hotel-offical-web",
        element: <PageIntro />,
      },
      {
        path: "/roomType",
        element: <PageRoom />,
      },
      {
        path: "/services",
        element: <PageServices />,
      },
    ],
  },
]);
