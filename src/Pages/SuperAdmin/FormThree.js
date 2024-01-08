import React, {useState} from 'react';
import { Row, Col, Button,Form} from 'reactstrap';
import illustration from '../../assets/images/illutration/globe_learning.png';
const FormThree = ({ prev, onSubmit,create_progress }) => {


    const [agree, setagree] = useState(false);


    return (
        <Row>
            <Col md={6}>
                <Form className=' py-3 px-1 text-white'
                onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit(e);
                }}
                >
                    <Row className="flex-column">
                        <Col lg={12}>
                            <p>You have reached the last step to create a school management system , This will create a enviroment and data space dedicated to this organisation only.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={10}>
                            <div className="my-5">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="floatingCheck"
                                        onClick={() => setagree(!agree)}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="floatingCheck"
                                    >
                                        By Clicking on this checkbox, you agree to our terms and conditions.
                                    </label>
                                </div>
                            </div>
                        </Col>
                    </Row>

                



                    <div>
                        <button onClick={prev} className="btn btn-secondary w-md" style={{ marginRight: "36px" }}>
                            Prev
                        </button>
                        <Button color={"primary"} className="btn btn-primary w-md" disabled={!agree}>
                            Finish
                        </Button> 
                         {create_progress===1 &&  <span></span>}
                                {create_progress === 2 && <span className="spin" style={{width:"42px",height:"42px",float:"right",paddingLeft:"7px"}}><i className='mdi-autorenew mdi spin' style={{fontSize:"28px"}}></i></span>}
                                {create_progress===3 &&  <i className='mdi mdi-progress-check font-size-20'></i>}
                    </div>
                </Form>
            </Col>
            <Col md={3} lg={4} className="d-none d-md-block mt-auto">
                <img src={illustration} className="w-200" alt='side' />
            </Col>
        </Row>
    );
}

export default FormThree;
