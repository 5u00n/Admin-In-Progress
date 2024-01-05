import { useState } from "react";
import { getLoggedinUser, getUserRole } from "../helpers/api_helper";
//import { get } from "lodash";

const useProfile = () => {
  const userProfileSession = getLoggedinUser();
  const [loading] = useState(userProfileSession ? false : true);
  const [userProfile] = useState(
    userProfileSession ? userProfileSession : null
  );

  const usersRoleS = getUserRole();
  const [usersRole] = useState(usersRoleS ? usersRoleS : "guest");
  //console.log('From Hooks File UserProfile ', userProfileSession);
  //console.log('From Hooks File UserRole ', usersRoleS);


  return { userProfile, usersRole, loading };
};

export { useProfile };
