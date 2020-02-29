import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import Test from './Test';

export function UseStateFn(props: any) {
  const [times, setTimes] = useState(110);  // 定时器state, 默认值为110
  const [name, resetNames] = useState('xiaobe');
  const [todos, setTodos] = useState([{ text: '学习 hook' }]);
  console.log('props', props);
  const params = useParams();
  console.log('params', params);
  return (
    <>
      <h2>useState</h2>
      <div>
        <p>click {times} times</p>
        <button onClick={() => setTimes(times + 1)}>
          Click
        </button>
      </div>
      <div>
        <p>我叫 {name}</p>
        <button onClick={() => resetNames('用户1001')}>
          重置名字
        </button>
      </div>
      <div>
        <p>我的默认值是 {todos[0].text}</p>
        <button onClick={() => setTodos([{ text: '我已经被初始化了' }])}>
          我要初始化text的值
        </button>
      </div>
      <Test />
    </>
  )
}