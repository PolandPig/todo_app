import React from 'react';
import styles from '@/pages/Global/Styles/Global.less';
import { DeleteOutlined } from '@ant-design/icons';
import { colors } from '@/pages/Component/interface';
import store from '@/pages/Global/Store/store';

export default function index(props: any) {
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
    const { form } = props;
    store.dispatch({
      type: 'DELETEITEM',
      value: result,
    });
    props.UpdateIdFunction('');
    form.resetFields();
  };

  /**
   * 点击事件
   * @param item
   */
  const HandleUpdate = (item: any) => {
    const { form } = props;
    form.setFieldsValue({
      todo: item.title,
    });
    props.UpdateIdFunction(item.id);
  };

  return (
    <div className={styles.container}>
      {store.getState()?.map((item: any) => {
        return (
          <div
            className={styles.listItem}
            onClick={(e) => {
              e.stopPropagation();
              HandleUpdate(item);
            }}
          >
            {item.title}{' '}
            <DeleteOutlined
              style={{ color: colors.gray, cursor: 'pointer' }}
              onClick={(e) => {
                e.stopPropagation();
                DeleteItem(item.id);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
