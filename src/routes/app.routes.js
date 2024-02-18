import { lazy } from "react";

export const AppRoutes = [

  // {
  //   path: "/",
  //   component: <h2>main page</h2>
  // },

  // {
  //   path: "/not-found",
  //   component: <h2>not found</h2>
  // },

  {
    path: "/example1/",
    component: lazy(() => import("../pages/example1/example1"))
  },

  {
    path: "/example2/",
    component: lazy(() => import("../pages/example2/example2"))
  },
]