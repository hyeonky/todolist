import React from 'react';

const TodoItem = ({ task, isDone, createDate }) => {
  // console.log(mockTodoDate);

  return (
    <li>
      <input
        type="checkbox"
        checked={isDone}
        name=""
        id=""
      />
      <strong>{task}</strong>
      <span>{createDate}</span>
      <button>삭제</button>
    </li>
  );
};

export default TodoItem;
