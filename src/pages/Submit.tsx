import { Box, Stack, Button, Typography, Paper, Slide } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';

interface IQuestionAnswerPair {
  question: string;
  answer: string;
}

interface Props {
  answers: IQuestionAnswerPair[] | [];
  setAnswers: (value: IQuestionAnswerPair[]) => void;
}

const Submit = ({ answers, setAnswers }: Props) => {
  const [visible, setVisible] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = () => {
    setAnswers([]);
    setVisible(false);
    let transitionInterval = setInterval(() => {
      navigate('/');
      clearInterval(transitionInterval);
    }, 350);
  };

  return (
    <Slide direction="left" in={visible}>
      <Paper
        elevation={10}
        sx={{
          margin: '20px',
          padding: '20px 30px',
          backgroundColor: '#eeeeee',
          borderRadius: '10px',
        }}
      >
        <Stack spacing={1} sx={{ marginBottom: '30px' }}>
          <Typography variant="h5">
            Survey completed
            <DoneIcon />
          </Typography>

          {answers.map((answer, index) => {
            return (
              <Paper
                key={index}
                sx={{
                  display: 'flex',
                  margin: 'auto',
                  padding: '5px 15px',
                  borderRadius: '10px',
                  backgroundColor: '#fcf0f6',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <Box>
                  <Typography variant="subtitle2">{answer.question}</Typography>
                </Box>
                <Box>{answer.answer ? answer.answer : 'Not answered'}</Box>
              </Paper>
            );
          })}
        </Stack>
        <Button
          endIcon={<SendIcon />}
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Paper>
    </Slide>
  );
};

export default Submit;
