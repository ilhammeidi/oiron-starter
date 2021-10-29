import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import clsx from 'clsx';
import { useTextAlign } from '~/theme/common';
import { withTranslation } from '~/i18n';
import useStyles from '../list-style';

function HelperWidget(props) {
  const { t } = props;
  const classes = useStyles();
  const align = useTextAlign();

  return (
    <Card className={clsx(classes.helpPaper, align.textCenter)}>
      <CardContent>
        <Typography variant="h6" align="center">
          {t('common:faq_luck')}
        </Typography>
        <Typography>
          {t('common:faq_luck_desc')}
        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth color="primary" size="large" variant="outlined">
          {t('common:faq_luck_btn')}
        </Button>
      </CardActions>
    </Card>
  );
}

HelperWidget.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common'])(HelperWidget);
