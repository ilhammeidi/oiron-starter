import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'next-i18next';
import { useText, useTextAlign } from '~/theme/common';
import useStyles from './filter-style';

function Search(props) {
  const { value, updateValue } = props;
  const { t } = useTranslation('common');
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();

  const handleUpdateValue = event => {
    updateValue(event.target.value);
  };

  return (
    <section className={classes.searchBanner}>
      <Container maxWidth="md">
        <Grid container alignItems="center" className={classes.searchBox}>
          <Grid item sm={12}>
            <h2 className={cx(text.title2, align.textCenter)}>
              {t('list_title')}
            </h2>
            <h3 className={cx(text.subtitle2, align.textCenter)}>
              {t('list_subtitle')}
            </h3>
            <div className={classes.search}>
              <FormControl variant="standard" component="form">
                <OutlinedInput
                  value={value}
                  onChange={(e) => handleUpdateValue(e)}
                  className={classes.input}
                  placeholder={t('list_search')}
                  startAdornment={<SearchIcon />}
                />
              </FormControl>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

Search.propTypes = {
  value: PropTypes.string,
  updateValue: PropTypes.func.isRequired,
};

Search.defaultProps = {
  value: ''
};

export default Search;
