import { FormControlLabel, Paper, Radio } from '@mui/material';

interface IOption {
  text: string;
}

interface Props {
  option: IOption;
  index: number;
}

const OptionCard = ({ option, index }: Props) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        margin: '5px',
        padding: '5px 15px',
        width: '250px',
        borderRadius: '10px',
        backgroundColor: '#fcf0f6',
      }}
      key={index}
    >
      <FormControlLabel
        label={option.text}
        value={option.text}
        control={<Radio />}
        sx={{ width: '100%' }}
      />
    </Paper>
  );
};

export default OptionCard;
