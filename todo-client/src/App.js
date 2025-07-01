import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import IntroPage from './pages/IntroPage';
import CalendarPage from './pages/CalendarPage';
import TodayPage from './pages/TodayPage';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/" element={<CalendarPage />} />
          <Route path="/today" element={<TodayPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;