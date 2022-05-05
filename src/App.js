import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

const App = () => (
  <BrowserRouter>
    <Routes>
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
  </BrowserRouter>
);

export default App;
