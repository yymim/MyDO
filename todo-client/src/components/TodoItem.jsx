import { useState } from 'react';

function TodoItem({ todo, onDelete, onToggleDone }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <li
      style={{
        margin: '0.5rem 0',
        padding: '0.5rem',
        border: '1px solid #ddd',
        background: todo.done ? '#eee' : '#fff',
        textDecoration: todo.done ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
      onClick={() => setShowDetail(!showDetail)}
    >
      <div>
        <strong>{todo.title}</strong>
        <button onClick={(e) => { e.stopPropagation(); onDelete(todo.id); }}>삭제</button>
        <button onClick={(e) => { e.stopPropagation(); onToggleDone(todo); }}>
          {todo.done ? '되돌리기' : '완료'}
        </button>
      </div>
      {showDetail && <div style={{ marginTop: '0.5rem' }}>{todo.content || '내용 없음'}</div>}
    </li>
  );
}

export default TodoItem;
