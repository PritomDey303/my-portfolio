import AOS from "aos";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import projects from "../../../../fakeData/projects";
import SingleProject from "./SingleProject/SingleProject";
AOS.init();
export default function HomeProjects() {
  const [tag, setTag] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  useEffect(() => {
    tag === "all"
      ? setFilteredProjects(projects)
      : setFilteredProjects(
          projects.filter((project) => project.category === tag)
        );
  }, [tag]);
  console.log(filteredProjects);
  const [isActive, setIsActive] = useState("All");
  return (
    <div className="py-5" id="projects">
      <Container>
        <Row data-aos="fade-up" data-aos-duration="1500">
          <Col>
            <Col className="text-center">
              <span className="bg-brand px-2 py-1  text-brand my-2 text-center">
                Portfolio
              </span>
              <h1 className="text-center text-brand py-2">
                Some of my most recent projects
              </h1>
            </Col>
          </Col>
        </Row>
        <Row className="my-4" data-aos="fade-up" data-aos-duration="1500">
          <Col className="d-flex justify-content-center">
            <button
              className={`btn btn-outline-warning mx-2 ${
                isActive === "All" ? "active" : ""
              }`}
              onClick={() => {
                setTag("all");
                setIsActive("All");
              }}
            >
              All
            </button>

            <button
              className={`btn btn-outline-warning mx-2 ${
                isActive === "HTML/CSS" ? "active" : ""
              }`}
              onClick={() => {
                setTag("HTML/CSS");
                setIsActive("HTML/CSS");
              }}
            >
              HTML/CSS
            </button>

            <button
              className={`btn btn-outline-warning mx-2 ${
                isActive === "Javascript" ? "active" : ""
              }`}
              onClick={() => {
                setTag("Javascript");
                setIsActive("Javascript");
              }}
            >
              Javascript
            </button>

            <button
              className={`btn btn-outline-warning mx-2 ${
                isActive === "React Js" ? "active" : ""
              }`}
              onClick={() => {
                setTag("React Js");
                setIsActive("React Js");
              }}
            >
              React Js
            </button>
            <button
              className={`btn btn-outline-warning mx-2 ${
                isActive === "MERN" ? "active" : ""
              }`}
              onClick={() => {
                setTag("MERN");
                setIsActive("MERN");
              }}
            >
              MERN
            </button>
          </Col>
        </Row>
        <Row>
          {filteredProjects.map((project) => (
            <SingleProject key={project._id} project={project}></SingleProject>
          ))}
        </Row>
      </Container>
    </div>
  );
}
