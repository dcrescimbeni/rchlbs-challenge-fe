import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  LinearProgress,
  Radio,
  RadioGroup,
  Stack,
  Step,
  StepLabel,
  Stepper,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useEffect, useState } from 'react';
import fakeData from '../utils/fakeData.json';
import { useNavigate } from 'react-router-dom';

interface IQuestionAnswerPair {
  question: string;
  answer: string;
}

interface Props {
  answers: IQuestionAnswerPair[] | [];
  setAnswers: (value: IQuestionAnswerPair[]) => void;
}

interface ISurvey {
  title: string;
  image: string;
  questions: {
    text: string;
    image: string;
    lifetimeSeconds: number;
    options: { text: string }[];
  }[];
}

const Quiz = ({ answers, setAnswers }: Props) => {
  const [survey, setSurvey] = useState<ISurvey>({
    title: '',
    image: '',
    questions: [],
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [countdown, setCountdown] = useState<number>(0);

  let navigate = useNavigate();

  const handleNextQuestion = (): void => {
    // Save current answer
    setAnswers([
      ...answers,
      {
        question: survey.questions[currentQuestion].text,
        answer: currentAnswer,
      },
    ]);

    // Handle question or submit display
    if (currentQuestion < survey.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('submit');
    }
  };

  useEffect(() => {
    setSurvey(fakeData);
  }, []);

  useEffect(() => {
    if (survey.questions.length) {
      setCountdown(survey.questions[currentQuestion].lifetimeSeconds);
    }
  }, [survey, currentQuestion]);

  // Timer
  // useEffect(() => {
  //   let timer = setInterval(() => {
  //     setCountdown(countdown - 1);
  //     if (countdown === 0) handleNextQuestion();
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, [survey, countdown]);

  if (!survey.title) return null;

  return (
    <Stack>
      <Stepper activeStep={currentQuestion}>
        {survey.questions.map((question, index) => {
          return (
            <Step key={index}>
              <StepLabel></StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Stack
        spacing={2}
        sx={{
          margin: '20px',
          padding: '20px',
          backgroundColor: '#eeeeee',
          borderRadius: '10px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box>{countdown} seconds</Box>
          <Box sx={{ minWidth: '250px', margin: '5px' }}>
            <LinearProgress
              variant="determinate"
              value={
                (countdown * 100) /
                survey.questions[currentQuestion].lifetimeSeconds
              }
            />
          </Box>
        </Box>
        <h3>{survey.questions[currentQuestion].text}</h3>
        <FormControl>
          <RadioGroup
            onChange={(e) => setCurrentAnswer(e.target.value)}
            sx={{ marginBottom: '10px' }}
          >
            {survey.questions[currentQuestion].options.map((option, index) => {
              return (
                <Box
                  sx={{
                    display: 'flex',
                    margin: '5px',
                    padding: '5px 10px',
                    minWidth: '250px',
                    borderRadius: '10px',
                    border: '1px solid grey',
                  }}
                >
                  <FormControlLabel
                    label={option.text}
                    value={option.text}
                    control={<Radio />}
                    key={index}
                    sx={{ width: '100%' }}
                  />
                </Box>
              );
            })}
          </RadioGroup>
          <Box>
            <Button
              variant="contained"
              endIcon={<NavigateNextIcon />}
              onClick={handleNextQuestion}
            >
              Next
            </Button>
          </Box>
        </FormControl>
      </Stack>
    </Stack>
  );
};

export default Quiz;
