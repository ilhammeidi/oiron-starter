import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import useStyles from './title-style';

export default function TitleSecondary(props) {
  const { classes, cx } = useStyles();
  const { children, align } = props;
  const setAlign = alignment => {
    switch (alignment) {
      case 'left':
        return classes.left;
      case 'right':
        return classes.right;
      case 'center':
        return classes.center;
      default:
        return classes.left;
    }
  };
  return (
    <div className={cx(classes.titleSecondary, setAlign(align))}>
      <Typography variant="h4">
        {children}
      </Typography>
    </div>
  );
}

TitleSecondary.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
};

TitleSecondary.defaultProps = {
  align: 'left'
};
