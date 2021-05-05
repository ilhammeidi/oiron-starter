import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import ProductCards from '~/components/Cards/ProductCard';
import Filter from '~/components/Filter/Filter';
import Sorter from '~/components/Filter/Sorter';
import Search from '~/components/Filter/Search';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import brand from '~/public/text/brand';
import products from '~/public/api/products';
import { useSpacing } from '~/theme/common';

const checkAll = {
  a: true,
  b: true,
  c: true,
  d: true,
  e: true,
  f: true
};

function Collection() {
  const spacing = useSpacing();
  const mdUp = useMediaQuery(theme => theme.breakpoints.up('md'));

  const [toggleView, setView] = useState('grid');
  const [keyword, setKeyword] = useState('');
  const [sortBySelected, setSortBy] = useState('price-asc');
  const [category, setCategory] = useState('all');
  const [rating, setRating] = useState(0);
  const [radio, setRadio] = useState('all');
  const [check, setCheck] = useState(checkAll);
  const [range, setRange] = useState({});
  const [tag, setTag] = useState([]);

  const handleGetRange = val => {
    setRange(val);
  };

  return (
    <Fragment>
      <Head>
        <title>
          { brand.starter.name }
          &nbsp; - Product List
        </title>
      </Head>
      <CssBaseline />
      <div className={spacing.mainWrap}>
        <div className={spacing.containerWrap}>
          <Search value={keyword} updateValue={setKeyword} />
          <section>
            {range.from} - {range.to}
            {tag.map((item, index) => (<i key={index.toString()}>{item}</i>))}
            <Sorter
              view={toggleView}
              resultLength={0}
              sortBySelected={sortBySelected}
              sortBy={setSortBy}
              switchView={setView}
            />
            <Box m={2}>
              <Grid container spacing={mdUp ? 3 : 0}>
                <Grid item md={3} lg={2}>
                  <Filter
                    filterCategory={category}
                    changeCategory={setCategory}
                    filterRating={rating}
                    changeRating={setRating}
                    filterRadio={radio}
                    changeRadio={setRadio}
                    filterCheck={check}
                    changeCheck={setCheck}
                    checkAll={() => setCheck(checkAll)}
                    changeRange={handleGetRange}
                    filterTag={tag}
                    changeTag={setTag}
                  />
                </Grid>
                <Grid item lg={10} md={9}>
                  <Grid container>
                    {products.map((item, index) => (
                      <Grid
                        item
                        key={index.toString()}
                        sm={toggleView === 'grid' ? 4 : 12}
                      >
                        <Box
                          display={toggleView === 'grid' ? 'flex' : 'block'}
                          justifyContent={toggleView === 'grid' ? 'center' : 'flex-start'}
                          mb={4}
                          px={2}
                        >
                          <ProductCards
                            rating={item.rating}
                            price={item.price}
                            title={item.title}
                            desc={`Category: ${item.category} ~ Tag: ${item.tag} ~ Check: ${item.check} ~ Radio: ${item.radio}`}
                            orientation={toggleView === 'grid' ? 'portrait' : 'landscape'}
                            img="https://source.unsplash.com/random"
                            type="round"
                            href="/collection/detail-product"
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </section>
        </div>
      </div>
    </Fragment>
  );
}

export default Collection;
