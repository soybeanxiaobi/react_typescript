import UseAsync from './use-async';
import UseMemo from './use-memo';
import UseKeyPress from './use-keypress';
import UseDebounce from './use-debounce';
import UseRef from './use-ref';

interface IModalConfigJson {
  id: string;
  desc: string;
  initVal?: any;
  component: any;
}

export const ModelConfigJson: IModalConfigJson[] = [{
  id: 'useMemo',
  component: UseMemo,
  desc: '业务组件中存在高额计算的方法，子组件刷新同时会重新触发方法调用，需要使用useMemo阻止不必要的刷新',
},
 {
  id: 'useAsync',
  component: UseAsync,
  desc: 'hooks实现异步',
}, {
  id: 'useKeyPress',
  component: UseKeyPress,
  desc: '适用于需要监听多个按键事件',
}, {
  id: 'useDebounce',
  component: UseDebounce,
  desc: '使用hooks实现防抖功能，输入参数为搜索关键字和防抖时间',
}, 
{
  id: 'useRef & forwardRef & useImperativeHandle',
  component: UseRef,
  desc: `
    useRef: 父级获取ref,
    foewardRef: ,
    useImperativeHandle: , 
  `
}]