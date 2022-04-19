import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import MainHeader from '../components/MainHeader';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <MainHeader />
      <Card>
        <CardMedia
          component="img"
          image="https://48tools.com/wp-content/uploads/2015/09/shortlink.png"
          alt="quiz image"
          height="130"
        />
        <CardContent>
          <Typography variant="h5">Sample quiz</Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to="/sample-survey">
            Start
          </Button>
        </CardActions>
      </Card>
      <Button startIcon={<CloudSyncIcon />}>Reconnect</Button>
    </>
  );
};

export default Main;
