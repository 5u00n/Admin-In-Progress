import React from "react";
import { Navigate, Route,useNavigate } from "react-router-dom";

import { useProfile } from "../Hooks/UserHooks";


const AuthProtectedSuperadmin = (props) => {

    const { userProfile, userRole,loading } = useProfile();

    const navigate = useNavigate();


  
  /*
    redirect is un-super-auth access protected routes via url
    */

  if (!userProfile && loading) {
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
  } else if (!userProfile || userRole !== 'superadmin') {
    // Redirect to the admin dashboard or a "not authorized" page
    navigate('/dashboard');
    return null;
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
