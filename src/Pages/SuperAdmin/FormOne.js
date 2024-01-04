import React from 'react';
import {  Row, Col } from'reactstrap';
import illustration from '../../assets/images/illutration/Studgraduation_ceremony.png';
const FormOne = ({ next }) => {
    return (
        <Row>
                        <Col md={6}>
                            <form className='mt-3 py-5 px-3 text-white'>
                            <Row className="flex-column">
                                    <Col lg={8}>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control text-white"
                                                id="floatingFirstnameInput"
                                                placeholder="School Name"
                                                required
                                                style={{
                                                    background: "rgba(255,255,255,0.1)",
                                                    border: "1px solid rgba(255,255,255,0.1)",
                                                    boxShadow: "0 0 0 0.2rem rgba(255,255,255,0.1)",
                                                }}
                                            />
                                            <label htmlFor="floatingFirstnameInput">
                                                School Name
                                            </label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={10}>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control text-white"
                                                id="floatingLastnameInput"
                                                placeholder="School Address"
                                                required
                                                style={{
                                                    background: "rgba(255,255,255,0.1)",
                                                    border: "1px solid rgba(255,255,255,0.1)",
                                                    boxShadow: "0 0 0 0.2rem rgba(255,255,255,0.1)",
                                                }}
                                            />
                                            <label htmlFor="floatingLastnameInput">
                                                School Address
                                            </label>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={5} md={6}>
                                        <div className="form-floating mb-3">
                                            <select
                                                required
                                                style={{
                                                    background: "rgba(255,255,255,0.1)",
                                                    border: "1px solid rgba(255,255,255,0.1)",
                                                    boxShadow: "0 0 0 0.2rem rgba(255,255,255,0.1)",
                                                }}
                                                className='text-white form-select'
                                                id="floatingSelectGrid"
                                                aria-label="Floating label select example"
                                            >
                                                <option defaultValue>
                                                    Select Country
                                                </option>
                                                <option className='text-black' defaultValue="1">One</option>
                                                <option className='text-black' defaultValue="2">Two</option>
                                                <option className='text-black' defaultValue="3">Three</option>
                                            </select>
                                            <label htmlFor="floatingSelectGrid">
                                                Country
                                            </label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} md={6}>
                                        <div className="form-floating mb-3">
                                            <select
                                                className='text-white form-select'
                                                required
                                                style={{

                                                    backgroundColor: "rgba(255,255,255,0.1)",
                                                    background: "rgba(255,255,255,0.1)",
                                                    border: "1px solid rgba(255,255,255,0.1)",
                                                    boxShadow: "0 0 0 0.2rem rgba(255,255,255,0.1)",
                                                }}

                                                id="floatingSelectGrid"
                                                aria-label="Floating label select example"
                                            >
                                                <option defaultValue className='text-black' >
                                                    select state
                                                </option>
                                                <option className='text-black' defaultValue="1" >One</option>
                                                <option className='text-black' defaultValue="2">Two</option>
                                                <option className='text-black' defaultValue="3">Three</option>
                                            </select>
                                            <label htmlFor="floatingSelectGrid">
                                                State
                                            </label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='mb-5'>
                                    <Col md={5}>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control text-white"
                                                id="floatingLastnameInput"
                                                placeholder="Pin Code"
                                                required
                                                style={{
                                                    background: "rgba(255,255,255,0.1)",
                                                    border: "1px solid rgba(255,255,255,0.1)",
                                                    boxShadow: "0 0 0 0.2rem rgba(255,255,255,0.1)",
                                                }}
                                            />
                                            <label htmlFor="floatingLastnameInput">
                                                Pin Code
                                            </label>
                                        </div>
                                    </Col>
                                </Row>



                                <div>
                                    <button onClick={next}  className="btn btn-primary w-md">
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

export default FormOne;
