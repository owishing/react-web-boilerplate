import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HIDE_MESSAGE } from '../../constants';
import style from './style.scss';

const mapping = {
  ERROR_MESSAGE: 'error',
  WARNING_MESSAGE: 'warning',
  SUCCESS_MESSAGE: 'success',
};

export const Message = () => {
  const dispatch = useDispatch();
  const { isShowing, data } = useSelector((state) => {
    const { isShowing, messageData: data } = state.shared;
    return { isShowing, data };
  });

  if (isShowing) {
    clearTimeout(Message.timer);
    Message.timer = setTimeout(() => {
      dispatch({
        type: HIDE_MESSAGE,
      });
    }, 5000);
  }

  return isShowing && data ? (
    <div className={style['global-message-container']}>
      <div className={`${style.message} ${style[mapping[data.level]]}`}>
        <p className={style.title}>{data.title}</p>
        <p className={style.text}>{data.text}</p>
      </div>
    </div>
  ) : null;
};
