import React from 'react';
import { Row, Col, Button} from 'reactstrap';
import illustration from '../../assets/images/illutration/globe_learning.png';
const FormThree = ({ prev, finish,create_school,create_progress }) => {

    console.log(create_progress);
    return (
        <Row>
            <Col md={6}>
                <form className='my-5 py-5 px-3 text-white'>
                    <Row className="flex-column">
                        <Col lg={12}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus possimus commodi, quae at facilis recusandae fugit, asperiores vero hic voluptates similique beatae tenetur sapiente itaque eum reprehenderit, inventore ducimus soluta.</p>
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
                        <Button color={"primary"} onClick={create_school} className="btn btn-primary w-md">
                            Finish
                        </Button> 
                         {create_progress===1 &&  <span></span>}
                                {create_progress === 2 && <span className="spin" style={{width:"42px",height:"42px",float:"right",paddingLeft:"7px"}}><i className='mdi-autorenew mdi spin' style={{fontSize:"28px"}}></i></span>}
                                {create_progress===3 &&  <i className='mdi mdi-progress-check font-size-20'></i>}
                    </div>
                </form>
            </Col>
            <Col md={3} lg={4} className="d-none d-md-block mt-auto">
                <img src={illustration} className="w-200" alt='side' />
            </Col>
        </Row>
    );
}

export default FormThree;
