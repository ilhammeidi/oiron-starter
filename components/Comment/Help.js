import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AdjustIcon from '@mui/icons-material/Album';
import { useTranslation } from 'next-i18next';
import useStyles from './comment-style';

function Help() {
  const { classes } = useStyles();

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
