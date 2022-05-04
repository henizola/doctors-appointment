import React from "react";
import { Redirect } from "react-router-dom";
// Layout Types
import { DefaultLayout } from "./layouts";
import ComponentsOverview from "./views/ComponentsOverview";
import DocAppointments from "./views/DocAppointments";
// Route Views
import DocOverview from "./views/DocOverview";
import DoctorSchedule from "./views/DoctorSchedule";
import Errors from "./views/Errors";
import Tables from "./views/Tables";
import UserProfileLite from "./views/UserProfileLite";

const routes = [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/doc-overview" />
  },
  {
    path: "/doc-overview",
    layout: DefaultLayout,
    component: DocOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/doc/schedules",
    layout: DefaultLayout,
    component: DoctorSchedule
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/doc/appointments",
    layout: DefaultLayout,
    component: DocAppointments
  }
];
export default routes;
