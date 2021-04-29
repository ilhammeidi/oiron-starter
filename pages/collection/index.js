import React, { Fragment } from 'react';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProfileCards from '~/components/Cards/ProfileCard';
import ProductCards from '~/components/Cards/ProductCard';
import MediaCard from '~/components/Cards/MediaCard';
import NewsCard from '~/components/Cards/NewsCard';
import brand from '~/public/text/brand';

function Collection() {
  return (
    <Fragment>
      <Head>
        <title>
          { brand.starter.name }
          &nbsp; - Blank page
        </title>
      </Head>
      <CssBaseline />
      <div>
        <main>
          <section style={{ margin: 24 }}>
            <Grid container spacing={3}>
              <Grid item sm={6}>
                <ProfileCards
                  connection={100}
                  favorites={10}
                  albums={12}
                  cover="https://source.unsplash.com/random"
                  name="John Dalton"
                  title="Web Designer"
                  type="round"
                  orientation="portrait"
                />
              </Grid>
              <Grid item sm={8}>
                <ProfileCards
                  connection={100}
                  favorites={10}
                  albums={12}
                  cover="https://source.unsplash.com/random"
                  name="John Dalton"
                  title="Web Designer"
                  type="oval"
                  orientation="landscape"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item sm={3}>
                <ProductCards
                  rating={3}
                  price={20}
                  img="https://source.unsplash.com/random"
                  title="Sed lacinia velit"
                  desc="Proin pretium arcu eget metus porta consecteturc"
                  orientation="portrait"
                  type="round"
                />
              </Grid>
              <Grid item sm={8}>
                <ProductCards
                  rating={3}
                  price={20}
                  img="https://source.unsplash.com/random"
                  title="Sed lacinia velit"
                  desc="Proin pretium arcu eget metus porta consecteturc"
                  orientation="landscape"
                  type="oval"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item sm={4}>
                <MediaCard
                  title="Sed lacinia velit, ut malesuada eros interdum a"
                  orientation="portrait"
                  type="video"
                  duration="10:01"
                  thumb="https://source.unsplash.com/random"
                  href="#"
                />
                <MediaCard
                  title="Sed lacinia velit, ut malesuada eros interdum a"
                  orientation="portrait"
                  type="photo"
                  duration="23:15"
                  thumb="https://source.unsplash.com/random"
                  href="#"
                />
              </Grid>
              <Grid item sm={4}>
                <MediaCard
                  title="Sed lacinia velit, ut malesuada eros interdum a"
                  orientation="landscape"
                  type="video"
                  thumb="https://source.unsplash.com/random"
                  href="#"
                />
                <MediaCard
                  title="Sed lacinia velit, ut malesuada eros interdum a"
                  orientation="landscape"
                  type="photo"
                  thumb="https://source.unsplash.com/random"
                  href="#"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item sm={3}>
                <NewsCard
                  title="Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus."
                  headline="news"
                  orientation="portrait"
                  type="full"
                  img="https://source.unsplash.com/random"
                  href="#"
                />
              </Grid>
              <Grid item sm={8}>
                <NewsCard
                  title="Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus."
                  headline="news"
                  orientation="landscape"
                  type="oval"
                  img="https://source.unsplash.com/random"
                  href="#"
                />
              </Grid>
            </Grid>
          </section>
        </main>
      </div>
    </Fragment>
  );
}

export default Collection;
