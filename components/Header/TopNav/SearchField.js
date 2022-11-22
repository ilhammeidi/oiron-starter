import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import { useTranslation } from 'next-i18next';
import useStyles from '../header-style';

function SearchField(props) {
  const [value, setVal] = useState('');
  const { short } = props;
  const { t } = useTranslation('common');
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
          placeholder={t('list_search')}
          startAdornment={<SearchIcon className={classes.searchIcon} />}
          labelWidth={0}
        />
      </FormControl>
    </section>
  );
}

SearchField.propTypes = {
  short: PropTypes.bool,
};

SearchField.defaultProps = {
  short: false
};

export default SearchField;
