import React ,{useState,useEffect}from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";

//constants
import { layoutTypes } from "../constants/layout";

// layouts
import NonAuthLayout from "../Layout/NonAuthLayout";
import VerticalLayout from "../Layout/VerticalLayout/index";
import HorizontalLayout from "../Layout/HorizontalLayout/index";
import { AuthProtected } from "./AuthProtected";
import { AuthProtectedSuperadmin } from "./AuthProtectedSuperadmin";


import { authProtectedRoutes, publicRoutes, superadminRoutes } from "./routes";
import SuperadminLayout from "../Layout/SuperadminLayout/SuperadminLayout";


const getLayout = (layoutType) => {
  let Layout = VerticalLayout;
  switch (layoutType) {
    case layoutTypes.VERTICAL:
      Layout = VerticalLayout;
      break;
    case layoutTypes.HORIZONTAL:
      Layout = HorizontalLayout;
      break;
    default:
      break;
  }
  return Layout;
};

/*
const ROLES = {
  'Superadmin': 2001,
  'Admin': 1984,
  'Staff': 5150,
  'Examinator': 5151,
  'User': 1234,
}
*/

const Index = (props) => {

  const dispatch = useDispatch();

  const [authRole, setauthRole] = useState("");


  //console.log("Index Route ",localStorage );
  useEffect(() => {
    if (localStorage.getItem("authRole")) {
      const obj = JSON.parse(localStorage.getItem("authRole"));
      setauthRole(obj);
      //console.log("Index obj", obj);

    }else{
      setauthRole("login");
    }
  }, [dispatch]);

  const { layoutType } = useSelector((state) => ({
    layoutType: state.Layout.layoutType,
    //userRole:state.login.userRole!==null?state.login.userRole: localStorage.getItem("authRole")
    //userRole: state.login.userRole, // Assuming you have user role in your auth state
  }));

 // console.log("Index Props", props);

  // const [userRole, setUserRole] = React.useState("admin");
  // const { userRole,setUserRole } = useSelector((state) => state.login);
  const defaultScreens = {
    login: "/login",
    superadmin: "/superadmin",
    admin: "/dashboard",
    teacher: "/dashboard",
    staff: "/dashboard",
    user: "/dashboard",
  };




  ///console.log("Index userRole", authRole);
  // console.log("Index userRole", userRole);

  const Layout = getLayout(layoutType);

  const getDefaultScreen = (role) => {
    return defaultScreens[role] || "/";
  };

  return (
    <Routes>
      {/* Public Routes */}
      {publicRoutes.map((route, idx) => (
        <Route
          path={route.path}
          element={<NonAuthLayout>{route.component}</NonAuthLayout>}
          key={idx}
        />
      ))}

      {/* Superadmin Routes */}
      {superadminRoutes.map((route, idx) => (
        <Route
          path={route.path}
          element={
            <AuthProtectedSuperadmin>
              <SuperadminLayout>{route.component}</SuperadminLayout>
            </AuthProtectedSuperadmin>
          }
          key={idx}
          exact={true}
        />
      ))}

      {/* Auth Protected Routes */}
      {authProtectedRoutes.map((route, idx) => (
        <Route
          path={route.path}
          element={
            <AuthProtected>
              <Layout>{route.component}</Layout>
            </AuthProtected>
          }
          key={idx}
          exact={true}
        />
      ))}

      {/* Redirect based on role */}
      <Route
        path="/"
        element={<Navigate to={getDefaultScreen(authRole)} replace />}
      />
    </Routes>
  );
};

export default Index;
