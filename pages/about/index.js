import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useSpacing } from '../../theme/common';
import Header from '../../components/Header';
import Counter from '../../components/Counter';
import Banner from '../../components/About/Banner';
import PhotoSlider from '../../components/About/PhotoSlider';
import TeamSlider from '../../components/About/TeamSlider';
import AboutVideo from '../../components/About/Video';
import AboutProgress from '../../components/About/Progress';
import ContactMap from '../../components/Forms/ContactMap';
import CallAction from '../../components/CallAction';
import CompanyLogo from '../../components/CompanyLogo';
import Footer from '../../components/Footer';
import brand from '../../public/text/brand';

function Landing(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
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
            <Grid container>
              <Grid item md={6}>
                <Box px={{ md: 6 }}>
                  <AboutVideo />
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box px={{ md: 6 }}>
                  <AboutProgress />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className={classes.spaceTopShort}>
          <TeamSlider />
        </div>
        <div className={clsx(classes.spaceTopShort, classes.spaceBottomShort)}>
          <PhotoSlider />
        </div>
        <CallAction />
        <div className={classes.spaceTopShort}>
          <ContactMap full />
        </div>
        <Footer toggleDir={onToggleDir} />
      </div>
    </React.Fragment>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};


export default Landing;
