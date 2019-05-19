import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Header from './Header';
import Footer from './Footer';

const styles = {
  root: {
    width: '100vw',
    height: '100vh',
  },
  footer: {
    alignSelf: 'flex-end',
  },
};

class Layout extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.header}>
          <Header />
        </Grid>
        <Grid item xs={12} className={classes.footer}>
          <Footer />
        </Grid>
      </Grid>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
