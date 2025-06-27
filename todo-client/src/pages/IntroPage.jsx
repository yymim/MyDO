import { useNavigate } from 'react-router-dom';

function IntroPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <h1>나만의 TO-DO</h1>
      <p>오늘 해야 할 일을 정리해보세요</p>
      <button onClick={() => navigate('/today')}>시작하기</button>
    </div>
  );
}

export default IntroPage;
