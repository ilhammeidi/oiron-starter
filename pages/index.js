import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import Head from 'next/head';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useSpacing } from '../theme/common';
import Header from '../components/Header';
import BannerSlider from '../components/BannerSlider';
import Feature from '../components/Feature';
import Counter from '../components/Counter';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Blog from '../components/Blog';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import Corner from '../components/Corner';
import Notification from '../components/Notification';
import brand from '../public/text/brand';

const sectionMargin = margin => (margin * 15);

function Landing(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.starter.name }
          &nbsp; - Home Page
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          home
        />
        <main className={classes.containerWrap}>
          <section id="home">
            <BannerSlider />
          </section>
          <section className={clsx(classes.spaceTop, classes.spaceBottomShort)} id="feature">
            <Container fixed>
              <Feature />
            </Container>
          </section>
          <section>
            <Counter />
          </section>
          <section className={classes.spaceTop} id="testimonials">
            <Testimonials />
          </section>
          <section className={classes.spaceTop} id="pricing">
            <Pricing />
          </section>
          <section className={clsx(classes.spaceTop, classes.spaceBottom)} id="blog">
            <Blog />
          </section>
          <section id="subscribe">
            <Subscribe />
          </section>
        </main>
        <Hidden smDown>
          <Corner />
        </Hidden>
        <Footer toggleDir={onToggleDir} />
        <Hidden mdDown>
          <Notification />
        </Hidden>
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
