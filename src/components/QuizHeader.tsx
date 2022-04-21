import {
  AppBar,
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CloudSyncIcon from '@mui/icons-material/CloudSync';

interface IQuestionAnswerPair {
  question: string;
  answer: string;
}

interface Props {
  quizBalance: string;
  setAnswers: (value: IQuestionAnswerPair[]) => void;
  network: string;
  setNetwork: (value: string) => void;
}

const QuizHeader = ({
  quizBalance,
  setAnswers,
  network,
  setNetwork,
}: Props) => {
  let navigate = useNavigate();

  const handleHomeClick = () => {
    setAnswers([]);
    navigate('/');
  };

  const handleSwitchNetwork = () => {
    window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x3' }],
    });

    setNetwork('ropsten');
  };

  return (
    <AppBar position="static" sx={{ padding: '10px', marginBottom: '50px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0px 10px',
        }}
      >
        <HomeOutlinedIcon
          sx={{
            color: 'white',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          fontSize="large"
          onClick={handleHomeClick}
        />
        {network === 'ropsten' ? (
          <Chip
            icon={<AttachMoneyIcon />}
            color="secondary"
            label={
              quizBalance === '' ? (
                <CircularProgress size={20} sx={{ color: 'white' }} />
              ) : (
                `${quizBalance} QUIZ`
              )
            }
            sx={{ color: 'white', fontWeight: 'bold' }}
          />
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSwitchNetwork}
            startIcon={<CloudSyncIcon />}
          >
            Switch to ropsten
          </Button>
        )}
        <Avatar>Q</Avatar>
      </Box>
    </AppBar>
  );
};

export default QuizHeader;
