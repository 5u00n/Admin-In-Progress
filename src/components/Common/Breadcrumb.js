import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Col, Row } from "reactstrap";

const Breadcrumbs = (props) => {
  return (
    <React.Fragment>
      <Row>
        <Col xs="12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-0 font-size-18  ">{props.breadcrumbSubItem != null ? props.breadcrumbSubItem : props.breadcrumbItem != null ? props.breadcrumbItem : props.title}</h4>
            <div className="page-title-right ">
              <Breadcrumb listClassName="m-0">
                <BreadcrumbItem>
                  <Link to="#">{props.title}</Link>
                </BreadcrumbItem>
                {props.breadcrumbItem != null ?
                  <BreadcrumbItem active className="text-muted">
                    <Link to="#" >{props.breadcrumbItem}</Link>
                  </BreadcrumbItem>
                  : <div></div>}
                {props.breadcrumbSubItem != null ?
                  <BreadcrumbItem active   >
                    <Link to="#"  >{props.breadcrumbSubItem}</Link>
                  </BreadcrumbItem>
                  : <div></div>}
              </Breadcrumb>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}



export default Breadcrumbs;
