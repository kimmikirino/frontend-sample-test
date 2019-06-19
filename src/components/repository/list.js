import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

import RepositoryCard from './card';

const styles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));

const RepositoryList = ({ repositories }) => {
  const classes = styles();

  return (
    <Container className={classes.cardGrid} maxWidth='md'>
      <Grid container spacing={4}>
        {repositories.map(repo => (
          <Grid item key={repo.id} xs={12} sm={6} md={4}>
            <RepositoryCard repository={repo} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}



export default RepositoryList;