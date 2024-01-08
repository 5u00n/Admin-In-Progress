import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import withRouter from "../../components/Common/withRouter";

import {
  changeLayout,
  changeSidebarTheme,
  changeSidebarType,
  changeTopbarTheme,
  changeLayoutWidth,
  showRightSidebarAction
} from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

// import Components
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import RightSidebar from '../../components/Common/RightSideBar';

const Layout = (props) => {


  const pathname = props.router.location.pathname.split("/")[1];

  //console.log("pathname", pathname);
  const dispatch = useDispatch();

  const {
    layoutWidth,
    leftSideBarType,
    topbarTheme,
    showRightSidebar,
    leftSideBarTheme,
  } = useSelector(state => ({
    leftSideBarType: state.Layout.leftSideBarType,
    layoutWidth: state.Layout.layoutWidth,
    topbarTheme: state.Layout.topbarTheme,
    showRightSidebar: state.Layout.showRightSidebar,
    leftSideBarTheme: state.Layout.leftSideBarTheme,
  }));

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const toggleMenuCallback = () => {
    if (leftSideBarType === "default") {
      dispatch(changeSidebarType("condensed", isMobile));
    } else if (leftSideBarType === "condensed") {
      dispatch(changeSidebarType("default", isMobile));
    }
  };



  /*
  document title
  */
  useEffect(() => {
    const title = props.router.location.pathname;
    let currentage = title.charAt(1).toUpperCase() + title.slice(2);

    document.title = currentage + " | Edusofthub - Superadmin ";
  }, [props.router.location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //hides right sidebar on body click
  const hideRightbar = useCallback(
    (event) => {
      var rightbar = document.getElementById("right-bar");
      //if clicked in inside right bar, then do nothing
      if (rightbar && rightbar.contains(event.target)) {
        return;
      } else {
        //if clicked in outside of rightbar then fire action for hide rightbar
        dispatch(showRightSidebarAction(false));
      }
    },
    [dispatch]
  );

  /*
  layout settings
  */

  
  useEffect(() => {
    //init body click event fot toggle rightbar
    document.body.addEventListener("click", hideRightbar, true);
  }, [hideRightbar]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(changeLayout("vertical"));
  }, [dispatch]);

  useEffect(() => {
    if (leftSideBarTheme) {
      dispatch(changeSidebarTheme(leftSideBarTheme));
    }
  }, [leftSideBarTheme, dispatch]);

  useEffect(() => {
    if (layoutWidth) {
      dispatch(changeLayoutWidth(layoutWidth));
    }
  }, [layoutWidth, dispatch]);

  useEffect(() => {
    if (leftSideBarType) {
      dispatch(changeSidebarType(leftSideBarType));
    }
  }, [leftSideBarType, dispatch]);

  useEffect(() => {
    if (topbarTheme) {
      dispatch(changeTopbarTheme(topbarTheme));
    }
  }, [topbarTheme, dispatch]);
  return (
    <React.Fragment>

      <div id="layout-wrapper">
        <Header toggleMenuCallback={toggleMenuCallback} />
        {pathname !== "superadmin"  ? <Sidebar
          theme={leftSideBarTheme}
          type={leftSideBarType}
          isMobile={isMobile}
        /> :  null}
        <div className={pathname === "superadmin" ? pathname === "/add-school-1" ? "py-5" : "py-5" : "main-content"}>{props.children}</div>
        <Footer />
      </div>

      {showRightSidebar ? <RightSidebar /> : null}
    </React.Fragment>
  );
};

Layout.propTypes = {
  changeLayout: PropTypes.func,
  changeLayoutWidth: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  children: PropTypes.object,
  layoutWidth: PropTypes.any,
  location: PropTypes.object,
  showRightSidebar: PropTypes.any,
  topbarTheme: PropTypes.any,
};

export default withRouter(Layout);
