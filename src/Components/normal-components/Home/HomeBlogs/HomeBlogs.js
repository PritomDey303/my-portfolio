import AOS from "aos";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../../../App";
import SingleBlog from "./SingleBlog/SingleBlog";
AOS.init();
export default function HomeBlogs() {
  const [, , , , , , , , , , , , Blogs] = useContext(UserContext);
  return (
    <div className="py-5 bg-grey" id="projects">
      <Container>
        <Row data-aos="fade-up" data-aos-duration="1500">
          <Col>
            <Col className="text-center">
              <span className="bg-brand px-2 py-1  text-brand my-2 text-center">
                Blogs
              </span>
              <h1 className="text-center text-brand py-2">
                Some Of My Recent Blogs
              </h1>
            </Col>
          </Col>
        </Row>
        <Row className="mt-5" data-aos="fade-up" data-aos-duration="1500">
          {Blogs.map((Blog) => (
            <SingleBlog key={Blog._id} Blog={Blog} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
