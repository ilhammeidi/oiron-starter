import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { useTextAlign } from '~/theme/common';
import useStyles from '../list-style';

function HelperWidget() {
  const { t } = useTranslation('common');
  const classes = useStyles();
  const align = useTextAlign();

  return (
    <Card className={clsx(classes.helpPaper, align.textCenter)}>
      <CardContent>
        <Typography variant="h6" align="center">
          {t('faq_luck')}
        </Typography>
        <Typography>
          {t('faq_luck_desc')}
        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth color="primary" size="large" variant="outlined">
          {t('faq_luck_btn')}
        </Button>
      </CardActions>
    </Card>
  );
}

export default HelperWidget;
