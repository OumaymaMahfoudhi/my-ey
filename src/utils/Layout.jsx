import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';

import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Outlet,Link } from 'react-router-dom';
import Header from '../views/header/components/Header';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
   
  },
  drawerPaper: {
    width: drawerWidth,
   
  },
  toolbar: theme.mixins.toolbar,
  backgroundColor: "#FFE600",
}));

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <Header/>
    
    <div className={classes.root}>
   
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button key="Dashboard">
         
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItemText primary="Dashboard" />
            </Link>
          </ListItem>
          <ListItem button key="Missions">
            <ListItemIcon><AssignmentIcon /></ListItemIcon>
            <Link to="/mission" style={{ textDecoration: 'none' }}>
            <ListItemText primary="Missions" />
            </Link>
          </ListItem>
          <ListItem button key="Profile">
            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
            <Link to="/profile" style={{ textDecoration: 'none' }}>
            <ListItemText primary="Profile" />
            </Link>
          </ListItem>
          <ListItem button key="Log Out">
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </Drawer>
      <main style={{width:'100%'}}>

       <Outlet />
      </main>
    </div>
    </div>
  );
}

export default Layout;
