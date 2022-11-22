import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import Item from './Item';
import Form from './Form';
import Help from './Help';
import useStyles from './comment-style';
import { useText } from '~/theme/common';

function Group() {
  const classes = useStyles();
  const text = useText();
  const { t } = useTranslation('common');

  const comments = [{
    name: 'John Doe',
    avatar: '/images/avatars/pp_boy4.svg',
    date: '13 Jan 2020',
    comment:
      'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
  },
  {
    name: 'John Doe',
    avatar: '/images/avatars/pp_boy4.svg',
    date: '13 Jan 2020',
    comment:
      'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
  },
  {
    name: 'John Doe',
    avatar: '/images/avatars/pp_boy4.svg',
    date: '13 Jan 2020',
    comment:
      'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
  },
  {
    name: 'John Doe',
    avatar: '/images/avatars/pp_boy4.svg',
    date: '13 Jan 2020',
    comment:
      'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
  }];

  return (
    <Grid container spacing={6} justifyContent="center">
      <Grid item lg={10} md={12}>
        <Box px={2}>
          <Grid container spacing={4}>
            <Grid item sm={8} xs={12}>
              <Box mb={3}>
                <h4 className={clsx(text.subtitle, text.capitalize)}>
                  {t('list_comments')}
                </h4>
              </Box>
              <Form avatar="/images/avatars/pp_boy2.svg" />
              <List component="div" className={classes.comments}>
                {comments.map((item, index) => (
                  <Item
                    key={index.toString()}
                    avatar={item.avatar}
                    name={item.name}
                    date={item.date}
                    comment={item.comment}
                    last={index >= comments.length}
                  />
                ))}
              </List>
            </Grid>
            <Grid item sm={4}>
              <Help />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Group;
