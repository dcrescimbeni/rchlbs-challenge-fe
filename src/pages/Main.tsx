import { Button } from '@mui/material';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import QuizMainCard from '../components/QuizMainCard';

interface Props {
  network: string;
}

const Main = ({ network }: Props) => {
  return (
    <>
      <QuizMainCard />
      <Button startIcon={<CloudSyncIcon />}>Network: {network}</Button>
    </>
  );
};

export default Main;
