import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from '@mui/material';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import { Link } from 'react-router-dom';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

interface Props {
  quizBalance: string;
}

const Main = ({ quizBalance }: Props) => {
  return (
    <>
      <Chip icon={<AttachMoneyIcon />} label={`${quizBalance} QUIZ`} />
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
