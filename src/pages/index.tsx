/*
 * @Author: xuzc 1328914049@qq.com
 * @Date: 2023-10-17 15:27:12
 * @LastEditors: xuzc 1328914049@qq.com
 * @LastEditTime: 2023-10-17 20:17:47
 * @FilePath: \MyComponent\src\pages\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styles from '@/pages/Global/Styles/Global.less';
import { Input, Button, Form } from 'antd';
import { useState } from 'react';
import { generateUUID } from '@/pages/Global/PublicFunc';
import store from '@/pages/Global/Store/store';
import ListComponent from './Component/list';

export default function IndexPage(props: any) {
  const [todoList, setTodoList] = useState<Array<any>>([]);
  const [form] = Form.useForm();

  /**
   * 监听变化
   */
  store.subscribe(() => {
    const list = store.getState();
    setTodoList(list);
  });

  /**
   * 新增List
   * @param id
   */
  const AddItem = (context: string) => {
    if (context !== null && context.trim() !== '') {
      const uuid = generateUUID();
      store.dispatch({
        type: 'ADDITEM',
        value: [...todoList, { id: uuid, title: context }],
      });
    }
  };

  /**
   * 清除所有List
   */
  const ClearItem = () => {
    store.dispatch({
      type: 'CLEARITEM',
      value: [],
    });
  };

  const handleClick = () => {
    const values = form.getFieldsValue();
    AddItem(values.todo);
  };

  return (
    <div className={styles.box}>
      <h1 className={[styles.textLineCenter].join(' ')}>TODO</h1>

      <Form form={form}>
        <Form.Item
          className={[styles.flex, styles.input].join(' ')}
          name="todo"
        >
          <Input placeholder="请输入待办事项" bordered={false} allowClear />
        </Form.Item>
      </Form>
      <div className={styles.todoTitle}>{`共${todoList.length}条`}</div>

      <ListComponent />

      <Button className={styles.marginT10} type="primary" onClick={handleClick}>
        添加待办事项
      </Button>

      <Button className={styles.marginT10} type="primary" onClick={ClearItem}>
        清除所有
      </Button>
    </div>
  );
}
