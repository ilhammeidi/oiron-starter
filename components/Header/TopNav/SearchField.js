import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'next-i18next';
import useStyles from '../header-style';

function SearchField(props) {
  const [value, setVal] = useState('');
  const { short } = props;
  const { t } = useTranslation('common');
  const { classes, cx } = useStyles();

  const handleUpdateValue = event => {
    setVal(event.target.value);
  };

  return (
    <section className={cx(classes.search, short ? classes.short : '')}>
      <FormControl variant="standard" component="form" className={classes.root}>
        <OutlinedInput
          value={value}
          onChange={(e) => handleUpdateValue(e)}
          className={classes.input}
          placeholder={t('list_search')}
          startAdornment={<SearchIcon className={classes.searchIcon} />}
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
