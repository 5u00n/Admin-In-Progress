import React from "react";
import UsePanel from "./UserPanel";
import OrderStatus from "./OrderStatus";
import Notifications from "./Notifications";
import SocialSource from "./SocialSource";
import OverView from "./OverView";
import RevenueByLocation from "./RevenueByLocation";
import LatestTransation from "./LatestTransation";

import { Row, Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { useEffect } from "react";

const Dashboard = () => {
  document.title = "Dashboard | Edusofthub ";


  useEffect(() => {
   /* if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"));
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        setemail(obj.email);
        setname(obj.name);
        setidx(obj.idx);
      } else {
        setemail(obj.email);
        setname(obj.name);
        setidx(obj.idx);
      }
    }*/
      document.body.className = "bg-pattern";
  }, []);
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Edusofthub" breadcrumbItem="Dashboard" />
          {/* User Panel Charts */}
          <UsePanel />

          <Row>
            {/* Overview Chart */}
            <OverView />
            {/* Social Source Chart */}
            <SocialSource />
          </Row>

          <Row>
            {/* Order Stats */}
            <OrderStatus />
            {/* Notifications */}
            <Notifications />
            {/* Revenue by Location Vector Map */}
            <RevenueByLocation />
          </Row>

          {/* Latest Transaction Table */}
          <LatestTransation />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
