import React, { useEffect } from "react";

//import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Container, Row, Card, Col, CardBody, CardTitle, CardSubtitle, CardImg } from "reactstrap";


import { fetchDataRequest } from "../../store/database/actions";

const SuperAdmin = ({ data, loading, error, fetchDataRequest }) => {

    


    useEffect(() => {
        document.body.className = "bg-pattern";
        // remove classname when component will unmount

        // Dispatch the action to fetch data when the component mounts
        fetchDataRequest();

    }, [fetchDataRequest]);
    var schools = [];
    if (loading) {
       // console.log("Loading...");
        //return <p>Loading...</p>;
    } 
    
    if (data != null) {

        schools = data.schools;
       // console.log("School :", typeof schools);

       

        //console.log("tifOptions :", tifOptions);
    }

    if (error) {
        //return <p>Error: {error}</p>;
        console.log("Error:", error);
    }
    //console.log("from Addmission page " + data);


    // const id = data.id;
    //const schoolLogo = data.school_logo;



    return (

        <React.Fragment>
            <div className="bg-overlay"></div>
            <div className="account-page my-5 pt-5">
                <Container>

                    <Row>
                        <Col className='mt-4 mb-4' lg={8} >
                            <h1 className="display-4 mt-2  text-white" >Welcome to Supeadmin Panel of EduSoftHub</h1>

                        </Col>
                    </Row>
                    <Row>
                        <Col className='mb-4'>
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur. Quisque elit viverra velit vel amet.</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="col-sm-auto" >
                            <Card className="text-center" style={{
                                minHeight: '19rem',
                                minWidth: '19rem',
                                maxWidth: '19rem',
                            }}>

                                <Link to="/add-school-1" className="card-link" style={{
                                    width: '100%', height: '100%', padding: '6rem 5rem'
                                }}>

                                    <h2 ><b><i className="mdi mdi-plus color-white"></i> <br></br>Add New School</b></h2>
                                </Link>
                            </Card>
                        </Col>

                        {Object.keys(schools).map(key => (
                            <Col className="col-sm-auto" key={key}>
                                <Link to={ "/"+schools[key].school_short} >
                                <Card style={{
                                    minHeight: '19rem',
                                    minWidth: '19rem',
                                    maxWidth: '25rem',
                                }}>
                                    <CardBody className=" center bg-white bg-light" style={{
                                        height: '12rem',
                                        padding: '1rem',}}>
                                    <CardImg className="img-fluid center bg-white bg-light" src={schools[key].school_logo} style={{ 
                                        height: '100%',
                                        alignSelf: 'center',
                                        objectFit: 'scale-down',
                                    }} />
                                    </CardBody>
                                    <CardBody>
                                        <CardTitle className="mt-0" tag="h2">{schools[key].school_name}</CardTitle>
                                        <CardSubtitle className="font-14 text-muted mb-2">
                                            {schools[key].school_address}</CardSubtitle>
                                        <Link to="#" className="card-link">
                                            <span className="text-white"><i className="mdi mdi-pencil" aria-hidden="true"></i>Edit</span>
                                        </Link>
                                        <Link to="#" className="card-link">
                                            <span className="text-danger "><i className="mdi mdi-delete" aria-hidden="true"></i> Delete</span>
                                        </Link>
                                    </CardBody>
                                </Card>
                                </Link>
                            </Col>
                        ))}

                    </Row>
                </Container>
            </div>
        </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(SuperAdmin);
