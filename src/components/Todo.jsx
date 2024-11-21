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
    isDone: true,
    task: '감자, 맛동산 캐기',
    createDate: '2024.04.21',
  },
  {
    id: 3,
    isDone: true,
    task: '고양이 놀아주기',
    createDate: '2024.04.23',
  },
];

const Todo = () => {
  return (
    <div>
      <TodoHd />
      <TodoEditor />
      {/* 구조분해할당 */}
      <TodoList mockTodoDate={mockTodoDate} />
    </div>
  );
};

export default Todo;
