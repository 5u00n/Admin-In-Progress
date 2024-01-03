import { combineReducers } from "redux";

// Front
import Layout from "./layout/reducer";

// Calendar
import calendar from "./calendar/reducer";

// Authentication
import forgetPassword from "./auth/forgetpwd/reducer";
import login from "./auth/login/reducer";
import profile from "./auth/profile/reducer";
import account from "./auth/register/reducer";

import databaseReducer from "./database/reducer";

const rootReducer = combineReducers({
  // public
  Layout:Layout,
  calendar:calendar,
  forgetPassword:forgetPassword,
  login:login,
  profile:profile,
  account:account,
  database: databaseReducer,
});

export default rootReducer;
