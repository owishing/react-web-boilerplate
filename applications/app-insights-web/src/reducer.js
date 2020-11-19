import { combineReducers } from 'redux';
import { authReducer } from '@tkww/auth';
import { dashboardReducer } from '@tkww/dashboard';
import { sharedReducer } from '@tkww/shared';
import { feedbackReducer } from '@tkww/feedback';

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  shared: sharedReducer,
  feedback: feedbackReducer,
});

export default (state, action) => rootReducer(state, action);
