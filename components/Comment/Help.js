import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import HelpIcon from '@material-ui/icons/Help';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AdjustIcon from '@material-ui/icons/Adjust';
import { withTranslation } from '~/i18n';
import useStyles from './comment-style';

function Help(props) {
  const classes = useStyles();

  // Translation Function
  const { t } = props;

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText className={classes.helpItem} primary={t('common:list_opt') + '1'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText className={classes.helpItem} primary={t('common:list_opt') + '2'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CheckCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText className={classes.helpItem} primary={t('common:list_opt') + '3'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AdjustIcon />
          </ListItemIcon>
          <ListItemText className={classes.helpItem} primary={t('common:list_opt') + '4'} />
        </ListItem>
      </List>
    </div>
  );
}

Help.propTypes = {
  t: PropTypes.func.isRequired,
};

Help.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(Help);
