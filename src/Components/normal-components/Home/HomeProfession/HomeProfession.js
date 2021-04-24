import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../../../App";
import SingleProfession from "./SingleProfession/SingleProfession";

export default function HomeProfession() {
  const [, , professionInfo] = useContext(UserContext);
  return (
    <div className="py-5 bg-grey">
      <Container>
        <Row data-aos="fade-up" data-aos-duration="1500">
          <Col>
            <Col className="text-center">
              <span className="bg-brand px-2 py-1  text-brand my-2 text-center">
                What I Do
              </span>
              <h1 className="text-center text-brand py-2">
                How can I help your next project
              </h1>
            </Col>
          </Col>
        </Row>

        <Row className="mt-5" data-aos="fade-up" data-aos-duration="1600">
          {professionInfo.map((singleProfession) => (
            <SingleProfession
              key={singleProfession._id}
              singleProfession={singleProfession}
            ></SingleProfession>
          ))}
        </Row>
      </Container>
    </div>
  );
}
