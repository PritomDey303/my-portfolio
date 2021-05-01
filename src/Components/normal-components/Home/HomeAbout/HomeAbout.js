import AOS from "aos";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../../../App";
import "./HomeAbout.css";
AOS.init();
export default function HomeAbout() {
  const [personalInfo] = useContext(UserContext);
  console.log(personalInfo);
  const { name, about, email, dob, city, country } = personalInfo;
  return (
    <div className="pt-5 pb-5" id="about">
      <Container>
        <Row data-aos="fade-up" data-aos-duration="1500">
          <Col className="text-center">
            <span className="bg-brand px-2 py-1  text-brand my-2 text-center">
              About Me
            </span>
            <h1 className="text-center text-brand py-2">Know Me More</h1>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col
            md={8}
            className="pr-5 textCenter"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h2 className="my-2" style={{ fontWeight: "400" }}>
              Hi,I'm <b>{name}</b>
            </h2>
            <p className="text-secondary">{about}</p>
          </Col>
          <Col
            md={4}
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="bg-brand rounded-circle circle mx-auto mb-3">
              <h1 className="display-1 year text-secondary">
                <b>2</b>
              </h1>
            </div>
            <h3>Years Of Experience</h3>
          </Col>
        </Row>
        <Row
          className="text-brand mt-5 textCenter"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <Col md={3} sm={6} xs={12}>
            <p className="text-secondary">Name:</p>
            <h6>{name}</h6>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <p className="text-secondary">Email:</p>
            <h6>{email}</h6>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <p className="text-secondary">Date Of Birth:</p>
            <h6>{dob}</h6>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <p className="text-secondary">From:</p>
            <h6>
              {city},{country}
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
