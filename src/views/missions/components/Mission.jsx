
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { useParams } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(5),
        display:'flex',
      },
    },
    input: {
      display: 'none',
     
   
    },
  }));
 
  function Mission() {
    const classes = useStyles();
    const { id} = useParams();
   
  
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
        <Button variant="contained" component="span" style={{
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
                <TableCell align="right">ID Mission</TableCell>
                <TableCell align="right">Assignment</TableCell>
                <TableCell align="right">Country</TableCell>
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
                  PLM
                </TableCell>
                <TableCell align="right">{id}</TableCell>
                <TableCell align="right">platform for managing profile</TableCell>
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
                  PMC
                </TableCell>
                <TableCell align="right">02</TableCell>
                <TableCell align="right">Platform for managing cars</TableCell>
                <TableCell align="right">EY NewYork</TableCell>
              </TableRow>
              {/* Add more rows as necessary */}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
  
  export default Mission;
    

