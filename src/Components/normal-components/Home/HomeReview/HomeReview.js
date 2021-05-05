import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { UserContext } from "../../../../App";
import SingleReview from "./SingleReview/SingleReview";

export default function HomeReview() {
  const [, , , , , , , , , , Reviews, ,] = useContext(UserContext);
  const settings = {
    dots: true,

    infinite: true,
    autoplay: true,

    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="review" className="py-5 bg-secondary text-light">
      <Container>
        <Row data-aos="fade-up" data-aos-duration="1500">
          <Col>
            <Col className="text-center">
              <span className="bg-brand px-2 py-1 text-brand  my-2 text-center">
                Client Speak
              </span>
              <h1 className="text-center  py-2">What some of my Clients Say</h1>
            </Col>
          </Col>
        </Row>

        <Slider
          {...settings}
          className="mt-5"
          data-aos="fade-up"
          data-aos-duration="1600"
        >
          {Reviews.map((review) => (
            <SingleReview key={review._id} review={review}></SingleReview>
          ))}
        </Slider>
      </Container>
    </div>
  );
}
