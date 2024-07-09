import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TestPage from './pages/TestPage';
import Layout from './components/Layout';
import TestPage2 from './pages/TestPage2';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test" element={<Layout />}>
          <Route index element={<TestPage />} />
        </Route>
        <Route path="/test2" element={<Layout />}>
          <Route index element={<TestPage2 />} />
        </Route>
        <Route path="/results" element={<Layout />}>
          <Route index element={<ResultPage />} />
        </Route>
        <Route path="/" element={<LoginPage />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;
