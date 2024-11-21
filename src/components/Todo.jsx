import React from 'react';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor';
import TodoHd from './TodoHd';

const Todo = () => {
  return (
    <div>
      <TodoHd />
      <TodoEditor />
      <TodoList />
    </div>
  );
};

export default Todo;
