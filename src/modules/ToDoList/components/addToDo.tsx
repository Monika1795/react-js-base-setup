import React, { useState, useCallback } from 'react';

import { useAppDispatch } from '../../../redux/hooks';
import { AddDoType } from '../types';
import { addToDo } from '../../../redux/features/todoSlice';

function AddTodo() {
  const dispatch = useAppDispatch();
  const [addTodoData, setAddToDo] = useState<AddDoType>({
    content: '',
    contentError: null,
  });

  const handleChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    setAddToDo({
      ...addTodoData,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  }, [addTodoData]);

  const add = useCallback(() => {
    const { content } = addTodoData;
    if (content === '') {
      setAddToDo({
        ...addTodoData,
        contentError: 'You must write something!',
      });
      return;
    }
    dispatch(addToDo({ newContent: content }));
    setAddToDo({ ...addTodoData, content: '' });
  }, [addTodoData]);

  const { content, contentError } = addTodoData;
  return (
    <div className="form">
      <h2 className="headingColor">What&apos;s your plan for today</h2>
      <input
        type="text"
        value={content}
        name="content"
        onChange={handleChange}
      />
      <button
        type="button"
        className="button"
        onClick={add}
      >
        Add
      </button>
      {contentError
        ? <div className="error">{contentError}</div> : null}
    </div>
  );
}
export default AddTodo;
