import React, { useState, useEffect } from 'react';

export function UseDebounce() {
  const [searchVal, setSearchVal] = useState('');
  const [loading, setLoading] = useState(false);
  const debouncedSearchVal = useDebounce(searchVal, 500);
  useEffect(() => {
    setLoading(true);
    fetch(debouncedSearchVal).then(() => {
      setLoading(false);
    });
  }, [debouncedSearchVal]);

  return (
    <div>
      <input
        placeholder="请搜索"
        onChange={e => setSearchVal(e.target.value)}
      />
      {loading && <div>搜索中...</div>}
    </div>
  );
}

// 防抖实现
function useDebounce(value: any, delay: any) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // Effect清除机制:清除定时器
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // 有值更新时重新触发定时器
  // 输出防抖后的值
  return debouncedValue;
}

// mock
function fetch(val: string) {
  console.log('搜索', val);
  return new Promise(resolve => {
    return setTimeout(() => {
      resolve()
    }, 800)
  })
} 