import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import { useTranslation } from 'next-i18next';
import Paper from '../../Paper';
import useStyles from '../list-style';

function PeopleWidget() {
  const classes = useStyles();
  const { t } = useTranslation('common');
  const people = [{
    img: '/images/avatars/pp_boy5.svg',
    name: 'John Doe',
    title: 'Web Designer'
  },
  {
    img: '/images/avatars/pp_girl.svg',
    name: 'Jean Doe',
    title: 'Executive Merketing'
  },
  {
    img: '/images/avatars/pp_boy2.svg',
    name: 'Jim Doe',
    title: 'Dev Ops'
  },
  {
    img: '/images/avatars/pp_girl2.svg',
    name: 'Jihan Doe',
    title: 'Director'
  },
  {
    img: '/images/avatars/pp_girl3.svg',
    name: 'Jena Doe',
    title: 'CEO'
  },
  {
    img: '/images/avatars/pp_boy3.svg',
    name: 'Johan Doe',
    title: 'iOS Developer'
  }];

  return (
    <Paper title="You may know" icon="ion-android-people" whiteBg desc="Donec commodo convallis ligula eget suscipit orci.">
      <div className={classes.profileList}>
        <List dense>
          {people.map((item, index) => (
            <ListItem disableGutters key={index.toString()} button>
              <Avatar className={classes.avatar} alt="avatar" src={item.img} title="avatar" />
              <ListItemText primary={item.name} secondary={item.title} />
              <ListItemSecondaryAction>
                <Button variant="outlined" size="small">follow</Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Grid container justifyContent="center">
          <Button fullWidth color="secondary">
            {t('btn_seeall')}
          </Button>
        </Grid>
      </div>
    </Paper>
  );
}

export default PeopleWidget;
