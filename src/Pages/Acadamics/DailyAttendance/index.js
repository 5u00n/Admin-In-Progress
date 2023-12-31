import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody,  CardTitle, CardHeader, Col, Container,
    CardSubtitle,Form, Modal, ModalBody, ModalFooter, Row, ModalHeader } from 'reactstrap';
import Breadcrumbs from "../../../components/Common/Breadcrumb";
//import SimpleBar from 'simplebar-react';
import { Link } from 'react-router-dom';
import Dropzone from "react-dropzone"
//import List from 'list.js';

import Select from 'react-select';
const DailyAttendance = () => {
    return (
        <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <Breadcrumbs title="Edusofthub" breadcrumbItem="Acadamics" breadcrumbSubItem="DailyAttendance" />
                </Container>
                </div></React.Fragment>
    );
}

export default DailyAttendance;
