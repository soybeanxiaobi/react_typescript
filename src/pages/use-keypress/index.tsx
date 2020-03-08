import React, { useEffect, useState, useMemo } from 'react';
interface IProps {
  useDispatch: (action: string) => void;
}
export default (props: IProps) => {
  const isC = useKeyPress('c');
  const isA = useKeyPress('a');
  const demo = useMemo(() => {
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
      {!isA && <span style={{color: '#eee'}}>按住A试试?</span>}
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