// import React from 'react'
// import { useState } from 'react'
// // import './Login.css'
// import { Link, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux'
// // import { setAlert } from '../../actions/alert'
// import { register } from '../../actions/auth'
// import PropTypes from 'prop-types'
// import InputBase from '@material-ui/core/InputBase';


// function Register({setAlert, register,isAuthenticated}) {
//     const [formData,setFormData] = useState({
//         name:'',
//         email: '',
//         password: '',
//         password2: ''
//     })

//     const {name,email,password,password2} = formData;
//     const onChange = (e) => 
//         setFormData({...formData, [e.target.name]: e.target.value});
//     const onSubmit = async(e) =>{
//         e.preventDefault() // su kien ao do react tao nen
//         // console.log("Register Success")
//         if (password!== password2) {
//            return alert('Errors!! require Email or Password')
//         }
//         register({name,email,password});
//         console.log(formData)

//     }

//     if (isAuthenticated) {
//       return <Redirect to='/'/>
//     }

//     return (
//         <section class="container">
          
//         <h1 class="large text-primary">Sign Up</h1>
//         <p class="lead"><i class="fas fa-user"></i> Create Your Account</p>
//         <form class="form" onSubmit={e=> onSubmit(e)}>
//           <div class="form-group">
//           {/* <Alert/> */}
//           </div>
//           <div class="form-group">
//             <input type="text" placeholder="Name" name="name" value={name}
//               onChange={e => onChange(e)} required />
//           </div>
         
//           <div class="form-group">
//             <input type="email" placeholder="Email Address" name="email" value={email}
//               onChange={e => onChange(e)}/>
//             <small class="form-text"
//               >This site uses Gravatar so if you want a profile image, use a
//               Gravatar email</small
//             >
//           </div>
//           <div class="form-group">
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={password}
//               onChange={e => onChange(e)}
//               minLength="8"
//             />
//           </div>
//           <div class="form-group">
//             <input
//               type="password"
//               value={password2}
//               onChange={e => onChange(e)}
//               placeholder="Confirm Password"
//               name="password2"
//               minLength="8"
//             />
//           </div>
//           <input type="submit" class="btn btn-primary" value="Register" />
//         </form>
//         <p class="my-1">
//           Already have an account? <Link to='/login'>Sign In</Link>
//         </p>
//       </section>
//       )
// }

// Register.propTypes = {
//  // go tat ptfr
//     register: PropTypes.func.isRequired,
//     isAuthenticated: PropTypes.bool,
//   }
//   const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated
//   })
  
//   export default connect(mapStateToProps,{ register })(Register)
  
  import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'
// import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom';
import { useState } from 'react';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Hung Dang
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp( {setAlert, register,isAuthenticated}) {
  const classes = useStyles();
  const [formData,setFormData] = useState({
    name:'',
    email: '',
    password: '',
    password2: ''
})

const {name,email,password,password2} = formData;
const onChange = (e) => 
    setFormData({...formData, [e.target.name]: e.target.value});
const onSubmit = async(e) =>{
    e.preventDefault() // su kien ao do react tao nen
    // console.log("Register Success")
    if (password!== password2) {
       return alert('Errors!! require Email or Password')
    }
    register({name,email,password});
    console.log(formData)

}

if (isAuthenticated) {
  return <Redirect to='/'/>
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng kí
        </Typography>
        <form className={classes.form} noValidate onSubmit={e=>onSubmit(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                value={name}
                onChange={e=> onChange(e)}
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                label="Email Address"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                value={password}
                onChange={e => onChange(e)}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password2"
                value={password2}
                onChange={e => onChange(e)}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            
          >
            Đăng kí
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
SignUp.propTypes = {
 // go tat ptfr
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  }
  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  })
  
  export default connect(mapStateToProps,{ register })(SignUp)
