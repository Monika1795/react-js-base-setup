import React, { useEffect, useState } from 'react';
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
  const [state, setState] = useState<ListToDoType>({
    id: null,
    content: '',
    contentError: null,
  });

  const onEditToggle = (id: number, content: string) => {
    setEditing(true);
    setState({ ...state, id, content });
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  };
  const { content, contentError, id } = state;
  const edit = () => {
    if (content === '') {
      setState({ ...state, contentError: 'You must write something!' });
      return;
    }
    if (id) {
      dispatch(editTodo({ content, id }));
    }
    setEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className="form">
          <h2>Update your plan for today</h2>
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

      <h2>User List</h2>
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
