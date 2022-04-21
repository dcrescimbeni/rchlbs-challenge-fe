import { Box, Button, FormControl, RadioGroup } from '@mui/material';
import OptionCard from './OptionCard';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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
  value: string;
  setValue: (value: string) => void;
  survey: ISurvey;
  handleNextQuestion: () => void;
  currentQuestion: number;
}

const OptionsForm = ({
  value,
  setValue,
  survey,
  handleNextQuestion,
  currentQuestion,
}: Props) => {
  return (
    <FormControl>
      <RadioGroup
        onChange={(e) => {
          setValue(e.target.value);
        }}
        sx={{ marginBottom: '10px' }}
        value={value}
      >
        {survey.questions[currentQuestion].options.map((option, index) => {
          return <OptionCard option={option} index={index} />;
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
  );
};

export default OptionsForm;
