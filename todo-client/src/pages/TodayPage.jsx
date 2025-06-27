import { useEffect, useState } from 'react';
import TodoList from '../components/TodoList';

function TodayPage() {
  const [todos] = useState([]);
  const [input, setInput] = useState('');

  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  const loadTodos = async () => {
  };

  const handleAdd = async () => {
    setInput('');
    loadTodos();
  };

  const handleDelete = async (id) => {
    loadTodos();
  };

  const handleToggleDone = async (todo) => {
    loadTodos();
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>오늘의 할 일 - {today}</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleAdd}>추가</button>
      <TodoList todos={todos} onDelete={handleDelete} onToggleDone={handleToggleDone} />
    </div>
  );
}

export default TodayPage;
