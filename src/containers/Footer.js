import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '../components/icons/HomeIcon';
import EducationIcon from '../components/icons/EducationIcon';
import ExperienceIcon from '../components/icons/ExperienceIcon';
import ExamplesIcon from '../components/icons/ExamplesIcon';

const styles = {
  root: {},
};

class Footer extends React.Component {
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
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />{' '}
        <BottomNavigationAction label="Education" icon={<EducationIcon />} />{' '}
        <BottomNavigationAction label="Experience" icon={<ExperienceIcon />} />{' '}
        <BottomNavigationAction label="Examples" icon={<ExamplesIcon />} />{' '}
      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
