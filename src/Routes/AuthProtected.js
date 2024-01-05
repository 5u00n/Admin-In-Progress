import React from "react";
import { Navigate, Route } from "react-router-dom";

import { useProfile } from "../Hooks/UserHooks";

const AuthProtected = (props) => {
  const { userProfile,userRole, loading } = useProfile();

  //console.log("AuthProtected", userProfile.uid, loading);

  //console.log("Props", props);
  /*
    redirect is un-auth access protected routes via url
    */

  if (!userProfile && loading) {
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
  
} else if (!userProfile || userRole !== 'admin') {
  //if (allowedRoles && !allowedRoles.includes(userProfile.role)) {
    // Redirect to a "not authorized" page if the user's role is not allowed
    return <Navigate to="/pages-404" />;
  }

  return <>{props.children}</>;
};

const AccessRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (<> <Component {...props} /> </>);
      }}
    />
  );
};

export { AuthProtected, AccessRoute };
