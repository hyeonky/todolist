import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ mockTodoDate }) => {
  return (
    <div>
      <h2>할 일 목록</h2>
      <input type="text" />
      <ul>
        {mockTodoDate.map(
          (item, index) => (
            console.log(item),
            (
              <TodoItem
                key={item.id}
                isDone={item.isDone}
                task={item.task}
                createDate={item.createDate}
              />
            )
          )
        )}
      </ul>
    </div>
  );
};

export default TodoList;
