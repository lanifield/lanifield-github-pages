import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TerminalIcon from '../components/icons/TerminalIcon';

const styles = {
  root: {},
  title: {
    fontFamily: 'Roboto Slab',
    fontWeight: 700,
  },
  subtitle: {
    display: 'inline-block',
    fontFamily: 'Roboto Mono',
    fontWeight: 500,
  },
};

class Header extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({
      value,
    });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <AppBar position="static" color="primary" className={classes.root}>
        <Toolbar>
          <Typography
            component="h1"
            variant="h4"
            color="inherit"
            className={classes.title}
          >
            Lani Raukawa Field
            <Typography
              component="span"
              variant="h5"
              color="inherit"
              className={classes.subtitle}
            >
              <TerminalIcon />
              web developer
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
