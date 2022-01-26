import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useMobile } from "../../hooks/useMobile";

const PrivateRoute = ({ component: Component, ...props }) => {
  const { isMobile } = useMobile();
  return (
    <Route
      {...props}
      render={(props) =>
        isMobile ? (
          <Component {...props} />
        ) : window.location.pathname === "/health" ? (
          <Redirect to='/health' />
        ) : (
          <Redirect to='/incompatible' />
        )
      }
    />
  );
};
export default PrivateRoute;
