import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PostCard from '../Cards/PostCard';
import useStyles from './blog-style';

function Blog() {
  const classes = useStyles();
  const blogData = [
    {
      title: 'Heading',
      date: '19 June 2020',
      desc:
        'This is a media card. You can use this section to describe the content.'
    },
    {
      title: 'Heading',
      date: '19 June 2020',
      desc:
        'This is a media card. You can use this section to describe the content.'
    },
    {
      title: 'Heading',
      date: '19 June 2020',
      desc:
        'This is a media card. You can use this section to describe the content.'
    }
  ];

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Typography gutterBottom variant="h3" align="center" display="block">
        Blog and News
      </Typography>
      <Typography gutterBottom variant="body1" align="center" display="block">
        Curabitur egestas consequat lorem, vel fermentum augue porta id.
      </Typography>
      {/* End hero unit */}
      <div className={classes.blogWrap}>
        <Grid container spacing={4}>
          {blogData.map((item, index) => (
            <Grid item key={index.toString()} xs={12} md={4}>
              <PostCard
                title={item.title}
                desc={item.desc}
                date={item.date}
                img="https://source.unsplash.com/random"
                href="/blog/detail-blog"
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

export default Blog;
