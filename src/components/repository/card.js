import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';

const styles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const RepositoryCard = ({ repository }) => {
  const classes = styles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image='https://github.githubassets.com/images/modules/logos_page/Octocat.png'
        title='octocat'
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant='h5' component='h2'>
          {repository.name}
        </Typography>
        <Typography gutterBottom variante='h5' component='h3'>
          Language: {repository.language}
        </Typography>
        <Typography>
          {(repository.description) ? repository.description : 'No Description'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' color='primary' onClick={() => window.open(repository.svn_url, '_blank')}>
          Visualizar
        </Button>
      </CardActions>
    </Card>
  )
}

export default RepositoryCard;