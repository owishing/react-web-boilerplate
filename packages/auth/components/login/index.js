import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';
import { useFetch } from '@tkww/shared';
import { Github } from '@tkww/client';
import { Copyright } from '../copyright';
import { LOGIN_SUCCESS } from '../../constants';
import { useStyles } from './style';

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, data }] = useFetch();
  const github = new Github();

  useEffect(() => {
    if (!isLoading && data) {
      console.log('Login success!');
      dispatch({
        type: LOGIN_SUCCESS,
        data: { user: data },
      });
      history.push('/dashboard');
    }
  }, [isLoading, data]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div className={classes.form}>
          <TextField
            autoComplete="email"
            autoFocus
            fullWidth
            id="email"
            label="Email Address"
            margin="normal"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            variant="outlined"
          />
          <TextField
            autoComplete="current-password"
            fullWidth
            id="password"
            label="Password"
            margin="normal"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            variant="outlined"
          />
          <FormControlLabel
            control={<Checkbox color="primary" value="remember" />}
            label="Remember me"
          />
          <Button
            className={classes.submit}
            color="primary"
            disabled={isLoading}
            fullWidth
            onClick={() =>
              login(github.fetchUserInfo({ query: { email, password } }))
            }
            type="submit"
            variant="contained"
          >
            {isLoading ? <CircularProgress size="24px" /> : 'Sign In'}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
