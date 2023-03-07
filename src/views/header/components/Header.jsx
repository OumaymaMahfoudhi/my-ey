import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
    
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
   
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Navbar
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/faq" className={classes.link}>
              Manager
            </Link>
            <Avatar
                alt="Remy Sharp"
                src="https://cdn-icons-png.flaticon.com/512/7542/7542296.png"
                sx={{ width: 56, height: 56 }}
                />
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
