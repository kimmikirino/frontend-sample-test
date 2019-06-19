import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';

const styles = makeStyles({
  app: {
    flexGrow: 1
  }
})

const App = () => {
  const classes = styles();
  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.app}>
        <Header />
        <Home />
        <Footer />
      </div>
    </Fragment>
  )
}

export default App;