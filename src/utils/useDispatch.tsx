import React, { useReducer } from 'react';

export const useTextArrDispatch = (initVal: string[] = []) => {
  const [data, dispatch] = useReducer((state: any[], logText: string) => {
    return [...state, logText]
  }, [initVal]);
  return [data, dispatch];
}

