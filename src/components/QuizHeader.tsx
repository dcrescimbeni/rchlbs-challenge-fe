import { AppBar, Avatar, Box, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

interface IQuestionAnswerPair {
  question: string;
  answer: string;
}

interface Props {
  quizBalance: string;
  setAnswers: (value: IQuestionAnswerPair[]) => void;
}

const QuizHeader = ({ quizBalance, setAnswers }: Props) => {
  let navigate = useNavigate();

  const handleHomeClick = () => {
    setAnswers([]);
    navigate('/');
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
          sx={{ color: 'white' }}
          fontSize="large"
          onClick={handleHomeClick}
        />
        <Chip
          icon={<AttachMoneyIcon />}
          color="secondary"
          label={`${quizBalance} QUIZ`}
          sx={{ color: 'white', fontWeight: 'bold' }}
        />
        <Avatar>Q</Avatar>
      </Box>
    </AppBar>
  );
};

export default QuizHeader;
