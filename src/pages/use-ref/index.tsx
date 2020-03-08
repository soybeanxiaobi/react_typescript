import React, { useRef, MutableRefObject } from 'react';
import { Input, Checkbox } from './Child';

export default () => {
  let inputRef: MutableRefObject<any> = useRef(null);
  let checkboxRef: MutableRefObject<any> = useRef(null);
  const handleCheckboxSelect = (selected: boolean) => {
    const refCurrent = checkboxRef.current;
    for (let value of Object.values(refCurrent)) {
      //@ts-ignore
      value.checked = selected;
    }
  }
  return (
    <>
      <div className="item-list">
        <Input ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>获取焦点</button>
      </div>
      <div className="item-list">
        <Checkbox ref={checkboxRef} />
        <button onClick={() => handleCheckboxSelect(true)}>全选</button>
        <button onClick={() => handleCheckboxSelect(false)}>取消全选</button>
      </div>
    </>
  );
};

