import * as constants from '../constants';

const ACTION_HANDLERS = {
  [constants.LOGIN]: (state) => {
    return {
      ...state,
      isFetchingLogin: true,
      token: null,
    };
  },
  [constants.LOGIN_SUCCESS]: (state, action) => {
    return {
      ...state,
      isFetchingLogin: false,
      token: action.data.token,
    };
  },
  [constants.LOGIN_FAILURE]: (state) => {
    return {
      ...state,
      isFetchingLogin: false,
    };
  },
  [constants.LOGOUT]: (state) => {
    return {
      ...state,
      isFetchingLogout: true,
      token: null,
    };
  },
  [constants.LOGOUT_SUCCESS]: () => {
    return {};
  },
  [constants.LOGOUT_FAILURE]: (state) => {
    return {
      ...state,
      isFetchingLogout: false,
    };
  },
};

const initialState = {
  isFetchingLogin: false,
  isFetchingLogout: false,
  token: null,
};

export const authReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
