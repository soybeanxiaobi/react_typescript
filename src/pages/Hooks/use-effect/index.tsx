import React, { useState, useEffect } from 'react';

export function UseEffectFn() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
      <p>点击 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>
        点击
      </button>
    </>
  )
}