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
import { Feedback } from '@tkww/feedback';
import { Layout } from './components';

const Routes = () => (
  <>
    <Router>
      <Route exact component={Login} path="/login" />
      <Route
        path="/:app/:platform"
        render={({ match }) => (
          <Layout>
            <Switch>
              <Route component={Dashboard} path={`${match.path}/dashboard`} />
              <Route component={Feedback} path={`${match.path}/feedback`} />
            </Switch>
          </Layout>
        )}
      />
      <Redirect to="/login" />
    </Router>
    <Message />
  </>
);

export default Routes;
