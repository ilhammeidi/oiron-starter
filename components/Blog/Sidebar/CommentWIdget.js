import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { withTranslation } from '~/i18n';
import Paper from '../../Paper';
import useStyles from '../blog-style';

function CommentWidget(props) {
  const classes = useStyles();
  const { t } = props;
  const comments = [
    {
      color: 'teal',
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
      color: 'amber',
      name: 'Jihan Doe',
      comment: 'Duis viverra neque eget '
    },
    {
      color: 'cyan',
      name: 'Jena Doe',
      comment: 'Duis viverra neque eget '
    },
    {
      color: 'deepBlue',
      name: 'Johan Doe',
      comment: 'Duis viverra neque eget '
    }
  ];

  const firstChar = str => str.charAt(0);

  return (
    <Paper title={t('common:blog_comment')} icon="ion-ios-text-outline" whiteBg desc="">
      <List dense className={classes.profileList}>
        {comments.map((item, index) => (
          <ListItem key={index.toString()} button>
            <Avatar className={clsx(classes.avatar, classes.orangeAvatar)}>
              {firstChar(item.name)}
            </Avatar>
            <ListItemText primary={item.name} secondary={item.text} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

CommentWidget.propTypes = {
  t: PropTypes.func.isRequired,
};

CommentWidget.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(CommentWidget);
