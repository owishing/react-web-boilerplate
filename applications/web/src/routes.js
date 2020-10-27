import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Login } from '@tkww/auth';
import { Dashboard } from '@tkww/dashboard';
import { Message } from '@tkww/shared';

const Routes = () => (
  <>
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Dashboard} path="/dashboard" />
        <Redirect to="/login" />
      </Switch>
    </Router>
    <Message />
  </>
);

export default Routes;
