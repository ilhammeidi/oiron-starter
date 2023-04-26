import React, { useState, useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';
import PropTypes from 'prop-types';
import LangIcon from '@mui/icons-material/Language';
import InputAdornment from '@mui/material/InputAdornment';
import SelectMUI from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import languageDetector from '~/lib/languageDetector';
import i18nextConfig from '~/next-i18next.config';

const useStyles = makeStyles({ uniqId: 'select_lang' })((theme, _params, classes) => ({
  selectLang: {
    maxWidth: 250,
    overflow: 'hidden',
    position: 'relative',
    display: 'block',
    margin: `${theme.spacing(2)}px auto ${theme.spacing(4)}px`,
    [`& .${classes.icon}`]: {
      top: 29,
      color: theme.palette.primary.dark,
      position: 'relative',
    },
    '& svg': {
      color: theme.palette.primary.dark,
    },
    '& > div + div': {
      paddingLeft: theme.spacing(4),
      width: 'calc(100% - 32px)',
    }
  },
}));

function SelectLang(props) {
  const [ctn, setCtn] = useState(null);
  const { classes } = useStyles();

  // Translation Function
  const router = useRouter();
  const { t, i18n } = useTranslation('common');
  const [values, setValues] = useState({
    lang: i18n.language
  });

  useEffect(() => {
    setCtn(document.getElementById('main-wrap'));
  }, []);

  function handleChange(event) {
    const lang = event.target.value;

    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: lang,
    }));

    if (i18nextConfig.ssg) {
      let href = router.asPath;
      let pName = router.pathname;
      Object.keys(router.query).forEach((k) => {
        if (k === 'locale') {
          pName = pName.replace(`[${k}]`, lang);
          return;
        }
        pName = pName.replace(`[${k}]`, router.query[k]);
      });
      if (lang) {
        href = pName;
      }
      router.push(href);
    } else {
      const { pathname, asPath, query } = router;
      router.push({ pathname, query }, asPath, { locale: lang });
    }

    languageDetector.cache(lang);
    if (lang === 'ar') {
      props.toggleDir('rtl');
    } else {
      props.toggleDir('ltr');
    }
  }

  return (
    <SelectMUI
      variant="standard"
      value={values.lang}
      onChange={handleChange}
      MenuProps={{
        container: ctn
      }}
      startAdornment={(
        <InputAdornment className={classes.icon} position="start">
          <LangIcon />
        </InputAdornment>
      )}
      className={classes.selectLang}
      input={<OutlinedInput name="lang" id="outlined-lang-simple" />}
    >
      {i18nextConfig.i18n.locales.map((locale) => (
        <MenuItem key={locale} value={locale}>{t(locale)}</MenuItem>
      ))}
    </SelectMUI>
  );
}

SelectLang.propTypes = {
  toggleDir: PropTypes.func,
};

SelectLang.defaultProps = {
  toggleDir: () => {},
};

export default SelectLang;
