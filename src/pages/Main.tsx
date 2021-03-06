import {
  Button,
  CardMedia,
  Typography,
  Box,
  Paper,
  Container,
} from '@mui/material';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Main = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '10px',
        margin: '15px',
      }}
    >
      <Box sx={{ width: '150px' }}>
        <CardMedia
          component="img"
          image="https://48tools.com/wp-content/uploads/2015/09/shortlink.png"
          alt="quiz image"
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Container>
          <Typography variant="h5" sx={{ marginBottom: '10px' }}>
            Sample quiz
          </Typography>
          <Button
            endIcon={<NavigateNextIcon />}
            variant="contained"
            component={Link}
            to="/sample-survey"
          >
            Start
          </Button>
        </Container>
      </Box>
    </Paper>
  );
};

export default Main;
