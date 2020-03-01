import React, { useState, useEffect, useCallback } from 'react';
import { Grid } from 'zent';
import './index.scss';
interface IProps {
  useDispatch: (action: string) => void;
}
// Usage
export default function UseAsyncFn(props: IProps) {
  const { execute, pending, value, error } = useAsync(myFunction, false);

  return (
    <div>
      <div className="columns">
        {value && <div>{value}</div>}
        {error && <div>{error}</div>}
        <button onClick={execute} disabled={pending}>
          {!pending ? 'Click me' : 'Loading...'}
        </button>
      </div>
      <div className="columns">
        <button>获取列表数据</button>
        <Grid datasets={[]} columns={[]} />
      </div>
    </div>
  );
}

// An async function for testing our hook.
// Will be successful 50% of the time.
const myFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      rnd <= 5
        ? resolve('Submitted successfully 🙌')
        : reject('Oh no there was an error 😞');
    }, 2000);
  });
};

// Hook
const useAsync = (asyncFunction: any, immediate = true) => {
  const [pending, setPending] = useState(false);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(() => {
    setPending(true);
    setValue(null);
    setError(null);
    return asyncFunction()
      .then((response: any) => setValue(response))
      .catch((error: any) => setError(error))
      .finally(() => setPending(false));
  }, [asyncFunction]);

  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, pending, value, error };
};