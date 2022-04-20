import { Container, Box, Stack, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import DoneIcon from '@mui/icons-material/Done';

interface IQuestionAnswerPair {
  question: string;
  answer: string;
}

interface Props {
  answers: IQuestionAnswerPair[] | [];
}

const Submit = ({ answers }: Props) => {
  return (
    <Container>
      <Stack spacing={2}>
        <Typography variant="h5">
          Survey completed
          <DoneIcon />
        </Typography>

        {answers.map((answer, index) => {
          return (
            <Box
              key={index}
              sx={{
                border: '1px solid grey',
                backgroundColor: '#eee',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '10px',
              }}
            >
              <Box>
                <Typography variant="subtitle2">{answer.question}</Typography>
              </Box>
              <Box>{answer.answer}</Box>
            </Box>
          );
        })}
      </Stack>
      <Button
        endIcon={<SendIcon />}
        variant="contained"
        component={Link}
        to="/"
      >
        Submit
      </Button>
    </Container>
  );
};

export default Submit;
