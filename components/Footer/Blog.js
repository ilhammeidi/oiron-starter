import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import logo from '~/public/images/logo-starter.svg';
import brand from '~/public/text/brand';
import img from '~/public/images/imgAPI';
import SelectLang from '../LangSwitch/Select';
import useStyles from './blog-style';

function Copyright() {
  return (
    <Typography variant="body2" display="block" align="center" color="textSecondary">
      &copy;&nbsp;
      {brand.starter.footerText}
    </Typography>
  );
}

const footer = {
  title: 'Quick Links',
  description: ['Resource', 'Another resource', 'Final resource', 'Privacy policy', 'Terms of use', 'Terms Condition'],
  link: ['#resource', '#another-resource', '#final-resource', '#privacy-policy', '#terms-of-use'],
};

const news = [
  {
    type: 'news',
    text: 'Sed imperdiet enim ligula vitae viverra.',
    img: img.photo[4]
  },
  {
    type: 'news',
    text: 'Sed imperdiet enim ligula vitae viverra.',
    img: img.photo[1]
  },
  {
    type: 'news',
    text: 'Sed imperdiet enim ligula vitae viverra.',
    img: img.photo[3]
  }
];

function Blog(props) {
  const { classes } = useStyles();
  const { toggleDir } = props;
  const { t } = useTranslation('common');

  return (
    <div className={classes.footer}>
      <Container fixed component="footer">
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <div className={classes.logo}>
              <img src={logo} alt="logo" />
              <Typography variant="h6" color="textPrimary">
                {brand.starter.projectName}
              </Typography>
            </div>
            <Typography color="textPrimary" className={classes.footerDesc} gutterBottom>
              {t('starter-landing.banner_subtitle')}
            </Typography>
            <div className={classes.quickLinks}>
              <Typography variant="h6" className={classes.title} color="textPrimary" gutterBottom>
                {t('footer_link')}
              </Typography>
              <ul>
                {footer.description.map((item, index) => (
                  <li key={item}>
                    <Link
                      href={footer.link[index]}
                      variant="subtitle1"
                      color="textSecondary"
                      underline="hover"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            {news.map((item, index) => (
              <ButtonBase className={classes.blogItem} href="#" key={index.toString()}>
                <figure>
                  <img src={item.img} alt="thumb" />
                </figure>
                <div className={classes.listText}>
                  <Typography variant="button" className={classes.category}>
                    {t('footer_news')}
                  </Typography>
                  <Typography display="block" component="p">Sed imperdiet enim ligula vitae viverra. </Typography>
                </div>
              </ButtonBase>
            ))}
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.socmed}>
              <IconButton aria-label="FB" className={classes.margin} size="small">
                <i className="ion-social-twitter" />
              </IconButton>
              <IconButton aria-label="TW" className={classes.margin} size="small">
                <i className="ion-social-facebook" />
              </IconButton>
              <IconButton aria-label="IG" className={classes.margin} size="small">
                <i className="ion-social-instagram" />
              </IconButton>
              <IconButton aria-label="LI" className={classes.margin} size="small">
                <i className="ion-social-linkedin" />
              </IconButton>
            </div>
            <SelectLang toggleDir={toggleDir} />
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Blog.propTypes = {
  toggleDir: PropTypes.func,
};

Blog.defaultProps = {
  toggleDir: () => {},
};

export default Blog;
