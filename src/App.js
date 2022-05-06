import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import routes from "./routes";
import { useSelector } from "react-redux";

import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

const App = (props) => {
  const user = useSelector((state) => state.user[0]);
  const location = useLocation();

  if (!user && location.pathname !== "/") {
    return <Navigate to="/" replace />;
  }

  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        );
      })}{" "}
    </Routes>
  );
};
export default App;
