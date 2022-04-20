import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ethers } from 'ethers';
import './App.css';
import QuizHeader from './components/QuizHeader';
import Main from './pages/Main';
import quizAbi from './utils/quizAbi';
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';

function App() {
  const [quizBalance, setQuizBalance] = useState('');
  const [network, setNetwork] = useState('');

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
      // console.log(typeof formattedQuizBalance);
    };

    if (window.ethereum) {
      connectMetamask();
    } else {
      alert('install metamask extension!!');
    }
  }, []);

  const theme = createTheme({
    palette: {
      primary: { main: '#f72585' },
      secondary: { main: '#4361ee' },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '30px',
            padding: '10px 35px',
            fontWeight: 'bold',
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            backgroundColor: 'secondary',
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            height: '25px',
            borderRadius: '20px',
          },
        },
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={<Main quizBalance={quizBalance} network={network} />}
          />
          <Route path="sample-survey/*" element={<QuizHeader />}></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
