import React from 'react';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
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

function FaqList() {
  const classes = useStyles();
  const text = useText();
  const [expanded, setExpanded] = React.useState(0);
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      {[...Array(6)].map((group, indexGroup) => (
        <div key={indexGroup.toString()} id={'topic' + indexGroup} className={classes.accordion}>
          <Box mb={{ xs: 5, sm: 10 }}>
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
          </Box>
        </div>
      ))}
    </div>
  );
}

export default FaqList;
