import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface IQuestionAnswerPair {
  question: string;
  answer: string;
}

interface Props {
  answer: IQuestionAnswerPair;
}

const AnswerCard = ({ answer }: Props) => {
  return (
    <Paper
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
};

export default AnswerCard;
