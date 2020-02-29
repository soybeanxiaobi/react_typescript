import React, { useEffect, useState, useMemo } from 'react';
// import { keyText } from './constants';
import './index.scss';

export const UseKeyPressFn = () => {
  const isC = useKeyPress('c');
  const isA = useKeyPress('a');
  const demo = useMemo(() => {
    console.log('demo memo');
    if (isC && isA) {
      return 'press c+a'
    } else if (isC) {
      return 'press c'
    } else if (isA) {
      return 'press a'
    } else {
      return 'no press'
    }
  }, [isC, isA])
  return (
    <>
      {demo}
    </>
  )
}


function useKeyPress(targetKey: string) {
  const [isCurrentKeyPress, setIsCurrentKeyPress] = useState(false);
  const handleKeyPress = ({ key }: any) => {
    key === targetKey && setIsCurrentKeyPress(true);
  }
  const handleKeyLoose = ({ key }: any) => {
    // 当匹配键值松开时,设置为false(隐藏)
    key === targetKey && setIsCurrentKeyPress(false);
  }
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyLoose);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('keyup', handleKeyLoose);
    }
  }, []);
  return isCurrentKeyPress;
}