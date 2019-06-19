import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { FolderRounded } from '@material-ui/icons';

const styles = makeStyles({
  icon: {
    marginRight: 10
  }
});

const Header = () => {
  const classes = styles();

  return (
    <AppBar position='relative' color='primary'>
      <Toolbar>
        <FolderRounded className={classes.icon}/>
        <Typography variant='h6' color='inherit'>
          Repositorios
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;