import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './list-style';

function Description() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  return (
    <Grid container justifyContent="center">
      <Grid item lg={10} md={12}>
        <div className={classes.about}>
          <Grid container spacing={6}>
            <Grid item sm={7} xs={12}>
              <Box mb={3}>
                <Typography variant="h4" className={text.subtitle}>
                  {t('list_desc')}
                </Typography>
              </Box>
              <Typography>
                Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Typography>
                Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero. Proin varius, tortor faucibus tempor pharetra, nunc mi consectetur enim, nec posuere ante magna vitae quam.
              </Typography>
              <div className={classes.linkArea}>
                <Button className={classes.textBtn} color="secondary">
                  <i className="ion-android-share-alt" />
                  Share
                </Button>
                <Button className={classes.textBtn} color="secondary">
                  <i className="ion-film-marker" />
                  Trivia
                </Button>
                <Button className={classes.textBtn} color="secondary">
                  <i className="ion-ios-star" />
                  Rate this
                </Button>
              </div>
            </Grid>
            <Grid item sm={5} xs={12}>
              <div className={classes.person}>
                <Typography variant="h6">
                  Property 1
                </Typography>
                <Typography>
                  Item 1, Item 2, Item 3, Item 4, Item 5
                </Typography>
                <Typography variant="h6">
                  Property 2
                </Typography>
                <Typography>
                  Item 1, Item 2, Item 3, Item 4, Item 5
                </Typography>
                <Typography variant="h6">
                  Property 3
                </Typography>
                <Typography>
                  Item 1, Item 2, Item 3, Item 4, Item 5
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}

export default Description;
