import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import Counter from '~/components/Counter';
import Banner from '~/components/About/Banner';
import PhotoSlider from '~/components/About/PhotoSlider';
import TeamSlider from '~/components/About/TeamSlider';
import AboutVideo from '~/components/About/Video';
import AboutProgress from '~/components/About/Progress';
import ContactMap from '~/components/Forms/ContactMap';
import CallAction from '~/components/CallAction';
import CompanyLogo from '~/components/CompanyLogo';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';

function About(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <Head>
        <title>
          { brand.starter.name }
          &nbsp; - About
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Banner />
        <div className={classes.spaceTopShort}>
          <CompanyLogo />
        </div>
        <Counter />
        <div className={classes.spaceTopShort}>
          <Container>
            <Grid container spacing={6}>
              <Grid item md={6} xs={12}>
                <AboutVideo />
              </Grid>
              <Grid item md={6} xs={12}>
                <AboutProgress />
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className={classes.spaceTopShort}>
          <TeamSlider />
        </div>
        <div className={clsx(classes.spaceTopShort, classes.spaceBottom)}>
          <PhotoSlider />
        </div>
        <CallAction />
        <div className={classes.spaceTop}>
          <ContactMap full />
        </div>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

About.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default About;

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
