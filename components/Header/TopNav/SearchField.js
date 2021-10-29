import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import { withTranslation } from '~/i18n';
import useStyles from '../header-style';

function SearchField(props) {
  const [value, setVal] = useState('');
  const { t, short } = props;
  const classes = useStyles();

  const handleUpdateValue = event => {
    setVal(event.target.value);
  };

  return (
    <section className={clsx(classes.search, short ? classes.short : '')}>
      <FormControl component="form" className={classes.root}>
        <OutlinedInput
          value={value}
          onChange={(e) => handleUpdateValue(e)}
          className={classes.input}
          placeholder={t('common:list_search')}
          startAdornment={<SearchIcon className={classes.searchIcon} />}
          labelWidth={0}
        />
      </FormControl>
    </section>
  );
}

SearchField.propTypes = {
  t: PropTypes.func.isRequired,
  short: PropTypes.bool,
};

SearchField.defaultProps = {
  short: false
};

SearchField.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(SearchField);
