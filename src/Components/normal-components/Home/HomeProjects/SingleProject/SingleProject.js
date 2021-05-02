import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import AOS from "aos";
import React from "react";
import { Col } from "react-bootstrap";
import "./SingleProject.css";

AOS.init();

export default function SingleProject(props) {
  const { img, name, github, live_site, description } = props.project;
  return (
    <Col
      md={6}
      xl={4}
      className="my-4 project py-2"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <Card className="w-100 h-100 shadow">
        <CardActionArea>
          <CardMedia
            style={{ width: "100%", height: "250px" }}
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent style={{ height: "200px" }}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography component="p">{description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="d-flex justify-content-between">
          <Button size="small">
            <GitHubIcon />
            <a
              href={github}
              target="_blank"
              className="px-2 text-warning"
              rel="noreferrer"
            >
              Github Link
            </a>
          </Button>
          <Button size="small">
            <LiveTvIcon />{" "}
            <a
              href={live_site}
              target="_blank"
              className="px-2 text-warning"
              rel="noreferrer"
            >
              {" "}
              Live Site
            </a>
          </Button>
        </CardActions>
      </Card>
    </Col>
  );
}
