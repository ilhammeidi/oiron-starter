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

const checkAll = [
  'check-a',
  'check-b',
  'check-c',
  'check-d',
  'check-e',
  'check-f'
];

function Collection() {
  const spacing = useSpacing();
  const mdUp = useMediaQuery(theme => theme.breakpoints.up('md'));

  const [toggleView, setView] = useState('grid');
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('all');
  const [rating, setRating] = useState(0);
  const [radio, setRadio] = useState('all');
  const [check, setCheck] = useState(checkAll);
  const [range, setRange] = useState({
    from: 0,
    to: 100
  });
  const [tag, setTag] = useState(['tag-one', 'tag-two', 'tag-three', 'tag-four']);
  const [sortBySelected, setBySelected] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortFrom, setFrom] = useState(-1);
  const [sortTo, setTo] = useState(1);

  const handleGetRange = val => {
    setRange(val);
  };

  const handleSortBy = val => {
    setBySelected(val);
    switch (val) {
      case 'title-asc':
        setSortBy('title');
        setFrom(1);
        setTo(-1);
        break;
      case 'title-desc':
        setSortBy('title');
        setFrom(-1);
        setTo(1);
        break;
      case 'price-asc':
        setSortBy('price');
        setFrom(-1);
        setTo(1);
        break;
      default:
        setSortBy('price');
        setFrom(1);
        setTo(-1);
    }
  };

  const filteredItems = () => {
    // Compare same tag
    const intersection = (firstArray, secondArray) => firstArray
      .filter(element => secondArray.includes(element));

    // Check is all categories checked
    const checkFilter = (item, filterData) => {
      if (filterData !== 'all') {
        return item === filterData;
      }
      return true;
    };

    return products
      .filter(cardItem => checkFilter(cardItem.category, category)
        && checkFilter(cardItem.radio, radio)
        && cardItem.price >= range.from
        && cardItem.price <= range.to
        && cardItem.rating >= rating
        && check.indexOf(cardItem.check) > -1
        && intersection(tag, cardItem.tag).length > 0
      )
      .sort(
        (a, b) => {
          if (a[sortBy] > b[sortBy]) {
            return sortFrom;
          }
          return sortTo;
        }
      );
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
            <Sorter
              view={toggleView}
              resultLength={filteredItems().length}
              sortBySelected={sortBySelected}
              sortBy={handleSortBy}
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
                    {filteredItems().length < 1 && (
                      <Grid item sm={12}>
                        <h3>Not found</h3>
                      </Grid>
                    )}
                    {filteredItems()
                      .map((item, index) => item.title.toLowerCase()
                        .indexOf(keyword) > -1 && (
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
                      )
                    )}
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
