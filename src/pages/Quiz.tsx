import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  LinearProgress,
  Radio,
  RadioGroup,
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

  let navigate = useNavigate();

  const handleNextQuestion = (): void => {
    // Save current answer
    let question = survey.questions[currentQuestion].text;
    setAnswers([...answers, { question, answer: currentAnswer }]);

    if (currentQuestion < survey.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('submit');
    }
  };

  useEffect(() => {
    setSurvey(fakeData);
  }, []);

  if (!survey.title) return null;

  return (
    <>
      <h1>
        Question {currentQuestion + 1}/{survey.questions.length}
      </h1>
      <h3>{survey.questions[currentQuestion].text}</h3>
      <Box>
        10 secs
        <LinearProgress variant="determinate" value={100}></LinearProgress>
      </Box>
      <FormControl>
        <RadioGroup onChange={(e) => setCurrentAnswer(e.target.value)}>
          {survey.questions[currentQuestion].options.map((option, index) => {
            return (
              <FormControlLabel
                label={option.text}
                value={option.text}
                control={<Radio />}
                key={index}
              />
            );
          })}
        </RadioGroup>
        <Button
          variant="contained"
          endIcon={<NavigateNextIcon />}
          onClick={handleNextQuestion}
        >
          Next
        </Button>
      </FormControl>
    </>
  );
};

export default Quiz;
