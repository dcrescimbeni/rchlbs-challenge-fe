import { Step, StepLabel, Stepper } from '@mui/material';

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

interface Props {
  currentQuestion: number;
  survey: ISurvey;
}

const QuestionsStepper = ({ currentQuestion, survey }: Props) => {
  return (
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
  );
};

export default QuestionsStepper;
