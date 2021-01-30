import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Redirect} from 'react-router-dom'
import { setAlert } from '../../actions/alert';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import './Login.css'
import background from '../../styles/img/Login.png'



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function LoginUi({login,isAuthenticated,auth:{user},getBasket}) {
  const classes = useStyles();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const signInWithGoogle = () =>{
    
  }
  const signInWithFacebook = () =>{

  }

    const onSubmit = async(e) =>{
      e.preventDefault() // su kien ao do react tao nen

      login({email,password});
      console.log({email,password})

  }
  if (isAuthenticated && user) {
    return <Redirect to='/admin/dashboard'/>
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          <form className={classes.form}  onSubmit={e=>onSubmit(e)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type='text'
              label="Email Address"
              value={email}
              autoComplete="email"
              autoFocus
              onChange={e=> setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              // value={password}
              label="Password"
              type="password"
              autoComplete="current-password"
              autoFocus
              onChange={e=> setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Đăng nhập
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Quên mật khẩu?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register">
                  "Bạn chưa có mật khẩu? Đăng kí"
                </Link>
              </Grid>
            </Grid>
            
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
LoginUi.propTypes = {
  // go tat ptfr
  setAlert: PropTypes.func.isRequired, // go tat ptfr
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  auth: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth
})

export default connect(mapStateToProps,{ setAlert,login })(LoginUi)