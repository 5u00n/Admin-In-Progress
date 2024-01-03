import React, { useEffect } from 'react';
import {
  Col, Container, Row
} from 'reactstrap';
import Breadcrumbs from "../../../components/Common/Breadcrumb";
//import SimpleBar from 'simplebar-react';
//import { Link } from 'react-router-dom';
//import Dropzone from "react-dropzone"
//import List from 'list.js';

//import Select from 'react-select';

import { fetchDataRequest } from "../../../store/database/actions";

import { connect } from "react-redux";



const Addminssion = ({ data, loading, error, fetchDataRequest }) => {
  document.title = "Addmission | Edusofthub - React Admin & Dashboard Template";

  //console.log('Component Props:', { data, loading, error });



  useEffect(() => {
    // Dispatch the action to fetch data when the component mounts
    fetchDataRequest("schools/001/school_name");



  }, [fetchDataRequest]);

  if (loading) {
    console.log("Loading...");
    //return <p>Loading...</p>;
  }

  if (error) {
    //return <p>Error: {error}</p>;
    console.log("Error:", error);
  }
  //console.log("from Addmission page " + data);


 // const id = data.id;
  //const schoolLogo = data.school_logo;
  var schoolName= "Edusofthub";
  if(data!=null && data!==Array){
    schoolName= data;//.school_name;
  }
   
 // const schoolShort = data.school_short;


  return (

    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title={schoolName} breadcrumbItem="Users" breadcrumbSubItem="Addmission" />
        </Container>

        <Row>
          <Col lg={12}>
            <div>
              <h1>
              </h1>
            </div>
          </Col>
        </Row>
      </div></React.Fragment>
  );
};

const mapStateToProps = (state) => {
  //console.log('Redux State:', state); // Log the entire Redux state
  //console.log('Mapped Data:', state.database.data); // Log the specific data you are interested in

  return {
    data: state.database.data,
    loading: state.database.loading,
    error: state.database.error,
  };
};

const mapDispatchToProps = {
  fetchDataRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Addminssion);


