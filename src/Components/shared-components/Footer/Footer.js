import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col sm={6}>
            <p className="mx-auto d-block">
              Copyright <span>&#169;</span> 2021{" "}
              <span className="text-warning">Pritom</span>. All Rights Reserved.
            </p>
          </Col>
          <Col sm={6} className="text-right">
            <p>
              Designed by <span className="text-warning">Pritom Dey</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
