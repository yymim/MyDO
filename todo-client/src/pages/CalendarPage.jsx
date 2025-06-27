import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IntroPage from './IntroPage'; // 인트로 컴포넌트를 임포트
import CalendarComponents from './Calendar'; // index.jsx는 생략 가능


function CalendarPage() {
  const navigate = useNavigate();
  const [showIntro, setShowIntro] = useState(true);

  
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
      <h2>캘린더</h2>
      <CalendarComponents />
      <button onClick={() => navigate('/today')}>오늘</button>
    </div>
  );
}

export default CalendarPage;
