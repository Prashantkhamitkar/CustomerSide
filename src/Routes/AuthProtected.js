import React from "react";


import { Route } from "react-router-dom";

const AuthProtected = ({ children }) => {

return <>{children}</>

}

const AccessRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export { AuthProtected, AccessRoute };
