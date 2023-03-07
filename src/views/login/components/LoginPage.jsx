import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

import image from '../assets/ey.png'; 
import imagee from '../assets/eylogo.png'; // import the image file




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    minheight: '100vh' ,
    minwidth: '100vw'
  },
  palette: {
    primary: {
      main: '#FFE600',
    },
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    justifyContent: 'center',
  },
  input: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(2),
  },
  image: {
    width: '50%',
    height: '100%',
    objectFit:'inherit',
  },
  imagee: {
    width: '5%',
    height: '1%',
    objectFit:'cover',
    alignItems: 'center',

  },
}));

function ChildTestcompnenet(props){
  return(
    <div>
      {props.propsexemple}
      {props.email}
    </div>
  )
}

function LoginPage() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <Container className={classes.root}>
      <img src={image} alt="login" className={classes.image} />
      <Container className={classes.formContainer}>
        
        <form className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h4" component="h1" gutterBottom>
        <img src={imagee} alt="login" className={classes.image} />
        </Typography>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={classes.input}
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={classes.input}
            required
          />
              {/* <Link to="/" style={{ textDecoration: 'none' }}> */}
              <Button
                type="submit"
                variant="contained"
                className={classes.button}
                style={{
                  borderRadius: 35,
                  backgroundColor: "#FFE600",
                  padding: "10px 30px",
                  fontSize: "18px"
              }}
              >
                Login
              </Button>

              {/* </Link>  */}
          
        </form>
        <ChildTestcompnenet propsexemple = {"test email"}  email ={email}/>
      </Container>
    </Container>
  );
}

export default LoginPage;
