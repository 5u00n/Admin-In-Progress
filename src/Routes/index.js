import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

//constants
import { layoutTypes } from "../constants/layout";

// layouts
import NonAuthLayout from "../Layout/NonAuthLayout";
import VerticalLayout from "../Layout/VerticalLayout/index";
import HorizontalLayout from "../Layout/HorizontalLayout/index";
import { AuthProtected } from "./AuthProtected";
import { AuthProtectedSuperadmin } from "./AuthProtectedSuperadmin";


import { authProtectedRoutes, publicRoutes,superadminRoutes } from "./routes";
import SuperadminLayout from "../Layout/SuperadminLayout/SuperadminLayout";
import Staff from "../Pages/Users/OtherStaff";

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

const Index = () => {
  const { layoutType, userRole } = useSelector((state) => ({
    layoutType: state.Layout.layoutType,
    userRole: state.login.userRole, // Assuming you have user role in your auth state
  }));

  
  const Layout = getLayout(layoutType);

  // Define default screens for different roles
  const defaultScreens = {
    superadmin: "/superadmin",
    admin: "/dashboard",
    teacher: "/dashboard",
    staff: "/dashboard",
    user: "/dashboard",
  };

  // Redirect to the default screen based on the user's role
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
        />
      ))}

      {/* Redirect based on role */}
      <Route
        path="/"
        element={<Navigate to={getDefaultScreen(userRole)} replace />}
      />
    </Routes>
  );
};

export default Index;
