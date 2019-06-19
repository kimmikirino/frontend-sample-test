import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const styles = makeStyles(() => ({
  loading: {
    position: 'relative',
    margin: '50px 0',
    top: '50%',
    left: '50%',
    verticalAlign: 'central',
    width: 64,
    height: 64
  }
}));

const Spinner = () => {
  const classes = styles();
  return (
    <div className={classes.loading}>
      <CircularProgress />
    </div>
  );
}

export default Spinner;
