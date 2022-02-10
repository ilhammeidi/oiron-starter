import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import Head from 'next/head';
import { withTranslation } from '~/i18n';
import { useSpacing } from '../theme/common';
import Header from '../components/Header/Basic';
import Login from '../components/Forms/Login';
import Footer from '../components/Footer';
import brand from '../public/text/brand';
import link from '../public/text/link';

function LoginPage(props) {
   // Translation Function
  const { t } = props;

  const classes = useSpacing();

  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <Head>
        <title>
          { brand.starter.name }
          &nbsp; - Login
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          text={t('common:header_register')}
          href={link.starter.register}
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Container>
          <div className={clsx(classes.containerGeneral, classes.containerFront)}>
            <Login />
          </div>
        </Container>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

LoginPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

LoginPage.propTypes = {
  t: PropTypes.func.isRequired,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default withTranslation(['common'])(LoginPage);
