/*
 * @Author: xuzc 1328914049@qq.com
 * @Date: 2023-10-17 16:14:04
 * @LastEditors: xuzc 1328914049@qq.com
 * @LastEditTime: 2023-10-17 19:56:54
 * @FilePath: \MyComponent\src\pages\Global\Store\store.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore } from 'redux';
import reducer from '@/pages/Global/Store/Reducer/index';
const arr: Array<any> = [];
const store = createStore(reducer, arr);
export default store;
