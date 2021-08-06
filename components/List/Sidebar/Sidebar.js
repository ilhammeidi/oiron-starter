import React from 'react';
import Box from '@material-ui/core/Box';
import PeopleWidget from './PeopleWidget';
import TrendingWidget from './TrendingWidget';
import NewsWidget from './NewsWidget';
import ImageWidget from './ImageWidget';
import ProductWidget from './ProductWidget';
import HelperWidget from './HelperWidget';

function Sidebar() {
  return (
    <Box>
      <ProductWidget />
      <Box py={3} />
      <PeopleWidget />
      <Box py={3} />
      <NewsWidget />
      <Box py={3} />
      <TrendingWidget />
      <Box py={3} />
      <ImageWidget />
      <Box py={3} />
      <HelperWidget />
    </Box>
  );
}


export default Sidebar;
