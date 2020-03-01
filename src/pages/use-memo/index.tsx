import React, { useState, useMemo } from 'react';
interface IProps {
  useDispatch: (action: string) => void;
}
interface IDispatchParams {
  type: string;
  data: any;
}
export default (props: IProps) => {
  const { useDispatch } = props;
  const [shopName, setShopName] = useState('默认商品');
  const [count, addCount] = useState(5);
  const [price, addPrice] = useState(1);
  const handleChangeShopName = (e: any) => {
    const shopName = e.target.value;
    useDispatch(`修改商品名称: ${shopName}`);
    setShopName(shopName);
  }
  const handleAddPrice = () => {
    console.log('修改商品金额', price);
    useDispatch(`修改商品金额: ${price}`)
    addPrice(price + 5);
  }
  const handleAddCount = () => {
    console.log('修改商品数量', count);
    useDispatch(`修改商品数量: ${count}`)
    addCount(count + 1);
  }
  const executeMoney = useMemo(() => {
    const r = price * count;
    console.log('计算商品总额', r);
    useDispatch(`计算商品总额: ${r}`)
    return r;
  }, [price, count])
  return (
    <div>
      <div className="label">
        <p>商品名称: {shopName}</p>
        <p>金额: ¥{price}</p>
        <p>数量: {count}</p>
        <p>商品总额: ¥{executeMoney}</p>
      </div>
      <div className="use-memo-action">
        <input placeholder="请输入商品名称" onChange={handleChangeShopName} />
        <button onClick={handleAddPrice}>增加金额</button>
        <button onClick={handleAddCount}>增加数量</button>
        <button onClick={() => useDispatch(`修改商品数量: ${count}`)}>测试重复</button>
      </div>
    </div>
  );
};
