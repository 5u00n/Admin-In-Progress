import React from "react";
import { Row, Col, Form, } from 'reactstrap';
import illustration from '../../assets/images/illutration/Studgraduation_ceremony.png';

const FormOne = ({ next, formik }) => {

    //console.log("Seconf Form ", formik.values);
    const countriesWithStates = {
        USA: ["Alabama", "Alaska", "Arizona", "Arkansas", "California"],
        Canada: ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Ontario"],
        India: ["Delhi", "Karnataka", "Maharashtra", "Tamil Nadu", "West Bengal"],
        // Add more countries and their states as needed
    };

    // Check if formik is defined
    if (!formik) {
        console.log("Formik is not defined");
        // return <div>Loading...</div>; // or handle the error as appropriate
    }

    return (
        <Row>
            <Col md={6}>
                <Form className="form-horizontal  py-3 px-1 text-white "
                    onSubmit={(e) => {
                        e.preventDefault();
                        formik.handleSubmit();
                        return false;
                    }}
                    
                    autoComplete="off">
                    <Row className="flex-column">
                        <Col lg={8}>
                            {formik.touched.school_name && formik.errors.school_name ? (
                                <div className="error-message text-danger">{formik.errors.school_name}</div>
                            ) : null}
                            <div className="form-floating mb-3">
                                <input
                                    autoComplete="off"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.school_name}
                                    type="text"
                                    name="school_name"
                                    className={`form-control text-white forms-translucent ${formik.errors.school_name && formik.touched.school_name ? 'is-invalid' : ''}`}
                                    id="floatingFirstnameInput"
                                    placeholder="School Name"
                                    required
                                    
                                />
                                <label htmlFor="floatingFirstnameInput">
                                    School Name
                                </label>

                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col lg={10}>
                            {formik.touched.school_address && formik.errors.school_address ? (
                                <div className="error-message text-danger">{formik.errors.school_address}</div>
                            ) : null}
                            <div className="form-floating mb-3  ">
                                <input
                                    autoComplete="off"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.school_address}
                                    type="text"
                                    name="school_address"
                                    className={` text-white forms-translucent form-control ${formik.errors.school_address && formik.touched.school_address ? 'is-invalid' : ''}`}
                                    id="floatingLastnameInput"
                                    placeholder="School Address"
                                    required
                                    
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
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.country}
                                    name="country"

                                    required
                                    style={{
                                        background: "rgba(255,255,255,0.1)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        boxShadow: "0 0 0 0.2rem rgba(255,255,255,0.1)",
                                    }}
                                    className={`form-select text-white forms-translucent ${formik.errors.country && formik.touched.country ? 'is-invalid' : ''}`}
                                    id="floatingSelectGrid"
                                    aria-label="Floating label select example"
                                >
                                    <option defaultValue>Select Country</option>
                                    {Object.keys(countriesWithStates).map((country) => (
                                        <option key={country} value={country} className='text-black'>{country}</option>
                                    ))}
                                </select>
                                <label htmlFor="floatingSelectGrid">
                                    Country
                                </label>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6}>
                            {
                                formik.touched.state && formik.errors.state ? (
                                    <div className="error-message text-danger">{formik.errors.state}</div>
                                ) : null
                            }
                            <div className="form-floating mb-3">
                                <select

                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.state}
                                    name="state"
                                    className={`forms-translucent form-select text-white ${formik.errors.state && formik.touched.state ? 'is-invalid' : ''} `}
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
                                    <option defaultValue>Select State</option>
                                    {formik.values.country && countriesWithStates[formik.values.country].map((state) => (
                                        <option key={state} value={state} className='text-black'>{state}</option>
                                    ))}
                                </select>
                                <label htmlFor="floatingSelectGrid">
                                    State
                                </label>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        {
                            formik.touched.pinCode && formik.errors.pinCode ? (
                                <div className="error-message text-danger">{formik.errors.pinCode}</div>
                            ) : null
                        }
                        <Col md={5}>
                            <div className="form-floating mb-3">
                                <input
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.pinCode}
                                    name="pinCode"
                                    className={`forms-translucent form-control text-white   ${formik.errors.pinCode && formik.touched.pinCode ? 'is-invalid' : ''} `}
                                    type="text" id="floatingLastnameInput"
                                    placeholder="Pin Code"
                                    required
                                    style={{
                                        backgroundColor: "rgba(255,255,255,0.1)",
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
                        <button type="submit" className="btn btn-primary w-md">
                            Next
                        </button>
                    </div>
                </Form>
            </Col>
            <Col md={3} lg={4} className="d-none d-md-block mt-auto">
                <img src={illustration} className="w-200" alt='side' />
            </Col>
        </Row>
    );
}

export default FormOne;
