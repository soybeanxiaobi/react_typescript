import React, { useReducer } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/monokai.css';
import 'codemirror/lib/codemirror.css';

import { ModelConfigJson } from './config';
import { useTextArrDispatch } from '../utils/useDispatch';
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
  // const [consoleTextArr, dispatch] = useReducer((state, logText) => {
  //   console.log('state, logText', state, logText);
  //   return [...state, logText]
  // }, []);
  return (
    <div className="page-wrap">
      {
        ModelConfigJson.map(({ id, desc, initVal = '', component: Comp }: any) => {
          const [data = [], dispatch]: any = useTextArrDispatch(initVal);
          return (
            <div key={id} className="model-wrap">
              <p className="model-title">{id}</p>
              <p className="model-desc">{desc}</p>
              <div className="model-content">
                <CodeMirror className="code" value="code" options={options} />
                <div className="action">
                  <Comp useDispatch={dispatch} />
                </div>
                <div className="console">
                  <div className="log-title">Console</div>
                  <div className="log-info">{data.map((item: string) => <p key={item}>{item}</p>)}</div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}