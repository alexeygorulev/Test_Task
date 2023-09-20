import React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export function useActions(actions: any) {
  const dispatch = useDispatch();
  return React.useMemo(() => {
    return bindActionCreators(actions, dispatch);
  }, [actions, dispatch]);
}
