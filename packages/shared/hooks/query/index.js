import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ERROR_MESSAGE, SHOW_MESSAGE } from '../../constants';

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const httpInterceptor = async (fetcher) => {
    setIsLoading(true);
    try {
      const response = await fetcher;
      if (!response.ok) {
        switch (response.status) {
          case 401:
            throw new Error('You are not Authenticated');
          case 403:
            throw new Error('You are not Authorized');
          case 500:
            throw new Error('Server Error');
          default: {
            const nok = await response.json();
            throw new Error(nok.message);
          }
        }
      }
      const result = await response.json();
      setData(result);
    } catch (e) {
      setError(e);
      dispatch({
        data: {
          title: 'Oops, an error has occurred.',
          text: e.message,
          level: ERROR_MESSAGE,
        },
        type: SHOW_MESSAGE,
      });
    }
    setIsLoading(false);
  };

  return [httpInterceptor, { isLoading, error, data }];
};
