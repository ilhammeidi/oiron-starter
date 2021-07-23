import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { withTranslation } from '~/i18n';
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

function TopicList(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;

  return (
    <div>
      <Box mb={3}>
        <h4 className={text.subtitle}>
          {t('common:faq_topic')}
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

TopicList.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['common'])(TopicList);
