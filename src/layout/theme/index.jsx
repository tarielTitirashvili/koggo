import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: lime,
    secondary: purple,
  },
});


export default function UsingColorObject(props) {
  const { children } = props
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}