import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './faq-style';

const faqData = [
  {
    q: 'Pellentesque ac bibendum tortor?',
    a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'In mi nulla, fringilla vestibulum?',
    a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'Quisque lacinia purus ut libero?',
    a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'Quisque ut metus sit amet augue?',
    a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'Pellentesque ac bibendum tortor?',
    a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
];

function FaqList(props) {
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const { t } = props;
  const [expanded, setExpanded] = React.useState(0);
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      {[...Array(6)].map((item, index) => (
        <div id={"topic"+index} className={classes.accordion}>
          <Box mb={3}>
            <h4 className={text.subtitle}>
              Lorem ipsum dolor sit amet
            </h4>
          </Box>
          {faqData.map((item, index) => (
            <div className={classes.item} key={index.toString()}>
              <Accordion
                classes={{
                  root: classes.paper
                }}
                expanded={expanded === index}
                onChange={handleChange(index)}
              >
                <AccordionSummary
                  classes={{
                    content: classes.content,
                    expanded: classes.expanded,
                  }}
                >
                  <Typography className={classes.heading}>{item.q}</Typography>
                  <ExpandMoreIcon className={classes.icon} />
                </AccordionSummary>
                <AccordionDetails
                  classes={{
                    root: classes.detail,
                  }}
                >
                  <Typography>
                    {item.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

FaqList.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['common'])(FaqList);
