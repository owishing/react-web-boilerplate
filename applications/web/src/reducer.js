import { combineReducers } from 'redux';
import { authReducer } from '@tkww/auth';
import { dashboardReducer } from '@tkww/dashboard';

const rootReducer = combineReducers({
    auth: authReducer,
    dashboard: dashboardReducer,
});

export default (state, action) => {
    return rootReducer(state, action);
};
