/*
 * @Author: xuzc 1328914049@qq.com
 * @Date: 2023-10-17 16:09:49
 * @LastEditors: xuzc 1328914049@qq.com
 * @LastEditTime: 2023-10-17 20:10:10
 * @FilePath: \MyComponent\src\pages\Global\Store\Reducer\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Action } from '@/pages/Global/Interface/GlobalInterface';

/**
 * 处理action的reducer
 * @param state
 * @param action
 * @returns
 */
const reducer = (state: any[], action: Action) => {
  switch (action.type) {
    case 'DELETEITEM':
      return action.value;
    case 'ADDITEM':
      return action.value;
    case 'CLEARITEM':
      return [];
    default:
      return action.value;
  }
};

export default reducer;
