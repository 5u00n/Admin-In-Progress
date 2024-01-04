import React, { useEffect } from "react";

//import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";
import { Container, Row, Card, Col, CardBody, CardTitle, CardSubtitle, CardImg } from "reactstrap";

import img2 from "../../assets/images/small/img-2.jpg";

const SuperAdmin = () => {

    useEffect(() => {
        document.body.className = "bg-pattern";
        // remove classname when component will unmount
        return function cleanup() {
            document.body.className = "";
        };
    });

    return (

        <React.Fragment>
            <div className="bg-overlay"></div>
            <div className="page-content mt-0">
                <Container fluid>

                    <Row>
                        <Col className='mt-4 mb-4' lg={8} >
                            <h1 className="display-4 mt-2  text-white" >Welcome to Supeadmin Panel of Eduhubsoft</h1>

                        </Col>
                    </Row>
                    <Row>
                        <Col className='mb-4'> 
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur. Quisque elit viverra velit vel amet.</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={14} sm={14} md={6} lg={4}  xl={4} mg={6} >
                            <Card className="text-center" style={{
                                minHeight: '19rem',
                                minWidth: '19rem',
                                
                            }}>

                                <Link to="#" className="card-link" style={{
                                    width: '100%', height: '100%', padding: '6rem 5rem'
                                }}>

                                    <h2 ><b><i className="mdi mdi-plus color-white"></i> <br></br>Add New School</b></h2>
                                </Link>
                            </Card>
                        </Col>

                        <Col xs={14} sm={14} md={6} lg={4}  xl={4} mg={6}>
                            <Card style={{
                                minHeight: '19rem',
                                minWidth: '19rem',
                            }}>
                                <CardImg className="img-fluid mh-100" src={img2} alt="Upzet" style={{
                                    height: '12rem'
                                }} />
                                <CardBody>
                                    <CardTitle className="mt-0" tag="h2">Card title</CardTitle>
                                    <CardSubtitle className="font-14 text-muted mb-2">
                                        Support card subtitle
                                    </CardSubtitle>
                                    <Link to="#" className="card-link">
                                        <span className="text-white"><i className="mdi mdi-pencil" aria-hidden="true"></i>Edit</span>
                                    </Link>
                                    <Link to="#" className="card-link">
                                    <span className="text-danger"><i className="mdi mdi-delete" aria-hidden="true"></i> Delete</span>
                                    </Link>
                                </CardBody>
                            </Card>
                        </Col>


                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default SuperAdmin;
