import React from "react";
import { Col, ProgressBar } from "react-bootstrap";

export default function HomeSkills(props) {
  const { name, percentage } = props.skill;
  return (
    <Col md={6} className="my-3">
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
