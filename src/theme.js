import {createTheme } from '@mui/material/styles';
const primary ={
    main: '#f0c040',
    dark: '#d8ad3a'
}
const theme = createTheme({
  palette: {
    primary: {
      main: primary.main,
      dark: primary.dark,
    },
  },
  typography:{
    subtitle1:{
      fontWeight: 500
    },
    subtitle:{
      fontSize: '1.25rem',
      fontWeight: 400
    }
  }
});

export default theme