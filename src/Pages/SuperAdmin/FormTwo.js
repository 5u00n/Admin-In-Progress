import React, { useState, useEffect } from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import illustration from '../../assets/images/illutration/young.png';
import { Link } from 'react-router-dom';
import Dropzone from "react-dropzone"
const FormTwo = ({ prev, next ,tog_list}) => {

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
    return (
        <Row>
            <Col md={6}>
                <form className='mt-3 py-5 px-3 text-white'>
                    <Row className="flex-column">
                        <Col lg={10}>
                            <Card>
                                <CardBody>
                                    <CardTitle>Select School Logo</CardTitle>
                                    <CardSubtitle className="mb-3">
                                        {" "}
                                        Please Foprmat file and then only upload Your file !
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
                                                    <div className="text-center mt-4">

                                                    </div>
                                                </Card>
                                            )
                                        })}
                                    </div>



                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={10}>

                        </Col>
                    </Row>

                    <Row>
                        <Col lg={10} md={12}>
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
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark Otto</td>
                                                    <td>markotto@gmail.com</td>
                                                    <td><div className='btn btn-outline-info '><i className='mdi mdi-content-copy'></i></div><div className='btn btn-outline-danger mx-1'><i className='mdi mdi-delete'></i></div></td>
                                                </tr>
                                                
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
                        <button onClick={next} className="btn btn-primary w-md">
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


export default FormTwo;
