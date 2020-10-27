import * as constants from '../constants';

const ACTION_HANDLERS = {
  [constants.SHOW_LOADING]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [constants.HIDE_LOADING]: (state) => ({
    ...state,
    isLoading: false,
  }),
  [constants.SHOW_MESSAGE]: (state, { data: { level, title, text } }) => ({
    ...state,
    isShowing: true,
    messageData: {
      level,
      title,
      text,
    },
  }),
  [constants.HIDE_MESSAGE]: (state) => ({
    ...state,
    isShowing: false,
    messageData: {},
  }),
};

const initialState = {
  isLoading: false,
  isShowing: false,
  messageData: {},
};

export const sharedReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
