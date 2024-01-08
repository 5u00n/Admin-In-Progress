import React,{useState} from "react";
import UsePanel from "./UserPanel";
import OrderStatus from "./OrderStatus";
import Notifications from "./Notifications";
import SocialSource from "./SocialSource";
import OverView from "./OverView";
import RevenueByLocation from "./RevenueByLocation";
import LatestTransation from "./LatestTransation";
import { getFirebaseBackend } from "../../helpers/firebase_helper";

import { Row, Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { useEffect } from "react";

const Dashboard = () => {

  const [selectedSchool, setSelectedSchool] = useState(null);

  const [schoolData, setSchoolData] = React.useState([]);

  const firebaseBackEnd = getFirebaseBackend();


  useEffect(() => {

    document.body.className = "bg-pattern-light";
    document.title = `Dashboard | ${schoolData.school_name} `;

    // Retrieve the selected school data from localStorage
    const schoolLocalData = localStorage.getItem("selectedSchool");
    if (schoolLocalData) {
      setSelectedSchool(JSON.parse(schoolLocalData));
    }

    const schoolRef = firebaseBackEnd.fetchDataRef("schools/"+selectedSchool);
    const onSchoolsDataChange = schoolRef.on('value', (snapshot) => {
        const schoolsData = snapshot.val();
        setSchoolData(schoolsData);
    });

    // Clean up the listener when the component unmounts
    return () => schoolRef.off('value', onSchoolsDataChange);
}, [firebaseBackEnd, schoolData, selectedSchool]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title={schoolData.school_name} breadcrumbItem="Dashboard"  />


          
          {/* User Panel Charts 
          <UsePanel />

          <Row>
            {/* Overview Chart 
            <OverView />
            {/* Social Source Chart 
            <SocialSource />
          </Row>

          <Row>
            {/* Order Stats 
            <OrderStatus />
            {/* Notifications 
            <Notifications />
            {/* Revenue by Location Vector Map 
            <RevenueByLocation />
          </Row>

          {/* Latest Transaction Table 
          <LatestTransation />
          */}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
