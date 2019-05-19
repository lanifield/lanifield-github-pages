import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
  root: {
    verticalAlign: 'middle',
    marginLeft: '1em',
  },
});

function TerminalIcon(props) {
  const { classes } = props;
  return (
    <SvgIcon viewBox="0 0 640 512" className={classes.root}>
      <path d="M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z" />
    </SvgIcon>
  );
}

TerminalIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TerminalIcon);
