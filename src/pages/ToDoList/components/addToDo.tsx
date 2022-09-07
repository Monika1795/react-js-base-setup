import React, { useState } from 'react';

import { useAppDispatch } from '../../../redux/hooks';
import { AddDoType } from '../types';
import { addToDo } from '../../../redux/features/todoSlice';

function AddTodo() {
  const dispatch = useAppDispatch();
  const [state, setState] = useState<AddDoType>({
    content: '',
    contentError: null,
  });
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  };
  const add = () => {
    const { content } = state;
    if (content === '') {
      setState({
        ...state,
        contentError: 'You must write something!',
      });
      return;
    }
    dispatch(addToDo({ newContent: content }));
    setState({ ...state, content: '' });
  };
  const { content, contentError } = state;
  return (
    <div className="form">
      <h2>What&apos;s your plan for today</h2>
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
