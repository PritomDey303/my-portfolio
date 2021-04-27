import { Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import LockOpenRoundedIcon from "@material-ui/icons/LockOpenRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";
import "./DrawerItem.css";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function DrawerItem() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "About", "Resume", "Projects", "Review", "Contact"].map(
          (text, index) => (
            <a className="drawerLink" href={`#${text.toLowerCase()}`}>
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 !== 0 ? (
                    <LockOpenRoundedIcon />
                  ) : (
                    <DashboardRoundedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </a>
          )
        )}
      </List>
      <Divider />

      <List>
        {["Dashboard", "Login"].map((text, index) => (
          <NavLink
            className="drawerLink"
            activeClassName="activeDrawerLink"
            exact
            to={`/${text.toLocaleLowerCase()}`}
          >
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 !== 0 ? (
                  <LockOpenRoundedIcon />
                ) : (
                  <DashboardRoundedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuRoundedIcon style={{ fontSize: "50px" }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
