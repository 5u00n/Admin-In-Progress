import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className=" bg-transparent text-white footer px-5" style={{left: "0", bottom: "0", width: "100%"}}>
        <Container fluid={true}>
          <Row>
            <Col sm={6}>{new Date().getFullYear()} © Edusofthub.</Col>
            <Col sm={6}>
              <div className="text-sm-end d-none d-sm-block">
                Crafted with <i className="mdi mdi-heart text-danger"></i> by
                DevEdits
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
