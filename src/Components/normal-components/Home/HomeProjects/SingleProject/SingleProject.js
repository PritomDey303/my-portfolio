import AOS from "aos";
import React from "react";
import { Col } from "react-bootstrap";
import "./SingleProject.css";
AOS.init();
export default function SingleProject(props) {
  const { img, name, link } = props.project;
  return (
    <Col
      md={4}
      style={{ height: "400px" }}
      className="mb-3 project"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="project-overlay"></div>
      <img src={img} alt="" className="w-100 h-100" />
      <div className="project-info text-center text-light">
        <h4>{name}</h4>
        <a href={link} className="text-light">
          Live Site Link
        </a>
      </div>
    </Col>
  );
}
