import PhoneEnabledRoundedIcon from "@material-ui/icons/PhoneEnabledRounded";
import React from "react";
import { Container } from "react-bootstrap";
import DrawerItem from "./DrawerItem/DrawerItem";
import "./Navigation.css";
export default function Navigation() {
  return (
    <div className="bg-brand py-3 nav">
      <Container className="d-flex justify-content-between">
        <h2 className="logo text-dark">Pritom</h2>
        <div className="d-flex justify-content-cebter align-items-center">
          <PhoneEnabledRoundedIcon />
          <span className="text-dark">+8801882787668</span>
          <DrawerItem />
        </div>
      </Container>
    </div>
  );
}
