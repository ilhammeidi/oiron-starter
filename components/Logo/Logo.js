import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import logo from '~/public/images/logo-starter.svg';
import brand from '~/public/text/brand';
import useStyles from './logo-style';

function Logo(props) {
  const classes = useStyles();
  const { type } = props;
  return (
    <span className={clsx(classes[type], classes.logo)}>
      <img src={logo} alt="logo" />
      { type !== 'only' ? brand.starter.name : '' }
    </span>
  );
}

Logo.propTypes = {
  type: PropTypes.string.isRequired
};

export default Logo;
