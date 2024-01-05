import React from "react";
import { Routes, Route } from "react-router-dom";

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

  const { layoutType } = useSelector((state) => ({
    layoutType: state.Layout.layoutType,
  }));

  const Layout = getLayout(layoutType);

  return (
    <Routes>
      <Route>
        {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <NonAuthLayout>
                  {route.component}
              </NonAuthLayout>
          }
            key={idx}
            exact={true}
          />
        ))}
      </Route>

      <Route  >
        {superadminRoutes.map((route,idx)=>(
          <Route
          path={route.path}
          element={
            <AuthProtectedSuperadmin>
                <SuperadminLayout>{route.component}</SuperadminLayout>
            </AuthProtectedSuperadmin>} 
            key={idx}
            exact={true}
            />
        ))}
      </Route>

      <Route>
          {authProtectedRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <AuthProtected>
                    <Layout>{route.component}</Layout>
                </AuthProtected>}
              key={idx}
              exact={true}
            />
          ))}
      </Route>
    </Routes>
  );
};

export default Index;
