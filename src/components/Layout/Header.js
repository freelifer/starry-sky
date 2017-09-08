import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import styles from './Header.css'

class Header extends Component {
  render() {
  	const classes = this.props;
    return (
      	<AppBar className={styles.appBar}>
          <Toolbar>
            <Typography type="title" color="inherit" noWrap>
              Permanent drawer
            </Typography>

            <Avatar alt="Remy Sharp" src="remy.jpg" className={classes.avatar} />
          </Toolbar>
        </AppBar>
    );
  }
}

export default Header