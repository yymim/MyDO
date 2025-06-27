import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import CalendarPage from './pages/CalendarPage';
import TodayPage from './pages/TodayPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/today" element={<TodayPage />} />
      </Routes>
    </Router>
  );
}

export default App;