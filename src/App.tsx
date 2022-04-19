import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Quiz from './pages/Quiz';
import Submit from './pages/Submit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="sample-survey" element={<Quiz />}>
          <Route path="submit" element={<Submit />} />
          <Route path=":questionNumber" element={<div>Question number</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
