
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { mailFolderListItems, otherMailFolderListItems } from '../../tileData';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/index.js';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    order: 1,
  },
  drawerPaper: {
    position: 'relative',
    height: 'auto',
    width: drawerWidth,
    marginTop: 64,
  },
  drawerHeader: {
    height: 56,
    [theme.breakpoints.up('sm')]: {
      height: 64,
    },
  },
  avatar: {
    margin: 10,
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

function PermanentDrawer(props) {
  const { classes } = props;
  
  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <Layout.Header avatar={classes.avatar}/>
        <Drawer
          type="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader} />
          <Divider />
          <List>{mailFolderListItems}</List>
          <Divider />
          <List>{otherMailFolderListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <Typography type="body1" noWrap>
            {'You think water moves fast? You should see ice.'}
          </Typography>
          <Link to="/hello">
  Hello
</Link>
        </main>

      </div>
    </div>
  );
}

PermanentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawer);