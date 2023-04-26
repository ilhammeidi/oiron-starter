import React from 'react';
import Box from '@mui/material/Box';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './faq-style';

const topics = [{
  title: 'Nullam pulvinar pellentesque',
  href: '#topic1'
},
{
  title: 'Sed luctus mauris',
  href: '#topic2'
},
{
  title: 'Vestibulum libero',
  href: '#topic3'
},
{
  title: 'Pellentesque a magna eget',
  href: '#topic4'
},
{
  title: 'Suspendisse pulvinar non orci vel lobortis',
  href: '#topic5'
},
{
  title: 'Quisque posuere at nisi',
  href: '#topic6'
}];

function TopicList() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  return (
    <div>
      <Box mb={3}>
        <h4 className={text.subtitle}>
          {t('faq_topic')}
        </h4>
      </Box>
      <ul className={classes.topicList}>
        {topics.map((item, index) => (
          <li key={index.toString()}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopicList;
