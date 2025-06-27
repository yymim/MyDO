import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import CalendarPage from './pages/CalendarPage';
import TodayPage from './pages/TodayPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/" element={<CalendarPage />} />
        <Route path="/today" element={<TodayPage />} />
      </Routes>
    </Router>
  );
}

export default App;