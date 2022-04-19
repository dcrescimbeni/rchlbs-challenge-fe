import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Quiz from '../pages/Quiz';
import Submit from '../pages/Submit';

interface IQuestionAnswerPair {
  question: string;
  answer: string;
}

const QuizHeader = () => {
  const [answers, setAnswers] = useState<IQuestionAnswerPair[] | []>([]);

  return (
    <div>
      <h1>Header</h1>
      <Routes>
        <Route
          index
          element={<Quiz answers={answers} setAnswers={setAnswers} />}
        />
        <Route path="/submit" element={<Submit answers={answers} />} />
      </Routes>
    </div>
  );
};

export default QuizHeader;
