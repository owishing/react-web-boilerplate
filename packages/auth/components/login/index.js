import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  CircularProgress,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useFetch } from '@tkww/shared';
import { Auth } from '@tkww/client';
import { LOGIN_SUCCESS } from '../../constants';
import style from './style.scss';

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, data }] = useFetch();
  const auth = new Auth();

  useEffect(() => {
    if (!isLoading && data) {
      dispatch({
        type: LOGIN_SUCCESS,
        data,
      });
      history.push('/planner/android/dashboard');
    }
  }, [isLoading, data]);

  return (
    <div className={style.container}>
      <div className={style.form}>
        <div className={style.title}>AppInsights</div>
        <TextField
          autoFocus
          className={style.email}
          fullWidth
          id="email"
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          size="small"
          value={email}
          variant="outlined"
        />
        <TextField
          className={style.password}
          fullWidth
          id="password"
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          size="small"
          type="password"
          value={password}
          variant="outlined"
        />
        <Button
          className={style.submit}
          color="primary"
          disabled={isLoading}
          fullWidth
          onClick={() => login(auth.login({ email, password }))}
          type="submit"
          variant="contained"
        >
          {isLoading ? <CircularProgress size="24px" /> : 'LOG IN'}
        </Button>
        <div className={style.tools}>
          <FormControlLabel
            className={style['remember-me']}
            control={<Checkbox color="primary" value="remember" />}
            label="Remember me"
          />
          <Link className={style.forgot}>Forgot password?</Link>
        </div>
      </div>
    </div>
  );
};
