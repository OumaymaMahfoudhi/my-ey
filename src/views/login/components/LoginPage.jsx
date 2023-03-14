import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
    width: '35%',
    height: '35%',
    display:'flex',
    marginLeft:'100px',
    marginBottom:'50px'
  },
}));

function ChildTestcompnenet(props){
  return(
    <div>
      {props.password}
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
    <div className={classes.root}>
         <img src={image} alt="EY" className={classes.image} />
      
      <div className={classes.formContainer}>
        <form className={classes.form} onSubmit={handleSubmit}>
        <Typography >
        <img src={imagee} alt="logo" className={classes.imagee} />
        </Typography>
        <Typography variant="h6" component="h1" style={{display:'flex', marginLeft:'40px', marginBottom:'20px'}}>
            welcome to Dev Matrix
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
        <ChildTestcompnenet myemail = {"test email : "}  email ={email}/>
        <ChildTestcompnenet mypassword={"password : "} password={password}/>
      </div>
    </div>
  );
}

export default LoginPage;
