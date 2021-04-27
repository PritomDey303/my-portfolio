import AOS from "aos";
import React from "react";
import { Col, ProgressBar } from "react-bootstrap";
AOS.init();
export default function HomeSkills(props) {
  const { name, percentage } = props.skill;
  return (
    <Col md={6} className="my-3" data-aos="flip-up" data-aos-duration="1500">
      <h5>{name}</h5>
      <ProgressBar
        variant="warning"
        animated
        now={percentage}
        label={`${percentage}%`}
      />
    </Col>
  );
}
