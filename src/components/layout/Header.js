import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appbar: {
    color: grey
  }
}));

function AppHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default' className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h6' className={classes.title}>
            Users
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default AppHeader;
