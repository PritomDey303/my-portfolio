import { GitHub } from "@material-ui/icons";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AOS from "aos";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../../../App";
import "./HomeContact.css";
AOS.init();
export default function HomeContact() {
  const [PersonalInfo] = useContext(UserContext);
  const {
    address,
    city,
    country,
    mobile,
    facebook,
    linkdin,
    github,
  } = PersonalInfo;
  return (
    <div className="bg-brand py-5 text-center" id="contact">
      <Container>
        <Row>
          <Col
            md={6}
            className="px-5 mb-5"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h2 className="mb-5 mt-3">Let's get in touch</h2>
            <p className="mb-5">
              I enjoy discussing new projects and design challenges.Please share
              as much info as possible so we can get the most out of our first
              catch-up.
            </p>
            <h5>Living In:</h5>
            <p>
              {address},{city},{country}
            </p>
            <h5>Call:</h5>
            <p>{mobile}</p>{" "}
            <div className="social-icon mt-3" style={{ fontSize: "20px" }}>
              <a className="text-dark mr-3" href={facebook}>
                <FacebookIcon />
              </a>
              <a className="text-dark mx-3" href={github}>
                <GitHub />
              </a>
              <a className="text-dark mx-3" href={linkdin}>
                <LinkedInIcon />
              </a>
            </div>
          </Col>
          <Col
            md={6}
            className="px-5"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h2 className="mb-5 mt-3">Estimate your project?</h2>
            <form action="" className="contact-form">
              <div className="form-group">
                <label>What is Your Name:</label>
                <input type="text" className="form-control form-control-lg" />
              </div>
              <div className="form-group">
                <label>Your Email Address:</label>
                <input type="email" className="form-control form-control-lg" />
              </div>
              <div className="form-group">
                <label>How can I Help you?:</label>
                <textarea
                  className="form-control form-control-lg"
                  rows="3"
                ></textarea>
              </div>
              <button className="btn btn-dark px-4 py-2 mt-2">
                Send <ArrowForwardIcon />
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
