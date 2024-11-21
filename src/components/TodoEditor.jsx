'use client';
import classNames from 'classnames';
import React, { useState } from 'react';
const TodoEditor = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const onSubmit = () => {
    addTodo(task);
    setTask('');
  };
  const onChangeTask = (e) => {
    setTask(e.target.value);
  };
  return (
    <div>
      <h2>새로운 Todo 작성하기</h2>
      <div>
        <form>
          <input
            type="text"
            value={task}
            onChange={onChangeTask}
            placeholder="할 일을 추가로 입력해주세요."
            className="p-3 rounded"
          />
          <button
            onClick={onSubmit} // 함수 등록 상태
            disabled={!task}
            className={classNames('p-3', task ? 'bg-gray-200' : 'bg-blue-400')}
          >
            할 일 추가
          </button>
        </form>
      </div>
    </div>
  );
};
export default TodoEditor;
