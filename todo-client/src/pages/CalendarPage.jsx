import { useEffect, useState } from 'react';
import IntroPage from './IntroPage'; // 인트로 컴포넌트를 임포트
import CalendarComponents from './Calendar'; // index.jsx는 생략 가능
import TodoList from '../components/TodoList';


function CalendarPage() {
  const [showIntro, setShowIntro] = useState(true);
  
  const [todos] = useState([]);
  const [input, setInput] = useState('');

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
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3500); // 3초 후 인트로 숨김

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  if (showIntro) {
    return <IntroPage />;
  }


  return (
    <div>
      <div className="calendar_page">
        <h2 style={{ fontSize: "0px" }}>캘린더</h2>
        <CalendarComponents />

        <div className="content_wrapper">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="할 일을 입력하세요"
          />
          <button onClick={handleAdd}>추가</button>
          <TodoList todos={todos} onDelete={handleDelete} onToggleDone={handleToggleDone} />
        </div>
      </div>
    </div>
  );
}

export default CalendarPage;
