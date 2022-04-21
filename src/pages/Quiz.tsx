import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  LinearProgress,
  Paper,
  Radio,
  RadioGroup,
  Slide,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
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
  const [countdown, setCountdown] = useState<number>(0);
  const [value, setValue] = useState('');
  const [slideTransition, setSlideTransition] = useState(true);

  let navigate = useNavigate();

  const handleNextQuestion = () => {
    // Save current answer
    setAnswers([
      ...answers,
      {
        question: survey.questions[currentQuestion].text,
        answer: value,
      },
    ]);

    // Clear current answer
    setValue('');

    // Transition
    setSlideTransition(false);
    let transitionInterval = setInterval(() => {
      // Handle question or submit display
      if (currentQuestion < survey.questions.length - 1) {
        setSlideTransition(true);
        setCurrentQuestion(currentQuestion + 1);
      } else {
        navigate('submit');
      }
      clearInterval(transitionInterval);
    }, 350);
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
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [survey, countdown]);

  if (!survey.title) return null;

  return (
    <Stack sx={{ margin: '20px' }}>
      <Stepper
        activeStep={currentQuestion}
        sx={{ minWidth: '300px', margin: 'auto' }}
      >
        {survey.questions.map((question, index) => {
          return (
            <Step key={index}>
              <StepLabel></StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Slide in={slideTransition} direction="right">
        <Paper
          elevation={10}
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
            <Box>
              <Typography variant="subtitle2">{countdown} seconds</Typography>
            </Box>
            <Box sx={{ minWidth: '250px', margin: '5px' }}>
              <LinearProgress
                variant="determinate"
                color="primary"
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
              onChange={(e) => {
                setValue(e.target.value);
              }}
              sx={{ marginBottom: '10px' }}
              value={value}
            >
              {survey.questions[currentQuestion].options.map(
                (option, index) => {
                  return (
                    <Paper
                      sx={{
                        display: 'flex',
                        margin: '5px',
                        padding: '5px 15px',
                        width: '250px',
                        borderRadius: '10px',
                        backgroundColor: '#fcf0f6',
                      }}
                    >
                      <FormControlLabel
                        label={option.text}
                        value={option.text}
                        control={<Radio />}
                        key={index}
                        sx={{ width: '100%' }}
                      />
                    </Paper>
                  );
                }
              )}
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
        </Paper>
      </Slide>
    </Stack>
  );
};

export default Quiz;
