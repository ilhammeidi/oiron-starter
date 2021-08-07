import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import StarIcon from '@material-ui/icons/StarBorder';
import useStyles from './pricing-card-style';

function PricingCard(props) {
  const classes = useStyles();
  const {
    title, subheader, price,
    description, buttonText, buttonVariant
  } = props;

  return (
    <Card>
      <CardHeader
        title={title}
        subheader={subheader}
        titleTypographyProps={{ align: 'center' }}
        subheaderTypographyProps={{ align: 'center' }}
        action={title === 'Pro' ? <StarIcon /> : null}
        className={classes.cardHeader}
      />
      <CardContent>
        <div className={classes.cardPricing}>
          <Typography component="h2" variant="h3" color="textPrimary">
            $
            {price}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            /mo
          </Typography>
        </div>
        <ul>
          {description.map(line => (
            <Typography component="li" variant="subtitle1" align="center" key={line}>
              {line}
            </Typography>
          ))}
        </ul>
      </CardContent>
      <CardActions>
        <Button fullWidth variant={buttonVariant} color="primary">
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}

PricingCard.propTypes = {
  subheader: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonVariant: PropTypes.string,
};

PricingCard.defaultProps = {
  subheader: '',
  buttonVariant: 'outlined'
};

export default PricingCard;
