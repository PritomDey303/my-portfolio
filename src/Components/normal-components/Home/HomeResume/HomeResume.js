import AOS from "aos";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../../../App";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import HomeSkills from "./HomeSkills/HomeSkills";
AOS.init();
export default function HomeResume() {
  const [, , , , EducationInfo, , ExperienceInfo, , Skills] = useContext(
    UserContext
  );
  return (
    <div className="py-5" id="resume">
      <Container>
        <Row data-aos="fade-up" data-aos-duration="1500">
          <Col>
            <Col className="text-center">
              <span className="bg-brand px-2 py-1  text-brand my-2 text-center">
                Resume
              </span>
              <h1 className="text-center text-brand py-2">
                A summery of My Resume
              </h1>
            </Col>
          </Col>
        </Row>
        <Row className="py-5 mt-4">
          <Col
            md={6}
            className="mb-2"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h2 className="mb-4"> My Education</h2>
            <div className="w-100" style={{ borderLeft: "3px solid #f5df4e" }}>
              {EducationInfo.map((singleEducationInfo) => (
                <Education
                  key={singleEducationInfo._id}
                  singleEducationInfo={singleEducationInfo}
                ></Education>
              ))}
            </div>
          </Col>

          <Col
            md={6}
            className="mb-2"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h2 className="mb-4">My Experience</h2>
            <div className="w-100" style={{ borderLeft: "3px solid #f5df4e" }}>
              {ExperienceInfo.map((singleExperience) => (
                <Experience
                  key={singleExperience._id}
                  singleExperience={singleExperience}
                ></Experience>
              ))}
            </div>
          </Col>
        </Row>{" "}
      </Container>
      <div className="bg-grey py-5">
        <Container>
          <h2 className="my-1">My Skills</h2>

          <Row>
            {Skills.map((skill) => (
              <HomeSkills key={skill._id} skill={skill}></HomeSkills>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
