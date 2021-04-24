import React from "react";
import { Col, Image } from "react-bootstrap";

export default function SingleProfession(props) {
  const { title, img, description } = props.singleProfession;
  return (
    <Col className="text-center px-4 mb-3" md={4}>
      <div className="mx-auto mb-2" style={{ width: "100px", height: "100px" }}>
        <Image className="w-100 h-100" src={img}></Image>
      </div>
      <h3>{title}</h3>
      <p className="text-secondary">{description}</p>
    </Col>
  );
}
