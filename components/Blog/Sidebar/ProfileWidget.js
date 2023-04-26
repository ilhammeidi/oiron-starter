import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import LocalPhone from '@mui/icons-material/LocalPhone';
import DateRange from '@mui/icons-material/DateRange';
import LocationOn from '@mui/icons-material/LocationOn';
import { useTranslation } from 'next-i18next';
import Paper from '../../Paper';
import useStyles from '../blog-style';

function ProfileWidget() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  return (
    <Paper title={t('blog_about')} icon="ion-ios-contact-outline" whiteBg noMargin desc="commodo augue. In dictum leo nec odio euismod pretium.">
      <List dense className={classes.profileList}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DateRange />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Born" secondary="Jan 9, 1994" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocalPhone />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Phone" secondary="(+62)8765432190" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocationOn />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Address"
            secondary="Chicendo Street no.105 Block A/5A - Barcelona, Spain"
            classes={{
              root: classes.listText
            }}
          />
        </ListItem>
      </List>
    </Paper>
  );
}

export default ProfileWidget;
