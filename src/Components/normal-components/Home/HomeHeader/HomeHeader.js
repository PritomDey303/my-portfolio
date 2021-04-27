import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import AOS from "aos";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import TextTransition, { presets } from "react-text-transition";
import { UserContext } from "../../../../App";
import "./HomeHeader.css";
AOS.init();
export default function HomeHeader() {
  const [personalInfo] = useContext(UserContext);
  const { img, city, country } = personalInfo;
  const [index, setIndex] = useState(0);

  const TEXTS = ["Designer", "Developer"];
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div
      id="home-header"
      className="bg-brand pt-5"
      style={{ paddingBottom: "130px" }}
    >
      <Container>
        <Row>
          <Col
            md={6}
            className="my-3 order-2 order-md-1"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="mx-auto text-brand header-info">
              <h1 className="text-brand header-title1">HI,I'M A WEB</h1>
              <h1 className="text-brand header-title2">
                {" "}
                <TextTransition
                  className="mx-auto"
                  text={TEXTS[index % TEXTS.length]}
                  springConfig={presets.wobbly}
                />
              </h1>
              <h5 className="my-4 text-brand">
                based in {city},{country}
              </h5>
              <button className="btn btn-secondary mr-4 p-3">
                View My Works
              </button>
              <button className="btn btn-outline-secondary p-3">
                <a href="#contact" className="text-light">
                  {" "}
                  Contact Me <ArrowDownwardRoundedIcon />
                </a>
              </button>
            </div>
          </Col>
          <Col
            md={6}
            className="my-3 order-1 order-md-2"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <div className="image-container header-img rounded-circle p-2 mx-auto bg-light">
              <Image src={img} className="w-100 h-100" roundedCircle />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
