import React from 'react';
import { Row, Col, Button} from 'reactstrap';
import illustration from '../../assets/images/illutration/globe_learning.png';
const FormThree = ({ prev, finish,create_school,create_progress }) => {
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

                    <Row>
                        <Col lg={5} md={6}>
                            <div className="mb-5 py-1">
                                <Button color="primary"onClick={() => create_school()} className="btn btn-info w-md " style={{ marginRight: "36px" }}>
                                    Create
                                </Button>

                                {create_progress==="none" &&  <div></div>}
                                {create_progress==="loding" &&   <i className='mdi-autorenew mdi font-size-24'></i>}
                                {create_progress==="finished" &&  <i className='mdi mdi-progress-check font-size-24'></i>}
                               
                                
                            </div>
                        </Col>
                    </Row>



                    <div>
                        <button onClick={prev} className="btn btn-secondary w-md" style={{ marginRight: "36px" }}>
                            Prev
                        </button>
                        <button onClick={finish} className="btn btn-primary w-md">
                            Next
                        </button>
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
