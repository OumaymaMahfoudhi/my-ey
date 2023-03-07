
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';





const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(5),
        display: 'flex',
      },
    },
    table: {
        background:'#000',
        width: '100%',
        
      },
    input: {
      display: 'none',
      
    },
    palette: {
        primary: {
          yellow: '#FFE600',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },
  }));
 
  function Profile() {
    const classes = useStyles();
   
  
    return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span" style={{
        borderRadius: 35,
        backgroundColor: "#FFE600",
        padding: "10px 30px",
        fontSize: "18px"
    }}>
        
          Upload
        </Button>
      </label>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Edit</TableCell>
                <TableCell align="right">Delete</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Post</TableCell>
                <TableCell align="right">Assignment</TableCell>
                <TableCell align="right">Mission</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="right">
                    <IconButton aria-label="edit">
                    <Edit />
                    </IconButton>
                </TableCell>
                <TableCell align="right">
                    <IconButton aria-label="delete">
                    <Delete />
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                  John Doe
                </TableCell>
                <TableCell align="right">developer React</TableCell>
                <TableCell align="right">Project X</TableCell>
                <TableCell align="right">EY France</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">
                    <IconButton aria-label="edit">
                    <Edit />
                    </IconButton>
                </TableCell>
                <TableCell align="right">
                    <IconButton aria-label="delete">
                    <Delete />
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                  Oumayma Mhafoudhi
                </TableCell>
                <TableCell align="right">developer React</TableCell>
                <TableCell align="right">Project X</TableCell>
                <TableCell align="right">EY NewYork</TableCell>
              </TableRow>
              {/* Add more rows as necessary */}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
  
  export default Profile;
    

