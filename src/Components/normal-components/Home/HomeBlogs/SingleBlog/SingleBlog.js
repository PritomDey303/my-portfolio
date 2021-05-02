import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";
import { Card, Col } from "react-bootstrap";

export default function SingleBlog(props) {
  const { title, description, img } = props.Blog;
  return (
    <Col md={6} xl={4} className="mb-3">
      <Card className="w-100 shadow">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description.substr(0, 101)}.....</Card.Text>
          <p
            className="lead text-right text-warning"
            style={{ cursor: "pointer" }}
          >
            Read More <ArrowForwardIcon />
          </p>
        </Card.Body>
      </Card>
    </Col>
  );
}
