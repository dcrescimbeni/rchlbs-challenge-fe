import { Container, Box, Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface IQuestionAnswerPair {
  question: string;
  answer: string;
}

interface Props {
  answers: IQuestionAnswerPair[] | [];
}

const Submit = ({ answers }: Props) => {
  return (
    <div>
      <Container>
        <Stack>
          {answers.map((answer, index) => {
            return (
              <Box key={index}>
                {answer.question}: {answer.answer}
              </Box>
            );
          })}
        </Stack>
        <Button component={Link} to="/">
          Submit
        </Button>
      </Container>
    </div>
  );
};

export default Submit;
