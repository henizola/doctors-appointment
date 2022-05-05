import React from "react";
import { Navigate } from "react-router-dom";
// Layout Types
import { DefaultLayout } from "./layouts";
import ComponentsOverview from "./views/ComponentsOverview";
import DocAppointments from "./views/DocAppointments";
// Route Views
import DocOverview from "./views/DocOverview";
import DoctorSchedule from "./views/DoctorSchedule";
import Errors from "./views/Errors";
import Tables from "./views/Tables";
import DocProfile from "./views/DocProfile";

import DoctorAvailablity from "./views/DoctorAvailablity";

const routes = [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Navigate replace to="/doc/overview" />,
  },
  {
    path: "/doc/overview",
    layout: DefaultLayout,
    component: DocOverview,
  },
  {
    path: "/doc/profile",
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
