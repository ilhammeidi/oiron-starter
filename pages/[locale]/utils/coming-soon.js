import React, { useState, Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Head from 'next/head';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTranslation } from 'next-i18next';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import Logo from '~/components/Logo';
import { useSpacing, useTextAlign, useText } from '~/theme/common';
import brand from '~/public/text/brand';

function ComingSoon() {
  const { classes } = useSpacing();
  const { classes: align } = useTextAlign();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  const [email, setEmail] = useState('');

  const handleChange = event => {
    setEmail(event.target.value);
  };

  return (
    <Fragment>
      <Head>
        <title>
          { brand.starter.name + ' - Coming Soon' }
        </title>
      </Head>
      <CssBaseline />
      <Container maxWidth="sm">
        <div className={classes.fullScreenContainer}>
          <Grid container alignItems="center">
            <Grid item md={12} xs={12} className={align.textCenter}>
              <Box
                className={classes.logo}
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={5}
              >
                <Logo type="landscape" size="large" />
              </Box>
              <div className={align.textCenter}>
                <h3 className={text.title}>
                  {t('util_soon')}
                </h3>
                <Box mb={{ sm: 5 }}>
                  <h5 className={text.subtitle2}>
                    {t('util_soon_desc')}
                  </h5>
                </Box>
                <div className={classes.form}>
                  <Box mb={{ sm: 10 }}>
                    <Grid container justifyContent="center">
                      <Grid item sm={8} xs={12}>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                          <Input
                            fullWidth
                            id="standard-adornment-password"
                            value={email}
                            onChange={handleChange}
                            endAdornment={(
                              <Button
                                variant="outlined"
                                color="secondary"
                                type="submit"
                                size="small"
                                className={classes.btnNotify}
                              >
                                {t('util_notif')}
                              </Button>
                            )}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Box>
                </div>
                <Box mt={5}>
                  <IconButton color="primary" href="#" size="large"><FacebookIcon /></IconButton>
                  <IconButton color="primary" href="#" size="large"><InstagramIcon /></IconButton>
                  <IconButton color="primary" href="#" size="large"><TwitterIcon /></IconButton>
                  <IconButton color="primary" href="#" size="large"><LinkedInIcon /></IconButton>
                </Box>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Fragment>
  );
}

export default ComingSoon;

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
