import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useTranslation } from 'next-i18next';
import { useTextAlign } from '~/theme/common';
import useStyles from '../list-style';

function HelperWidget() {
  const { t } = useTranslation('common');
  const { classes, cx } = useStyles();
  const { classes: align } = useTextAlign();

  return (
    <Card className={cx(classes.helpPaper, align.textCenter)}>
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
