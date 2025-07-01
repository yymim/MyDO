import Lottie from 'lottie-react';
import animationData from '../assets/intro.json'; // 상대경로는 src 내부 기준
import './IntroPage.css';

function IntroPage() {

  return (
    <div className="intro-fade" style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'opacity 1.5s'
    }}>
      <Lottie animationData={animationData} loop={false} />
    </div>
  );
}

export default IntroPage;
