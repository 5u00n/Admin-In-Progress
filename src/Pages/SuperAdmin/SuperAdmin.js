import React, { useEffect } from "react";

//import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";

import { Container, Row, Card, Col, CardBody, CardTitle, CardSubtitle, CardImg } from "reactstrap";

import { getFirebaseBackend } from "../../helpers/firebase_helper";

const SuperAdmin = (props) => {


    const firebaseBackEnd = getFirebaseBackend();

    const [schools, setSchools] = React.useState([]);


    useEffect(() => {
        document.body.className = "bg-pattern";
        // remove classname when component will unmount fetchDataRef

        const schoolsRef = firebaseBackEnd.fetchDataRef("schools");
        const onSchoolsDataChange = schoolsRef.on('value', (snapshot) => {
            const schoolsData = snapshot.val();
            setSchools(schoolsData);
        });

        // Clean up the listener when the component unmounts
        return () => schoolsRef.off('value', onSchoolsDataChange);
    }, [firebaseBackEnd]);

    const handleSchoolSelect = (schoolData) => {
        localStorage.setItem("selectedSchool", JSON.stringify(schoolData.id));
        // Navigate to the dashboard or perform other actions as needed
    };

    return (

        <React.Fragment>
            <div className="bg-overlay"></div>
            <div className="account-page pt-2">
                <Container fluid>

                    <Row>
                        <Col className='mt-4 mb-4 mx-5' lg={8} >
                            <h1 className="display-4 mt-2  text-white" >Welcome to Superdmin Panel of EduSoftHub</h1>

                        </Col>
                    </Row>
                    <Row className="mx-5">
                        <Col className='mb-4'>
                            <p className="text-white">Create new school system enviroment and manage them.</p>
                        </Col>
                    </Row>

                    <Row className="mx-5">
                        <Col className="col-lg-auto col-md-auto col-sm-6" >
                            <Card className="text-center" style={{
                                minHeight: '12rem',
                                minWidth: '12rem',
                                maxWidth: '19rem',
                            }}>

                                <Link to="/superadmin/add-school-1" className="card-link" style={{
                                    width: '100%', height: '100%', padding: '3.5rem 2rem'
                                }}>

                                    <h5><b><i className="mdi mdi-plus color-white"></i> <br></br>Add New School</b></h5>
                                </Link>
                            </Card>
                        </Col>

                        {Object.keys(schools).map(key => (
                            <Col className="col-lg-auto col-md-auto col-sm-6" key={key}>
                                <Link to={"/" + schools[key].school_short + "/dashboard"} >
                                    <Card onClick={() => handleSchoolSelect(schools[key])} style={{
                                        minHeight: '12rem',
                                        minWidth: '12rem',
                                        maxWidth: '19rem',
                                    }}>
                                        <CardBody className=" center" style={{
                                            height: '6rem',
                                            padding: '0'
                                        }}>
                                            <Card className="bg-white" style={{
                                                height: '7rem',
                                                padding: '1rem',
                                            }}>
                                                <CardImg className="img-fluid center " src={schools[key].school_logo} style={{
                                                    height: '100%',
                                                    alignSelf: 'center',
                                                    objectFit: 'scale-down',
                                                }} />
                                            </Card>
                                        </CardBody>
                                        <CardBody className="m-0 py-1 mt-1">
                                            <CardTitle className="mt-0 font-size-11 text-black" >{schools[key].school_name}</CardTitle>
                                            <CardSubtitle className="font-size-10 text-white  ">
                                                {schools[key].school_address.split(',').pop().trim() + ", " + schools[key].state}</CardSubtitle>
                                            <span to="#" className="card-link">
                                                <span className="text-white font-size-11 "><i className="mdi mdi-pencil" aria-hidden="true"></i>Edit</span>
                                            </span>
                                            <span className="card-link">
                                                <span className="text-danger font-size-11"><i className="mdi mdi-delete" aria-hidden="true"></i> Delete</span>
                                            </span>
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

export default (SuperAdmin);
