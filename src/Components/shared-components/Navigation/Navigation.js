import PhoneEnabledRoundedIcon from "@material-ui/icons/PhoneEnabledRounded";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "../../../App";
import DrawerItem from "./DrawerItem/DrawerItem";
import "./Navigation.css";
export default function Navigation() {
  const [personalInfo] = useContext(UserContext);
  return (
    <div className="bg-brand py-3 sticky-top nav">
      <Container className="d-flex justify-content-between align-items-center">
        <h2 className="logo text-dark">Pritom</h2>
        <div className="d-flex justify-content-cebter align-items-center">
          <span className="text-dark nav-phone">
            {" "}
            <PhoneEnabledRoundedIcon /> {personalInfo.mobile}
          </span>
          <DrawerItem />
        </div>
      </Container>
    </div>
  );
}
