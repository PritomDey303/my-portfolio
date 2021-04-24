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

  return (
    <div className="py-5 bg-grey">
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
        <Row className="my-4">
          <Col className="d-flex justify-content-center">
            <button
              className="btn btn-outline-warning mx-2"
              onClick={() => setTag("all")}
            >
              All
            </button>

            <button
              className="btn btn-outline-warning mx-2"
              onClick={() => setTag("Web Design")}
            >
              Web Design
            </button>

            <button
              className="btn btn-outline-warning mx-2"
              onClick={() => setTag("Javascript")}
            >
              Javascript
            </button>

            <button
              className="btn btn-outline-warning mx-2"
              onClick={() => setTag("React Js")}
            >
              React Js
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
