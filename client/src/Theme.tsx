import { createMuiTheme } from '@material-ui/core/styles';
import Palette from 'Palette';

const Theme = createMuiTheme({
  typography: {
    fontFamily: 'Asap',
  },
  palette: {
    primary: { main: Palette.primary },
    secondary: { main: Palette.secondary }
  },
});

export default Theme;