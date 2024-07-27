import React from "react";


import { Navigate, Route } from "react-router-dom";
import { useProfile } from "../Hooks/UserHooks";

const AuthProtected = ({ children }) => {
 const { isAuthenticated } = useProfile();

 if (!isAuthenticated) {
   return <Navigate to="/login" />;
 }

 return <>{children}</>;

}

const AccessRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export { AuthProtected, AccessRoute };
