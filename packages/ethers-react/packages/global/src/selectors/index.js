import { useState, useEffect } from 'react';

/**
 * @function useEnableSelector
 */
export const useEnableSelector = state => {
  const [isEnabled, setEnabled] = useState(false);
  const [isDispatched, setDispatched] = useState(false);

  useEffect(() => {
    if (state.isEnableRequested) setDispatched(true);
  }, [state.isEnableRequested]);

  useEffect(() => {
    if (state.isEnableSuccess) setEnabled(true);
  }, [state.isEnableSuccess]);

  return {
    ready: isEnabled,
    dispatched: isDispatched
  };
};
