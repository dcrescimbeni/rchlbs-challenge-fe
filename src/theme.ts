import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#f72585' },
    secondary: { main: '#294be4' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          padding: '10px 35px',
          fontWeight: 'bold',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          backgroundColor: 'secondary',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: '25px',
          borderRadius: '20px',
        },
      },
    },
  },
});

export default theme;
