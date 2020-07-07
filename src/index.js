import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from 'components/header/Header'
import Body from 'components/body/Body'

import useStyles, {theme} from 'styles/styles'

function Main(){
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} disableGutters={true}>
        <Typography component="div" style={{ backgroundColor: '#f2f8ff', height: '100%' }}>
          <div className={classes.root} >
            <Container maxWidth={false} disableGutters={true}>

              <Grid container spacing={3} >
                <Header classes={classes}/>
                <Body classes={classes}/>
              </Grid>

            </Container>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main></Main>
    </ThemeProvider>
  );
}


ReactDOM.render(<App />, document.getElementById("root"));
