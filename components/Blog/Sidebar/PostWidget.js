import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withTranslation } from '~/i18n';
import Paper from '../../Paper';
import useStyles from '../blog-style';

function PostWidget(props) {
  const classes = useStyles();
  const { t } = props;
  const news = [{
    title: 'Vestibulum bibendum nisi eget magna',
    date: 'Jan 9, 2014'
  },
  {
    title: 'Quisque a consequat ante',
    date: 'Jan 9, 2014'
  },
  {
    title: 'Donec dignissim, odio ac imperdiet luctus',
    date: 'Jan 9, 2014'
  },
  {
    title: 'Suspendisse eleifend nunc non',
    date: 'Jan 9, 2014'
  },
  {
    title: 'Vestibulum a massa vestibulum',
    date: 'Jan 9, 2014'
  }];

  return (
    <Paper title={t('common:blog_post')} icon="ion-android-bookmark" whiteBg desc="">
      <div className={classes.albumRoot}>
        <List component="nav">
          {news.map((item, index) => (
            <ListItem key={index.toString()} button>
              <ListItemText primary={item.title} secondary={item.date} />
            </ListItem>
          ))}
        </List>
      </div>
    </Paper>
  );
}

PostWidget.propTypes = {
  t: PropTypes.func.isRequired,
};

PostWidget.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(PostWidget);
