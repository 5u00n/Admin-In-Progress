import React, { useState, useEffect } from 'react';
import {
    Button, Card, CardBody, CardTitle, CardHeader, Col, Container,
    CardSubtitle, Form, Modal, ModalBody, ModalFooter, Row, ModalHeader
} from 'reactstrap';
import Breadcrumbs from "../../../components/Common/Breadcrumb";
//import SimpleBar from 'simplebar-react';
import { Link } from 'react-router-dom';
import Dropzone from "react-dropzone"
//import List from 'list.js';

import Select from 'react-select';
// Import Flatepicker
//import Flatpickr from "react-flatpickr";


const Subject = () => {

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

    // const [modal_bulk_delete, setmodal_bulk_delete] = useState(false);
    //function tog_bulk_delete() {
    //    setmodal_delete(!modal_bulk_delete);
    // }

    function download_sample_file() {

    }

    const [selectedFiles, setselectedFiles] = useState([])

    function handleAcceptedFiles(files) {
        files.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            })
        )
        setselectedFiles(files)
    }

    /**
     * Formats the size
     */
    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return "0 Bytes"
        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
    }

    var classOptionGroup = [];
    var sectionOptionGroup = [];
    if (classOptionGroup.length === 0) {
        classOptionGroup = [
            {
                label: "Classes Availaible",
                options: [
                    { label: "1", value: "1" },
                    { label: "2", value: "2" },
                    { label: "3", value: "3" }
                ]
            },

        ];
    }

    if (sectionOptionGroup.length === 0) {
        sectionOptionGroup = [
            {
                label: "Sections",
                options: [
                    { label: "A", value: "A" },
                    { label: "B", value: "B" },
                    { label: "C", value: "C" }
                ]
            },

        ];
    }

    const [selectedGroup, setselectedGroup] = useState(null);

    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
    }

    useEffect(() => {



    });

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs title="Edusofthub" breadcrumbItem="Acadamics" breadcrumbSubItem="Subject" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Add, Edit & Remove</h4>
                                </CardHeader>

                                <CardBody>
                                    <div id="customerList">
                                        <Row className="g-4 mb-3">
                                            <Col className="col-sm-auto">
                                                <div className="d-flex gap-1">
                                                    <Button color="success" className="add-btn" onClick={() => tog_list()} id="create-btn"><i className="ri-add-line align-bottom me-1"></i> Add</Button>
                                                    <Button color="success" className="add-btn" onClick={() => tog_list_bulk()} id="create-btn"><i className="ri-add-line align-bottom me-1"></i> Add in Bulk</Button>
                                                    <Button color="soft-danger"
                                                    // onClick="deleteMultiple()"
                                                    ><i className="ri-delete-bin-2-line"></i></Button>
                                                </div>
                                            </Col>


                                            <Col className="col-sm">
                                                <div className="d-flex justify-content-sm-end">
                                                    <div className="search-box ms-2">
                                                        <input type="text" className="form-control search" placeholder="Search..." />
                                                        <i className="ri-search-line search-icon"></i>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>

                                        <div className="table-responsive table-card mt-3 mb-1">
                                            <table className="table align-middle table-nowrap" id="customerTable">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th scope="col" style={{ width: "50px" }}>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="checkAll" value="option" />
                                                            </div>
                                                        </th>
                                                        <th className="sort" data-sort="customer_name">Customer</th>
                                                        <th className="sort" data-sort="email">Email</th>
                                                        <th className="sort" data-sort="phone">Phone</th>
                                                        <th className="sort" data-sort="date">Joining Date</th>
                                                        <th className="sort" data-sort="status">Delivery Status</th>
                                                        <th className="sort" data-sort="action">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="list form-check-all">
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2101</Link></td>
                                                        <td className="customer_name">Mary Cousar</td>
                                                        <td className="email">marycousar@velzon.com</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="date">06 Apr, 2021</td>
                                                        <td className="status"><span className="badge badge-soft-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="checkAll" value="option2" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2102</Link></td>
                                                        <td className="customer_name">Jeff Taylor</td>
                                                        <td className="email">jefftaylor@velzon.com</td>
                                                        <td className="phone">863-577-5537</td>
                                                        <td className="date">15 Feb, 2021</td>
                                                        <td className="status"><span className="badge badge-soft-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="checkAll" value="option3" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2103</Link></td>
                                                        <td className="customer_name">Robert McMahon</td>
                                                        <td className="email">robertmcmahon@velzon.com</td>
                                                        <td className="phone">786-253-9927</td>
                                                        <td className="date">12 Jan, 2021</td>
                                                        <td className="status"><span className="badge badge-soft-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="checkAll" value="option4" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2104</Link></td>
                                                        <td className="customer_name">Michael Morris</td>
                                                        <td className="email">michaelmorris@velzon.com</td>
                                                        <td className="phone">805-447-8398</td>
                                                        <td className="date">19 May, 2021</td>
                                                        <td className="status"><span className="badge badge-soft-danger text-uppercase">Block</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="checkAll" value="option5" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2105</Link></td>
                                                        <td className="customer_name">Kevin Dawson</td>
                                                        <td className="email">kevindawson@velzon.com</td>
                                                        <td className="phone">213-741-4294</td>
                                                        <td className="date">14 Apr, 2021</td>
                                                        <td className="status"><span className="badge badge-soft-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="checkAll" value="option6" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2106</Link></td>
                                                        <td className="customer_name">Carolyn Jones</td>
                                                        <td className="email">carolynjones@velzon.com</td>
                                                        <td className="phone">414-453-5725</td>
                                                        <td className="date">07 Jun, 2021</td>
                                                        <td className="status"><span className="badge badge-soft-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="checkAll" value="option7" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2107</Link></td>
                                                        <td className="customer_name">Glen Matney</td>
                                                        <td className="email">glenmatney@velzon.com</td>
                                                        <td className="phone">515-395-1069</td>
                                                        <td className="date">02 Nov, 2021</td>
                                                        <td className="status"><span className="badge badge-soft-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="checkAll" value="option8" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#"
                                                            className="fw-medium link-primary">#VZ2108</Link></td>
                                                        <td className="customer_name">Charles Kubik</td>
                                                        <td className="email">charleskubik@velzon.com</td>
                                                        <td className="phone">231-480-8536</td>
                                                        <td className="date">25 Sep, 2021</td>
                                                        <td className="status"><span className="badge badge-soft-danger text-uppercase">Block</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="checkAll" value="option9" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2109</Link></td>
                                                        <td className="customer_name">Herbert Stokes</td>
                                                        <td className="email">herbertstokes@velzon.com</td>
                                                        <td className="phone">312-944-1448</td>
                                                        <td className="date">20 Jul, 2021</td>
                                                        <td className="status"><span className="badge badge-soft-danger text-uppercase">Block</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="checkAll" value="option10" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2110</Link></td>
                                                        <td className="customer_name">Timothy Smith</td>
                                                        <td className="email">timothysmith@velzon.com</td>
                                                        <td className="phone">973-277-6950</td>
                                                        <td className="date">13 Dec, 2021</td>
                                                        <td className="status"><span className="badge badge-soft-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="checkAll" value="option11" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2111</Link></td>
                                                        <td className="customer_name">Johnny Evans</td>
                                                        <td className="email">johnnyevans@velzon.com</td>
                                                        <td className="phone">407-645-1767</td>
                                                        <td className="date">01 Oct, 2021</td>
                                                        <td className="status"><span className="badge badge-soft-danger text-uppercase">Block</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="checkAll" value="option12" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2112</Link></td>
                                                        <td className="customer_name">Kevin Dawson</td>
                                                        <td className="email">kevindawson@velzon.com</td>
                                                        <td className="phone">213-741-4294</td>
                                                        <td className="date">14 Apr, 2021</td>
                                                        <td className="status"><span className="badge badge-soft-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="noresult" style={{ display: "none" }}>
                                                <div className="text-center">
                                                    <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop"
                                                        colors="primary:#121331,secondary:#08a88a" style={{ width: "75px", height: "75px" }}>
                                                    </lord-icon>
                                                    <h5 className="mt-2">Sorry! No Result Found</h5>
                                                    <p className="text-muted mb-0">We've searched more than 150+ Orders We did not find any
                                                        orders for you search.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-end">
                                            <div className="pagination-wrap hstack gap-2">
                                                <Link className="page-item pagination-prev disabled" to="#">
                                                    Previous
                                                </Link>
                                                <ul className="pagination listjs-pagination mb-0"></ul>
                                                <Link className="page-item pagination-next" to="#">
                                                    Next
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>


                </Container>
            </div>

            {/* Add Modal */}
            <Modal isOpen={modal_list} toggle={() => { tog_list(); }} centered >
                <ModalHeader className="bg-light p-3" id="exampleModalLabel" toggle={() => { tog_list(); }}> Add Subject </ModalHeader>
                <form className="tablelist-form">
                    <ModalBody>
                        <div className="mb-3" id="modal-id" style={{ display: "none" }}>
                            <label htmlFor="id-field" className="form-label">ID</label>
                            <input type="text" id="id-field" className="form-control" placeholder="ID" readOnly />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="customername-field" className="form-label">Subject Name</label>
                            <input type="text" id="customername-field" className="form-control" placeholder="Enter Name" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email-field" className="form-label">Select Class </label>
                            <Select
                                placeholder="Select Class"
                                value={selectedGroup}
                                onChange={() => {
                                    handleSelectGroup();
                                }}
                                options={classOptionGroup}
                                classNamePrefix="select2-selection"
                            />
                        </div>
                        {/*
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
                            <button type="submit" className="btn btn-success" id="add-btn">Add Subject</button>
                            {/* <button type="button" className="btn btn-success" id="edit-btn">Update</button> */}
                        </div>
                    </ModalFooter>
                </form>
            </Modal>

            <Modal isOpen={modal_list_bulk} toggle={() => { tog_list_bulk(); }} centered >
                <ModalHeader className="bg-light p-3" id="exampleModalLabel" toggle={() => { tog_list_bulk(); }}> Add Subject In Bulk</ModalHeader>
                <form className="tablelist-form">
                    <ModalBody>
                        <div className="mb-3" >
                            <label htmlFor="status-field" className="form-label">Data From</label>
                            <select className="form-control" data-trigger name="status-field" id="status-field" >
                                <option value="">EXCEL</option>
                                <option value="Active">CV</option>
                            </select>

                            <button type="button" className="mt-3 btn btn-info" onClick={() => download_sample_file()}>Download Sample File</button>
                        </div>


                        <Card>
                            <CardBody>
                                <CardTitle>Drop Zone</CardTitle>
                                <CardSubtitle className="mb-3">
                                    {" "}
                                    Please Foprmat file and ten only rfop your file !
                                </CardSubtitle>
                                <Form
                                    className="dropzone"
                                >
                                    <Dropzone
                                        onDrop={acceptedFiles => {
                                            handleAcceptedFiles(acceptedFiles)
                                        }}
                                    >
                                        {({ getRootProps, getInputProps }) => (
                                            <div style={{ textAlign: "center" }}>
                                                <div
                                                    className="dz-message needsclick"
                                                    {...getRootProps()}
                                                >
                                                    <input {...getInputProps()} />
                                                    <div className="mb-3">
                                                        <i className="display-4 text-muted mdi mdi-cloud-upload-outline"></i>
                                                    </div>
                                                    <h4>Drop files here to upload</h4>
                                                </div>
                                            </div>
                                        )}
                                    </Dropzone>
                                    <div className="dropzone-previews mt-3" id="file-previews">
                                        {selectedFiles.map((f, i) => {
                                            return (
                                                <Card
                                                    className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                    key={i + "-file"}
                                                >
                                                    <div className="p-2">
                                                        <Row className="align-items-center">
                                                            <Col className="col-auto">
                                                                <img
                                                                    data-dz-thumbnail=""
                                                                    height="80"
                                                                    className="avatar-sm rounded bg-light"
                                                                    alt={f.name}
                                                                    src={f.preview}
                                                                />
                                                            </Col>
                                                            <Col>
                                                                <Link
                                                                    to="#"
                                                                    className="text-muted font-weight-bold"
                                                                >
                                                                    {f.name}
                                                                </Link>
                                                                <p className="mb-0">
                                                                    <strong>{f.formattedSize}</strong>
                                                                </p>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Card>
                                            )
                                        })}
                                    </div>
                                </Form>

                                <div className="text-center mt-4">
                                    <button
                                        type="button"
                                        className="btn btn-primary "
                                    >
                                        Send Files
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                        {/*
                        <div className="mb-3" id="modal-id" style={{ display: "none" }}>
                            <label htmlFor="id-field" className="form-label">ID</label>
                            <input type="text" id="id-field" className="form-control" placeholder="ID" readOnly />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="customername-field" className="form-label">Subject Name</label>
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
                            <button type="button" className="btn btn-light" onClick={() => setmodal_list_bulk(false)}>Close</button>
                            <button type="submit" className="btn btn-success" id="add-btn">Add Subject</button>
                            {/* <button type="button" className="btn btn-success" id="edit-btn">Update</button> */}
                        </div>
                    </ModalFooter>
                </form>
            </Modal>

            {/* Remove Modal */}
            <Modal isOpen={modal_delete} toggle={() => { tog_delete(); }} className="modal fade zoomIn" id="deleteRecordModal" centered >
                <div className="modal-header">
                    <Button type="button" onClick={() => setmodal_delete(false)} className="btn-close" aria-label="Close"> </Button>
                </div>
                <ModalBody>
                    <div className="mt-2 text-center">
                        <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop"
                            colors="primary:#f7b84b,secondary:#f06548" style={{ width: "100px", height: "100px" }}></lord-icon>
                        <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                            <h4>Are you Sure ?</h4>
                            <p className="text-muted mx-4 mb-0">Are you Sure You want to Remove this Record ?</p>
                        </div>
                    </div>
                    <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                        <button type="button" className="btn w-sm btn-light" onClick={() => setmodal_delete(false)}>Close</button>
                        <button type="button" className="btn w-sm btn-danger " id="delete-record">Yes, Delete It!</button>
                    </div>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
};

export default Subject;
