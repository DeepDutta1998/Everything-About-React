import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Component {...props} />;
        if (!auth)
          return (
            <BrowserRouter to={{ path: "/", state: { from: props.location } }} />
          );
      }}
    />
  );
};

export default ProtectedRoute;
