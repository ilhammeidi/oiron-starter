import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import HelpIcon from '@material-ui/icons/Help';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AdjustIcon from '@material-ui/icons/Album';
import { useTranslation } from 'next-i18next';
import useStyles from './comment-style';

function Help() {
  const classes = useStyles();

  // Translation Function
  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon classes={{ root: classes.icon }}>
            <InfoIcon color="primary" />
          </ListItemIcon>
          <ListItemText className={classes.helpItem} primary={t('list_opt') + '1'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon classes={{ root: classes.icon }}>
            <HelpIcon color="primary" />
          </ListItemIcon>
          <ListItemText className={classes.helpItem} primary={t('list_opt') + '2'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon classes={{ root: classes.icon }}>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText className={classes.helpItem} primary={t('list_opt') + '3'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon classes={{ root: classes.icon }}>
            <AdjustIcon color="primary" />
          </ListItemIcon>
          <ListItemText className={classes.helpItem} primary={t('list_opt') + '4'} />
        </ListItem>
      </List>
    </div>
  );
}

export default Help;
