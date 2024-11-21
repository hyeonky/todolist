import React from 'react';

const Todo = () => {
  return (
    <div>
      <div>
        <strong>2024.04.22</strong>
        <p>오늘 할 일을 적어보세요.</p>
      </div>

      <div>
        <h2>새로운 Todo 작성하기</h2>
        <input
          type="text"
          name=""
          id=""
        />
        <button></button>
      </div>
      <div>
        <h2>할 일 목록</h2>
        <input type="text" />
        <ul>
          <li>
            <strong>고양이 밥주기</strong>
            <span>2024.04.22</span>
            <button>삭제</button>
          </li>
          <li>
            <strong>감자, 맛동산 캐기</strong>
            <span>2024.04.22</span>
            <button>삭제</button>
          </li>
          <li>
            <strong>고양이 놀아주기</strong>
            <span>2024.04.22</span>
            <button>삭제</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Todo;
