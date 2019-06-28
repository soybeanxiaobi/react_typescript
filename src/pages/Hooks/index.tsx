import React from 'react';
import UseStateFn from './useState';
import UseEffectFn from './useEffect';
import './index.css';

export default function Hooks() {
  return (
    <>
      <div className="column">
        <UseStateFn />
      </div>
      <div className="column">
        <UseEffectFn />
      </div>
    </>
  )
}