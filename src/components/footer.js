import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Footer = () => {
  const classes = styles();

  return (
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        Ygor Santos
      </Typography>
      <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
        Software Developer
      </Typography>
    </footer>
  )
}

export default Footer;