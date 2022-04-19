import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import QuizHeader from './components/QuizHeader';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="sample-survey/*" element={<QuizHeader />}></Route>
      </Routes>
    </div>
  );
}

export default App;
