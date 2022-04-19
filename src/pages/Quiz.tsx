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
import { Outlet } from 'react-router-dom';

const Quiz = () => {
  return (
    <>
      <h1>Question 1/3</h1>
      <h3>Question 1</h3>
      <Box>
        10 secs
        <LinearProgress variant="determinate" value={100}></LinearProgress>
      </Box>
      <FormControl>
        <RadioGroup>
          <FormControlLabel label="Text 1" value="Text 1" control={<Radio />} />
          <FormControlLabel label="Text 2" value="Text 2" control={<Radio />} />
          <FormControlLabel label="Text 3" value="Text 3" control={<Radio />} />
        </RadioGroup>
        <Button variant="contained" endIcon={<NavigateNextIcon />}>
          Next
        </Button>
      </FormControl>
      <Outlet />
    </>
  );
};

export default Quiz;
