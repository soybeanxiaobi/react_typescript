import React, { useReducer } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/monokai.css';
import 'codemirror/lib/codemirror.css';

import UseMemoFn from './use-memo';
import './index.scss';

const options = {
  lineNumbers: true,                  //显示行号  
  mode: "javascript",                 //定义mode  
  theme: "monokai",                   //选中的theme  
  readOnly: true,                     //只读
  tabSize: 4,                         //tab键缩进
};

export const PageIndex = () => {
  // @ts-ignore
  const [consoleTextArr, dispatch] = useReducer((state, logText) => {
    console.log('state, logText', state, logText);
    return [...state, logText]
  }, []);
  console.log('consoleTextArr', consoleTextArr);
  return (
    <div className="page-wrap">
      <p className="model-title">useMemo</p>
      <p className="model-desc">业务组件中存在高额计算的方法，子组件刷新同时会重新触发方法调用，需要使用useMemo阻止不必要的刷新</p>
      <div className="model-wrap">
        <CodeMirror className="code-wrap" value="code" options={options} />
        <div className="action-wrap">
          <UseMemoFn useDispatch={dispatch} />
        </div>
        <div className="console-wrap">
          <div className="title">Console</div>
          <div className="">{consoleTextArr.map(item => <p key={item}>{item}</p>)}</div>
        </div>
      </div>
    </div>
  )
}