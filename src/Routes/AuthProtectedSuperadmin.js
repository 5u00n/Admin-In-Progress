import React from "react";
import { Navigate, Route } from "react-router-dom";

import { useProfile } from "../Hooks/UserHooks";


const AuthProtectedSuperadmin = (props) => {

    const { userProfile, loading } = useProfile();

  /*
    redirect is un-auth access protected routes via url
    */

  if (!userProfile && loading) {
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }

  return <>{props.children}</>;
};
 
const AccessRouteSuperadmin = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props => {
          return (<> <Component {...props} /> </>);
        }}
      />
    );
  };
export  {AuthProtectedSuperadmin,AccessRouteSuperadmin};
