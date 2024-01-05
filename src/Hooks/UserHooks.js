import { useState } from "react";
import { getLoggedinUser, getUserRole } from "../helpers/api_helper";
import { get } from "lodash";

const useProfile = () => {
  const userProfileSession = getLoggedinUser();
  const [loading] = useState(userProfileSession ? false : true);
  const [userProfile] = useState(
    userProfileSession ? userProfileSession : null
  );

  const usersRoleS = getUserRole();

  //console.log("usersRoleS", usersRoleS);
  const [userRole] = useState(usersRoleS ? usersRoleS : "null");
  //console.log("usersRole", userRole);
  return { userProfile, userRole, loading };
};


export { useProfile };
