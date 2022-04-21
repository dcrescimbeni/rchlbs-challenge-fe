import { Paper, Slide, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fakeData from '../utils/fakeData.json';
import Timer from '../components/Timer';
import OptionsForm from '../components/OptionsForm';
import QuestionsStepper from '../components/QuestionsStepper';

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
      <QuestionsStepper currentQuestion={currentQuestion} survey={survey} />
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
          <Timer
            countdown={countdown}
            survey={survey}
            currentQuestion={currentQuestion}
          />
          <h3>{survey.questions[currentQuestion].text}</h3>
          <OptionsForm
            value={value}
            setValue={setValue}
            survey={survey}
            handleNextQuestion={handleNextQuestion}
            currentQuestion={currentQuestion}
          />
        </Paper>
      </Slide>
    </Stack>
  );
};

export default Quiz;
