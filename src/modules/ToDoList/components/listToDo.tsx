import React, { useEffect, useState, useCallback } from 'react';
import { AiFillEdit, AiOutlineCloseCircle } from 'react-icons/ai';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';

import { deleteToDo, editTodo } from '../../../redux/features/todoSlice';
import { fetchUsers } from '../../../redux/services/user.service';
import { ListToDoType, ShowList } from '../types';

function ListTodo() {
  const { users, todoList = [] } = useAppSelector((state) => ({
    todoList: state?.toDo?.todoList,
    users: state?.users?.users,
  }));

  const dispatch = useAppDispatch();
  const [isEditing, setEditing] = useState(false);
  const [editToDoData, setEditToDoData] = useState<ListToDoType>({
    id: null,
    content: '',
    contentError: null,
  });

  const onEditToggle = (id: number, content: string) => {
    setEditing(true);
    setEditToDoData({ ...editToDoData, id, content });
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    setEditToDoData({
      ...editToDoData,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  }, [editToDoData]);

  const { content, contentError, id } = editToDoData;
  const edit = useCallback(() => {
    if (content === '') {
      setEditToDoData({ ...editToDoData, contentError: 'You must write something!' });
      return;
    }
    if (id) {
      dispatch(editTodo({ content, id }));
    }
    setEditing(false);
  }, [editToDoData, isEditing]);

  return (
    <div>
      {isEditing ? (
        <div className="form">
          <h2 className="headingColor">Update your plan for today</h2>
          <input
            type="text"
            value={content}
            name="content"
            onChange={handleChange}
          />
          <button type="button" className="button" onClick={edit}>
            Edit
          </button>
          {contentError ? <div className="error">{contentError}</div> : null}
        </div>
      ) : (
        <ul className="todos">
          {todoList
            && todoList.length > 0
            && todoList.map((t: ShowList) => (
              <li className="grid" key={t.id}>
                <span className="content">{t.content}</span>
                <span className="todo-action">
                  <AiOutlineCloseCircle
                    className="close"
                    onClick={() => dispatch(deleteToDo({ id: t.id }))}
                  />
                  <AiFillEdit
                    className="edit"
                    onClick={() => onEditToggle(t.id, t.content)}
                  />
                </span>
              </li>
            ))}
        </ul>
      )}

      <h2 className="headingColor">User List</h2>
      <ul className="todos">
        {users && users.length > 0 && users.map((u:any) => (
          <li className="grid" key={u.id}>
            <span key={u.id} className="content">{u.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListTodo;
