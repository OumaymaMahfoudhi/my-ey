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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    backgroundColor: '#2E2E38',

    
  },
  color:{
    backgroundColor: '#2E2E38',
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
    marginRight: theme.spacing(50),
    justifyContent: 'space-between',
    backgroundColor: '#2E2E38',
    
   
  },
  link: {
    textDecoration: "none",
    justifyContent: 'space-between',
    color: "white",
    fontSize: "20px",
    backgroundColor: '#2E2E38',
    marginRight: theme.spacing(5),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    
    <AppBar position="static" className={classes.color}>
      <CssBaseline />
      <Toolbar>
        <Typography className={classes.logo}></Typography>
          <div className={classes.navlinks}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
           <div style={{  textAlign: 'center',}}>
            <Typography className={classes.link} variant="h1"  display="block">
              Manager
              </Typography>
              </div> 
              <Typography className={classes.link} variant="body1" display="block">
              manager@ey.com
              </Typography>
              </div>
          
            <Avatar
                alt="Remy Sharp"
                src="https://cdn-icons-png.flaticon.com/512/7153/7153080.png"
                sx={{ width: 80, height: 80 }}
                />
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
