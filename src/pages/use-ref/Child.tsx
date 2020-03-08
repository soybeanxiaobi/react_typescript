import React, { forwardRef, useImperativeHandle, useRef, Ref, MutableRefObject } from 'react';

// 单一ref
export const Input = forwardRef((_, ref: Ref<any>): JSX.Element => {
  return (
    <input ref={ref} placeholder="点击按钮获取焦点" type="text" />
  );
});

// 自定义ref回传对象
export const Checkbox = forwardRef((_, ref: Ref<any>): JSX.Element => {
  const checkboxRef1: MutableRefObject<any> = useRef();
  const checkboxRef2: MutableRefObject<any> = useRef();
  const checkboxRef3: MutableRefObject<any> = useRef();
  // 可选择暴露
  useImperativeHandle(ref, () => ({
    iptRef1: checkboxRef1.current,
    iptRef2: checkboxRef2.current,
    iptRef3: checkboxRef3.current,
  }))
  return (
    <>
      <div>
        <input ref={checkboxRef1} type="checkbox" />
        <span>选项1</span>
      </div>
      <div>
        <input ref={checkboxRef2} type="checkbox" />
        <span>选项2</span>
      </div>
      <div>
        <input ref={checkboxRef3} type="checkbox" />
        <span>选项3</span>
      </div>
    </>
  );
});

