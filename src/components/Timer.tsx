import { Box, LinearProgress, Typography } from '@mui/material';

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
  countdown: number;
  survey: ISurvey;
  currentQuestion: number;
}

const Timer = ({ countdown, survey, currentQuestion }: Props) => {
  return (
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
  );
};

export default Timer;
