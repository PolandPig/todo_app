import React from 'react';
import styles from '@/pages/Global/Styles/Global.less';
import { DeleteOutlined } from '@ant-design/icons';
import { colors } from '@/pages/Component/interface';
import store from '@/pages/Global/Store/store';

export default function index() {
  /**
   * 监听变化
   */
  store.subscribe(() => {
    const list = store.getState();
  });

  /**
   * 移除list
   * @param id
   */
  const DeleteItem = (id: string) => {
    const todoList = store.getState();
    const result = todoList.filter((item) => item.id !== id);
    store.dispatch({
      type: 'DELETEITEM',
      value: result,
    });
  };

  return (
    <div className={styles.container}>
      {store.getState()?.map((item: any) => {
        return (
          <div className={styles.listItem}>
            {item.title}{' '}
            <DeleteOutlined
              style={{ color: colors.gray, cursor: 'pointer' }}
              onClick={() => {
                DeleteItem(item.id);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
