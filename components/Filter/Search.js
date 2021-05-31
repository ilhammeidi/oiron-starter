import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { withTranslation } from '~/i18n';
import { useText, useTextAlign } from '~/theme/common';
import useStyles from './filter-style';

function Search(props) {
  const { t, value, updateValue } = props;
  const classes = useStyles();
  const text = useText();
  const align = useTextAlign();

  const handleUpdateValue = event => {
    updateValue(event.target.value);
  };

  return (
    <section className={classes.searchBanner}>
      <Container maxWidth="md">
        <Grid container alignItems="center" className={classes.searchBox}>
          <Grid item sm={12}>
            <h2 className={clsx(text.title2, align.textCenter)}>
              {t('common:list_title')}
            </h2>
            <h3 className={clsx(text.subtitle2, align.textCenter)}>
              {t('common:list_subtitle')}
            </h3>
            <div className={classes.search}>
              <FormControl component="form" className={classes.root}>
                <OutlinedInput
                  value={value}
                  onChange={(e) => handleUpdateValue(e)}
                  className={classes.input}
                  placeholder={t('common:list_search')}
                  startAdornment={<SearchIcon />}
                  labelWidth={0}
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
  t: PropTypes.func.isRequired,
  value: PropTypes.string,
  updateValue: PropTypes.func.isRequired,
};

Search.defaultProps = {
  value: ''
};

Search.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(Search);
