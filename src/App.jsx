import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Philosophy from './pages/Philosophy';
import Experiences from './pages/Experiences';
import World from './pages/World';
import Journeys from './pages/Journeys';
import Consultation from './pages/Consultation';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/world" element={<World />} />
          <Route path="/journeys" element={<Journeys />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
