import React from "react";
// Layout Types
import { DefaultLayout } from "./layouts";
import NormalLayout from "./layouts/Normal";
import ComponentsOverview from "./views/ComponentsOverview";
import DocAppointments from "./views/DocAppointments";
// Route Views
import DocOverview from "./views/DocOverview";
import DoctorSchedule from "./views/DoctorSchedule";
import Errors from "./views/Errors";
import Tables from "./views/Tables";
import DocProfile from "./views/Profile";

import DoctorAvailablity from "./views/DoctorAvailablity";
import LogIn from "./views/Login";
import AdminOverview from "./views/AdminOverview";

const routes = [
  {
    path: "/",
    exact: true,
    layout: NormalLayout,
    component: () => <LogIn />,
  },
  {
    path: "/doc/overview",
    layout: DefaultLayout,
    component: DocOverview,
  },
  {
    path: "/admin/overview",
    layout: DefaultLayout,
    component: AdminOverview,
  },
  {
    path: "/doc/profile",
    layout: DefaultLayout,
    component: DocProfile,
  },
  {
    path: "/admin/profile",
    layout: DefaultLayout,
    component: DocProfile,
  },
  {
    path: "/doc/schedules",
    layout: DefaultLayout,
    component: DoctorSchedule,
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors,
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview,
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables,
  },
  {
    path: "/doc/appointments",
    layout: DefaultLayout,
    component: DocAppointments,
  },
  {
    path: "/doc/availablity",
    layout: DefaultLayout,
    component: DoctorAvailablity,
  },
];
export default routes;
