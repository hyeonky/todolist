'use client';

import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor';
import TodoHd from './TodoHd';
import { mockTodoDate } from '@/data/todoData';

const Todo = () => {
  const [todos, setTodos] = useState(mockTodoDate);

  // 할 일 추가하는 함수
  const addTodo = (task) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        isDone: false,
        task: task,
        createDate: new Date().toLocaleDateString(),
      },
    ]);
  };

  return (
    <div>
      <TodoHd />
      <TodoEditor addTodo={addTodo} />
      {/* 구조분해할당 */}
      <TodoList mockTodoDate={todos} />
    </div>
  );
};

export default Todo;
