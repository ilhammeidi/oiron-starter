import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'next-i18next';
import useStyles from './action-style';

function CallAction() {
  // Translation Function
  const { t } = useTranslation('common');

  const classes = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container alignItems="center">
            <Grid item md={9} xs={12}>
              <Typography variant="h4" gutterBottom display="block">
                {t('about_ready')}
              </Typography>
              <Typography display="block" component="p">
                Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
              </Typography>
            </Grid>
            <Grid item md={3} xs={12}>
              <Grid container alignItems="center">
                <Button size="large" variant="outlined" color="secondary" href="/contact" className={classes.button}>
                  {t('btn_contact')}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Container>
  );
}

export default CallAction;
