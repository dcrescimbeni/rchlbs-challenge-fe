import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ethers } from 'ethers';
import './App.css';
import QuizHeader from './components/QuizHeader';
import Main from './pages/Main';
import quizAbi from './utils/quizAbi';
import { ThemeProvider } from '@mui/system';
import theme from './theme';
import Quiz from './pages/Quiz';
import Submit from './pages/Submit';
import { Container } from '@mui/material';

interface IQuestionAnswerPair {
  question: string;
  answer: string;
}

function App() {
  const [quizBalance, setQuizBalance] = useState('');
  const [network, setNetwork] = useState('');
  const [answers, setAnswers] = useState<IQuestionAnswerPair[] | []>([]);

  useEffect(() => {
    const connectMetamask = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      let userAddress = await signer.getAddress();
      let network = await provider.getNetwork();
      setNetwork(network.name);

      const quiz = {
        address: '0x74F0B668Ea3053052DEAa5Eedd1815f579f0Ee03',
        abi: quizAbi,
      };

      const quizContract = new ethers.Contract(quiz.address, quiz.abi, signer);
      let quizBalance = await quizContract.balanceOf(userAddress);
      let formattedQuizBalance = ethers.utils.formatUnits(quizBalance, 6);
      setQuizBalance(formattedQuizBalance);
    };

    if (window.ethereum) {
      connectMetamask();
    } else {
      alert('install metamask extension!!');
    }
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <QuizHeader
          quizBalance={quizBalance}
          setAnswers={setAnswers}
        ></QuizHeader>
        <Container maxWidth="sm">
          <Routes>
            <Route path="/" element={<Main network={network} />} />
            <Route
              path="sample-survey"
              element={<Quiz answers={answers} setAnswers={setAnswers} />}
            ></Route>
            <Route
              path="sample-survey/submit"
              element={<Submit answers={answers} setAnswers={setAnswers} />}
            />
          </Routes>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
