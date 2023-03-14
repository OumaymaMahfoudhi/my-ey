/** @format */

import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    backgroundColor: "#FFFFFF",
    marginRight:-16,
  },
  color: {
    backgroundColor: "#FFFFFF",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    marginRight: theme.spacing(50),
    marginLeft: 300,
    position: "relative",
    zIndex: 100,
    justifyContent: "space-between",
    backgroundColor: "#00000",
    width: 80,
    
  },
  link: {
    textDecoration: "none",
    justifyContent: "space-between",
    color: "white",
    fontSize: "20px",
    backgroundColor: "#FFFFFF",
    marginRight: theme.spacing(5),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.color}>
      <CssBaseline />

      <Toolbar>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div className={classes.navlinks}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ textAlign: "center" }}>
                <div
                  className={classes.link}
                  variant='h1'
                  display='block'
                  style={{ color: "#2E2E38" }}
                >
                  <div className={classes.logo}>
                    <img
                      src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/EY_logo_2019.svg/1200px-EY_logo_2019.svg.png'
                      style={{ width: 50, height: 50,marginLeft:'-190px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.navlinks}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ textAlign: "center" }}>
                <Typography
                  className={classes.link}
                  variant='h5'
                  display='block'
                  style={{ color: "#2E2E38",fontSize: 18 }}
                >
                  Manager
                </Typography>
              </div>
              <Typography
                className={classes.link}
                variant="filled"
                display='block'
                style={{ color: "#2E2E38",fontSize: 16, }}
              >
                manager@ey.com
              </Typography>
            </div>

            <Avatar
              alt='manager'
              src='https://cdn-icons-png.flaticon.com/512/7542/7542296.png'
              style={{ width: 40, height: 40 }}
            />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
