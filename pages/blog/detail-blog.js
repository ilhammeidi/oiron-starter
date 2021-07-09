import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useSpacing } from '~/theme/common';
import Header from '../../components/Header/BlogHeader';
import Article from '../../components/Blog/Article';
import Sidebar from '../../components/Blog/Sidebar';
import Footer from '../../components/Footer';
import brand from '../../public/text/brand';

function BlogDetail(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <Head>
        <title>
          { brand.starter.name }
          &nbsp; - Blog Detail
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={classes.containerGeneral}>
          <Box pt={5}>
            <Container>
              <Grid container spacing={4}>
                <Grid item md={8}>
                  <Article />
                </Grid>
                <Grid item md={4}>
                  <Sidebar />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </div>
        <div id="footer">
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

BlogDetail.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

BlogDetail.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default BlogDetail;
