import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import ButtonBase from '@material-ui/core/ButtonBase';
import { withTranslation } from '~/i18n';
import useStyles from './product-card-style';

function ProductCard(props) {
  const classes = useStyles();
  const {
    img,
    title,
    desc,
    orientation,
    type,
    rating,
    price,
    href,
    t
  } = props;

  return (
    <Card className={clsx(classes.cardProduct, classes[orientation], classes[type])}>
      <ButtonBase focusRipple href={href} className={classes.hiddenLink}>&nbsp;</ButtonBase>
      <CardMedia
        className={classes.mediaProduct}
        image={img}
        title={title}
        component="figure"
      />
      <div className={classes.desc}>
        <CardContent className={classes.text}>
          <Typography noWrap gutterBottom variant="h6" className={classes.title} component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {desc}
          </Typography>
        </CardContent>
        <div>
          <CardActions className={classes.property}>
            {rating > 0 ? (
              <div className={classes.rating}>
                <Rating value={rating} readOnly />
              </div>
            ) : ''}
            {price > 0 && (
              <strong>
                $
                {price}
              </strong>
            )}
          </CardActions>
          <Button
            fullWidth
            href={href}
            className={classes.button}
            variant="outlined"
            color="primary"
          >
            {t('common:btn_detail')}
          </Button>
        </div>
      </div>
    </Card>
  );
}

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  orientation: PropTypes.string,
  type: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
  href: PropTypes.string,
  t: PropTypes.func.isRequired
};

ProductCard.defaultProps = {
  type: 'full', // available props: full, rounded, over, oval
  rating: 0,
  price: 0,
  orientation: 'portrait',
  href: '#',
};

export default withTranslation(['common'])(ProductCard);
