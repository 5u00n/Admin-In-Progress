import React, { useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button, Form, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import illustration from '../../assets/images/illutration/young.png';
import { Link } from 'react-router-dom';
import Dropzone from "react-dropzone";
import { useFormik } from 'formik';
const FormTwo = ({ prev, next }) => {

    const [selectedFiles, setselectedFiles] = useState([])

    const [modal_list, setmodal_list] = useState(false);
    function tog_list() {
        modalForm.resetForm();
        setmodal_list(!modal_list);
    }

    const formik = useFormik({
        initialValues: {
            // Define your initial form values here

            school_logo: '',
            users: [],
            // Add other fields as necessary
        },
        onSubmit: (values) => {
            // When the form is submitted, log the values to the console
            values.pass = generateRandomPassword();
            console.log("values", values);
            handleAddUser(values);
            setmodal_list(!modal_list);

            // You can also close the modal here if needed
        },
    });

    const handleFileSelected = (e) => {
        const files = Array.from(e.target.files)
        modalForm.setFieldValue("profile_image",files[0]);
    }


    function handleAcceptedFiles(files) {
        const file = files[0];
        if (file) {
            setselectedFiles([
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                    formattedSize: formatBytes(file.size),
                })
            ]);
            formik.setFieldValue('school_logo', file);
        }

    }

    const generateRandomPassword = (length = 8) => {

        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

        modalForm.setFieldValue('pass', password);
        return password;
    };


    const modalForm = useFormik({
        initialValues: {
            // Define your initial form values here
            name: '',
            email: '',
            position: '',
            profile_image: "",
            pass: '',
            // Add other fields as necessary
        },
        onSubmit: (values) => {
            // When the form is submitted, log the values to the console
            values.pass = generateRandomPassword();
            handleAddUser(values);

        },
    });

    // Function to add a new admin user
    const handleAddUser = (userDetails) => {
        const newUsers = [...formik.values.users, userDetails];
        formik.setFieldValue('users', newUsers);
        setmodal_list(!modal_list);
    };



    const handleDeleteUser = (index) => {
        
        formik.setFieldValue(
            'users',
            formik.values.users.filter((_, i) => i !== index)
          );

    };

    const copyToClipboard = (email, pass) => {
        navigator.clipboard.writeText(`Email: ${email}\nPassword: ${pass}`).then(
            () => {
                //console.log('Email copied to clipboard!');
                // You can display a message to the user indicating the copy was successful.
            },
            (err) => {
                //console.error('Failed to copy email: ', err);
                // You can display an error message to the user indicating the copy failed.
            }
        );
    };

    const [canProceed, setcanProceed] = useState(true);





    const handleSubmit = (e) => {
        if (formik.values.school_logo.length !== 0 && formik.values.users.length > 0) {
            setcanProceed(true);
            next(formik.values);

        }
        else {
            setcanProceed(false);
            e.preventDefault();
        }
    }

    // Function to render the preview of the selected image
    const renderPreview = () => {
        //console.log("Seconf Form ", formik.values.school_logo.length===0);
        if (formik.values.school_logo.length !== 0) {
            return (

                <Card
                    className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"

                >
                    <div className="p-2">
                        <Row className="align-items-center">
                            <Col className="col-auto">
                                <img
                                    data-dz-thumbnail=""
                                    height="80"
                                    className="avatar-sm rounded bg-light"
                                    alt={selectedFiles[0].name}
                                    src={selectedFiles[0].preview}
                                />
                            </Col>
                            <Col>
                                <Link
                                    to="#"
                                    className="text-muted font-weight-bold"
                                >
                                    {selectedFiles[0].name}
                                </Link>
                                <p className="mb-0">
                                    <strong>{selectedFiles[0].formattedSize}</strong>
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Card>
            );
        }
        return null;
    };


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
    return (
        <div>
            <Row>
                {
                    !canProceed ? (
                        <div className="error-message text-danger">* Please add a <b>SCHOOL LOGO</b>  and an <b>USER</b> !</div>
                    ) : null
                }
                <Col md={6} lg={7}>
                    <Form className=' py-3 px-1 text-white'
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit(e);
                            //return false;
                        }}

                        autoComplete="off">
                        <Row className="flex-column">
                            {selectedFiles.length < 0 ? (
                                <div className="error-message text-danger">{formik.errors.school_logo}</div>
                            ) : null}
                            <Col lg={10}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Select School Logo</CardTitle>
                                        <CardSubtitle className="mb-3">
                                            {" "}
                                            Please Format file and then only upload Your file !
                                        </CardSubtitle>

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
                                                        <div className="mb-6 lg-10">
                                                            <i className="font-size-20 text-white  mdi mdi-cloud-upload-outline"></i>
                                                            <span className="font-size-20 text-black px-4">Drop files here to upload</span>

                                                        </div>

                                                    </div>
                                                </div>
                                            )}
                                        </Dropzone>
                                        <div className="dropzone-previews mt-3" id="file-previews">
                                            {renderPreview()}

                                        </div>



                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={10} >
                                <Card>

                                    <CardBody>
                                        <div className="d-grid mb-3">
                                            <Button color="primary" size='210' className="add-btn btn-lg" onClick={() => tog_list()} id="create-btn"><i className="ri-add-line align-bottom me-1"></i> Add Admin For the School</Button>

                                        </div>

                                        <p className="card-title-desc">
                                            {" "}
                                            <span className='text-black'>Users that needs to access the school  added here.
                                            </span>
                                        </p>

                                        <div className="table-responsive">
                                            <table className="table table-borderless table-sm m-0">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {

                                                        formik.values.users.map((user, index) => (
                                                            <tr key={index}>
                                                                <th className="font-size-12" scope="row">{index + 1}</th>
                                                                <td className="font-size-12">{user.name}</td>
                                                                <td className="font-size-14" >{user.email}</td>
                                                                <td >
                                                                    <Button className='btn btn-outline-info' onClick={() => copyToClipboard(user.email, user.pass)} >
                                                                        <i className='mdi mdi-content-copy'></i>
                                                                    </Button>
                                                                    <Button className='btn btn-outline-danger' onClick={() => handleDeleteUser(index)} >
                                                                        <i className='mdi mdi-delete'></i>
                                                                    </Button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>




                        <div>
                            <button onClick={prev} className="btn btn-secondary w-md" style={{ marginRight: "36px" }}>
                                Prev
                            </button>
                            <button type='submit' className="btn btn-primary w-md" >
                                Next
                            </button>
                        </div>
                    </Form>
                </Col>
                <Col md={3} lg={4} className="d-none d-md-block mt-auto">
                    <img src={illustration} className="w-200" alt='side' />
                </Col>
            </Row>


            <Modal isOpen={modal_list} toggle={() => { tog_list(); }} centered >
                <ModalHeader className="bg-light p-3" id="exampleModalLabel" toggle={() => { tog_list(); }}> Add An Admin Users </ModalHeader>
                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        modalForm.handleSubmit();
                        //return false;
                    }}
                >
                    <ModalBody>
                        <div className="mb-3" id="modal-id" style={{ display: "none" }}>
                            <label htmlFor="id-field" className="form-label">ID</label>
                            <input type="text" id="id-field" className="form-control" placeholder="ID" readOnly />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="profile_img" className="form-label">Select Profile Image </label>
                            <input
                                onBlur={modalForm.handleChange}
                                onFocus={modalForm.handleBlur}
                                onChange={handleFileSelected}
                                value={modalForm.values.profile_imgage}

                                type="file" name="profile_image" id="profile_image" className="form-file" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Admin Name</label>
                            <input
                                onBlur={modalForm.handleChange}
                                onFocus={modalForm.handleBlur}
                                value={modalForm.values.name}
                                onChange={modalForm.handleChange}

                                type="text" name="name" id="name" className="form-control" placeholder="Enter Name" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                onBlur={modalForm.handleChange}
                                onFocus={modalForm.handleBlur}
                                onChange={modalForm.handleChange}
                                value={modalForm.values.email}
                                type="email" id='email' name='email' className="form-control" placeholder="Enter Email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="position" className="form-label">User Position</label>
                            <select id="position" name='position' className="form-select"
                                placeholder="Enter Users Position"
                                required onChange={modalForm.handleChange}
                                onBlur={modalForm.handleBlur}

                                value={modalForm.values.position}>
                                <option defaultValue>Select a User Role</option>
                                <option value="admin">Principal</option>
                                <option value="staff">Staff</option>
                                <option value="teacher">Teacher</option>
                                <option value="accountant">Accountant</option>
                                <option value="other">Other</option>
                            </select>
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
                            <button type="submit" className="btn btn-success" id="add-btn" >Add User</button>
                            {/* <button type="button" className="btn btn-success" id="edit-btn">Update</button> */}
                        </div>
                    </ModalFooter>
                </Form>
            </Modal>

        </div>
    );
}


export default FormTwo;
