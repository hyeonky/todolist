import React from 'react';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor';
import TodoHd from './TodoHd';

const mockTodoDate = [
  {
    id: 1,
    isDone: false,
    task: '고양이 밥주기',
    createDate: '2024.04.22',
  },
  {
    id: 2,
    isDone: false,
    task: '감자, 맛동산 캐기',
    createDate: '2024.04.22',
  },
  {
    id: 3,
    isDone: false,
    task: '고양이 놀아주기',
    createDate: '2024.04.22',
  },
];

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
