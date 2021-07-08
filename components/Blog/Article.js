import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withTranslation } from '~/i18n';
import CommentForm from '../Comment/Form';
import Item from '../Comment/Item';
import useStyles from './blogStyle-jss';

function Article(props) {
  const classes = useStyles();
  const { t } = props;

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
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item md={8} xs={12}>
            <article className={classes.article}>
              <div className={classes.content}>
                <h4 className={classes.titleBlog}>
                  Maecenas rutrum dolor sed nisi
                </h4>
                <span className={classes.caption}>June 19, 2020 by Oliver</span>
                <figure className={classes.imageBlog}>
                  <img src="https://source.unsplash.com/random" alt="blog" />
                </figure>
                <p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                <strong>Heading</strong>
                <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <strong>Sub-heading</strong>
                <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Example code block Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo. Tortor mauris condimentum nibh, ut fermentum massa.</p>
                <strong>Sub-heading</strong>
                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <figure className={classes.imageBlog}>
                  <img src="https://source.unsplash.com/random" alt="blog" />
                </figure>
                <ul className={classes.list}>
                  <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                  <li>Donec id elit non mi porta gravida at eget metus.</li>
                  <li>Nulla vitae elit libero, a pharetra augue.</li>
                </ul>
                <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a  pharetra augue.</p>
                <ol>
                  <li>Vestibulum id ligula porta felis euismod semper.</li>
                  <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur  ridiculus mus.</li>
                  <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
                </ol>
                <Divider className={classes.dividerBordered} />
              </div>
            </article>
            <section className={classes.socmedShare}>
              <div className={classes.btnArea}>
                <Typography className={classes.title}>
                  {t('common:blog_share')}
                </Typography>
                <Button variant="outlined" size="small" className={classes.blueBtn} type="button">
                  <i className="ion-social-facebook" />
                  Facebook
                </Button>
                <Button variant="outlined" size="small" className={classes.cyanBtn} type="button">
                  <i className="ion-social-twitter" />
                  Twitter
                </Button>
                <Button variant="outlined" size="small" className={classes.cyanBtn} type="button">
                  <i className="ion-social-linkedin" />
                  Twitter
                </Button>
              </div>
            </section>
            <Divider className={classes.dividerBordered} />
            <section className={classes.comment}>
              <Typography className={classes.title}>
                {t('common:blog_write')}
              </Typography>
              <CommentForm />
              <List>
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
            </section>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}


Article.propTypes = {
  t: PropTypes.func.isRequired,
};

Article.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(Article);
