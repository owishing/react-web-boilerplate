import { combineReducers } from 'redux';
import { authReducer } from '@tkww/auth';
import { dashboardReducer } from '@tkww/dashboard';
import { sharedReducer } from '@tkww/shared';

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  shared: sharedReducer,
});

export default (state, action) => rootReducer(state, action);
