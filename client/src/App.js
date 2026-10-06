import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';
import './styles/custom.css';
import CaseStudyPage from './pages/CaseStudyPage';
import ScrollToTop from './components/ScrollToTop';

// import CaseStudyPage from './pages/CaseStudyPage';
// import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
      <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* The old portfolio listing page was removed; send old links home */}
              <Route path="/portfolio" element={<Navigate to="/" replace />} />
              <Route path="/portfolio/:projectId" element={<CaseStudyPage />} />
              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;