import React from 'react';
import PropTypes from 'prop-types';
import logo from '~/public/images/logo-starter.svg';
import brand from '~/public/text/brand';
import useStyles from './logo-style';

function Logo(props) {
  const { classes, cx } = useStyles();
  const { type, size } = props;
  return (
    <span className={cx(classes[type], classes.logo, classes[size])}>
      <img src={logo} alt="logo" />
      { type !== 'only' ? brand.starter.name : '' }
    </span>
  );
}

Logo.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string
};

Logo.defaultProps = {
  size: 'medium'
};

export default Logo;
