import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { useTranslation } from 'next-i18next';
import Paper from '../../Paper';
import useStyles from '../blog-style';

function CommentWidget() {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('common');
  const comments = [
    {
      color: 'orange',
      name: 'John Doe',
      comment: 'Duis viverra neque eget '
    },
    {
      color: 'pink',
      name: 'Jean Doe',
      comment: 'Duis viverra neque eget '
    },
    {
      color: 'purple',
      name: 'Jim Doe',
      comment: 'Duis viverra neque eget '
    },
    {
      color: 'indigo',
      name: 'Jihan Doe',
      comment: 'Duis viverra neque eget '
    },
    {
      color: 'cyan',
      name: 'Jena Doe',
      comment: 'Duis viverra neque eget '
    },
    {
      color: 'green',
      name: 'Johan Doe',
      comment: 'Duis viverra neque eget '
    }
  ];

  const firstChar = str => str.charAt(0);

  return (
    <Paper title={t('blog_comment')} icon="ion-android-textsms" whiteBg desc="">
      <List component="nav" dense className={classes.profileList}>
        {comments.map((item, index) => (
          <ListItem disableGutters key={index.toString()} button>
            <Avatar className={cx(classes.avatar, classes[item.color])}>
              {firstChar(item.name)}
            </Avatar>
            <ListItemText primary={item.name} secondary={item.comment} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default CommentWidget;
