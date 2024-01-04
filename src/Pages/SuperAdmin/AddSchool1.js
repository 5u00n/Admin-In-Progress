import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import Select from 'react-select';

import FormOne from './FormOne';
import FormTwo from './FormTwo';
import FormThree from './FormThree';
const AddSchool1 = () => {


    const [create_progress, setcreate_progress] = useState("none");

    function set_create_progress(prog){
        setcreate_progress(prog);
    }

    const [school_list, setschool_list] = useState(false);
    function create_school() {
        setschool_list(!school_list);
        setcreate_progress("loading");
    }


    const [modal_list, setmodal_list] = useState(false);
    function tog_list() {
        setmodal_list(!modal_list);
    }


    const [modal_list_bulk, setmodal_list_bulk] = useState(false);
    function tog_list_bulk() {
        setmodal_list_bulk(!modal_list_bulk);
    }
    const [modal_delete, setmodal_delete] = useState(false);
    function tog_delete() {
        setmodal_delete(!modal_delete);
    }

    const [modal_bulk_delete, setmodal_bulk_delete] = useState(false);
    function tog_bulk_delete() {
        setmodal_delete(!modal_bulk_delete);
    }


    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    useEffect(() => {
        document.body.className = "bg-pattern";
    });


    return (
        <React.Fragment>
            <div className="bg-overlay"></div>
            <div className="acoount-content my-5 mt-5">
                <Container>
                    <Row className='mb-3'>
                        <div className='col-md-auto'>
                            <Link to={"/"} ><i className="mdi mdi-close font-size-20 text-white " aria-hidden="true"></i></Link>

                            <span className="mx-3 text-white font-size-20  "><b>Add School ( Step {step} of 3 )</b></span>
                        </div>
                    </Row>
                    {step === 1 && <FormOne next={nextStep} />}

                    {step === 2 && <FormTwo prev={prevStep} next={nextStep} tog_list={tog_list}/>}

                    {step === 3 && (<FormThree prev={prevStep} create_school={create_school} create_progress={create_progress} set_create_progress={set_create_progress} />)}

                </Container>

                {/* Add Modal */}
                <Modal isOpen={modal_list} toggle={() => { tog_list(); }} centered >
                    <ModalHeader className="bg-light p-3" id="exampleModalLabel" toggle={() => { tog_list(); }}> Add Student </ModalHeader>
                    <form className="tablelist-form">
                        <ModalBody>
                            <div className="mb-3" id="modal-id" style={{ display: "none" }}>
                                <label htmlFor="id-field" className="form-label">ID</label>
                                <input type="text" id="id-field" className="form-control" placeholder="ID" readOnly />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="customername-field" className="form-label">Student Name</label>
                                <input type="text" id="customername-field" className="form-control" placeholder="Enter Name" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email-field" className="form-label">Email</label>
                                <input type="email" id="email-field" className="form-control" placeholder="Enter Email" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="phone-field" className="form-label">Phone</label>
                                <input type="text" id="phone-field" className="form-control" placeholder="Enter Phone no." required />
                            </div>
                            {/*
                        <div className="mb-3">
                            <label htmlFor="date-field" className="form-label">Birthdate Date</label>
                            <Flatpickr
                                className="form-control"
                                options={{
                                    dateFormat: "d M, Y"
                                }}
                                placeholder="Select Date"
                            />
                        </div>

                        <div>
                            <label htmlFor="status-field" className="form-label">Status</label>
                            <select className="form-control" data-trigger name="status-field" id="status-field" >
                                <option value="">Status</option>
                                <option value="Active">Active</option>
                                <option value="Block">Block</option>
                            </select>
                        </div>
                        */}
                        </ModalBody>
                        <ModalFooter>
                            <div className="hstack gap-2 justify-content-end">
                                <button type="button" className="btn btn-light" onClick={() => setmodal_list(false)}>Close</button>
                                <button type="submit" className="btn btn-success" id="add-btn">Add Student</button>
                                {/* <button type="button" className="btn btn-success" id="edit-btn">Update</button> */}
                            </div>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>
        </React.Fragment >
    );
}






export default AddSchool1;
