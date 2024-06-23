import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#DDBB4D',
    },
    secondary: {
      main: 'rgb(245, 247, 250)',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: '"优设好身体", sans-serif',
    h1: {
      fontSize: '2.2rem',
      fontWeight: 1000,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 1000,
    },
    h5: {
      fontSize: '1.1rem',
      fontWeight: 1000,
    },
    body1: {
      fontWeight: 300,
    },
    body2: {
      fontSize: '0.9rem',
    }
  },
});

export default theme;
