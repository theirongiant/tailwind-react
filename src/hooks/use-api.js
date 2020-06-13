import { useState, useEffect, useCallback } from 'react';
import useIsMounted from './use-is-mounted';

export const useApi = (call, immediate = false) => {
  const isMounted = useIsMounted();
  const [results, setResults] = useState({
    data: null,
    loading: immediate,
    error: false,
    errorMsg: ''
  });

  const makeCall = useCallback(async () => {
    setResults((prev) => ({
      ...prev,
      loading: true,
      error: false,
      errorMsg: ''
    }));
    try {
      const data = await call();
      // Check to make sure our component is still mounted
      // before updating results with data
      if (isMounted.current) {
        setResults({
          loading: false,
          data
        });
      }
    } catch (error) {
      // Check to make sure our component is still mounted
      // before updating results with error details
      if (isMounted.current) {
        setResults((prev) => ({
          ...prev,
          loading: false,
          error: true,
          errorMsg: error.message
        }));
      }
    }
  }, [call, isMounted]);

  useEffect(() => {
    if (immediate) {
      const runImmediate = async () => makeCall();
      runImmediate();
    }
  }, [immediate, makeCall]);

  return [results, makeCall];
};
