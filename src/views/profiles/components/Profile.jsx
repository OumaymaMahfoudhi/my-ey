/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(10),
      width: "95%",

      display: "flex",
    },
  },
  input: {
    display: "none",
  },
}));

function Profile() {
  const classes = useStyles();
  const { id } = useParams();

  return (
    <div className={classes.root}>
      <input
        accept='image/*'
        className={classes.input}
        id='contained-button-file'
        multiple
        type='file'
      />
      <label htmlFor='contained-button-file'>
        <Button
          variant='contained'
          component='span'
          style={{
            borderRadius: 3,
            backgroundColor: "#FFE600",
            padding: "8px 15px",
            fontSize: "15px",
          }}
        >
          Upload Developer Resume
        </Button>
      </label>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'>Edit</TableCell>
              <TableCell align='right'>Delete</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align='right'>ID Developer</TableCell>
              <TableCell align='right'>Last Name</TableCell>
              <TableCell align='right'>Assgin</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align='right'>
                <IconButton aria-label='edit'>
                  <Edit />
                </IconButton>
              </TableCell>
              <TableCell align='right'>
                <IconButton aria-label='delete'>
                  <Delete />
                </IconButton>
              </TableCell>
              <TableCell component='th' scope='row'>
                Emilie
              </TableCell>
              <TableCell align='right'>01</TableCell>
              <TableCell align='right'>mahfoudhi</TableCell>
              <TableCell align='right'>No</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right'>
                <IconButton aria-label='edit'>
                  <Edit />
                </IconButton>
              </TableCell>
              <TableCell align='right'>
                <IconButton aria-label='delete'>
                  <Delete />
                </IconButton>
              </TableCell>
              <TableCell component='th' scope='row'>
                oumayma
              </TableCell>
              <TableCell align='right'>02</TableCell>
              <TableCell align='right'>mahfoudhi</TableCell>
              <TableCell align='right'>Yes</TableCell>
            </TableRow>
            {/* Add more rows as necessary */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Profile;
