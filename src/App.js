import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lime from '@material-ui/core/colors/lime';
import yellow from '@material-ui/core/colors/yellow';
import Layout from './containers/Layout';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: lime,
    accent: yellow,
  },
  overrides: {
    MuiBottomNavigationAction: {
      label: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        letterSpacing: '0.0715em',
        textTransform: 'uppercase',
      },
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Layout />
    </MuiThemeProvider>
  );
}

export default App;
