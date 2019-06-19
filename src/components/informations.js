import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

const styles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

const Informations = () => {
  const classes = styles();

  return (
    (
      <div className={classes.container}>
        <Container maxWidth='sm'>
          <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
            Github Repositories
            </Typography>
          <Typography variant='h5' align='center' color='textSecondary' paragraph>
            Esse pequeno projeto foi inscrito usando React e consiste apenas na exibição de todos
            os meus repositórios publicos do github.
        </Typography>
        </Container>
      </div>
    )
  )
}

export default Informations;