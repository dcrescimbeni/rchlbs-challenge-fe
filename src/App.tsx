import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ethers } from 'ethers';
import './App.css';
import QuizHeader from './components/QuizHeader';
import Main from './pages/Main';
import quizAbi from './utils/quizAbi';

function App() {
  const [quizBalance, setQuizBalance] = useState('');

  useEffect(() => {
    const connectMetamask = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      let userAddress = await signer.getAddress();

      console.log(userAddress);

      const quiz = {
        address: '0x74F0B668Ea3053052DEAa5Eedd1815f579f0Ee03',
        abi: quizAbi,
      };

      const quizContract = new ethers.Contract(quiz.address, quiz.abi, signer);
      let quizBalance = await quizContract.balanceOf(userAddress);
      let formattedQuizBalance = ethers.utils.formatUnits(quizBalance, 6);
      setQuizBalance(formattedQuizBalance);
      // console.log(typeof formattedQuizBalance);
    };

    if (window.ethereum) {
      connectMetamask();
    } else {
      alert('install metamask extension!!');
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main quizBalance={quizBalance} />} />
        <Route path="sample-survey/*" element={<QuizHeader />}></Route>
      </Routes>
    </div>
  );
}

export default App;
