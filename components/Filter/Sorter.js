import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import FilterListIcon from '@mui/icons-material/FilterList';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ListIcon from '@mui/icons-material/List';
import GridIcon from '@mui/icons-material/BorderAll';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useText, useTextAlign } from '~/theme/common';
import useStyles from './filter-style';

function Sorter(props) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  // Media Query
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const {
    view, sortBySelected, resultLength,
    switchView, sortBy, openFilter
  } = props;

  const sortList = [
    {
      title: 'Title A to Z',
      value: 'title-asc'
    },
    {
      title: 'Title Z to A',
      value: 'title-desc'
    },
    {
      title: 'Highest Price',
      value: 'price-asc'
    },
    {
      title: 'Lowest Price',
      value: 'price-desc'
    }
  ];

  const handleSortBy = event => {
    sortBy(event.target.value);
  };

  const handleView = (event, val) => {
    switchView(val);
  };

  return (
    <Grid container alignItems="center" className={classes.sorter}>
      <Grid item lg={9} md={8} sm={6}>
        <Box my={1}>
          <h2 className={cx(text.subtitle, align.textLeft)}>
            { resultLength }
            &nbsp;Items Found
          </h2>
        </Box>
      </Grid>
      <Grid item lg={3} md={4} sm={6}>
        <Box display="flex" justifyContent="flex-end" my={1}>
          {isTablet && (
            <Button
              color="primary"
              variant="outlined"
              className={classes.btnFilter}
              onClick={openFilter}
            >
              <FilterListIcon />
              Filter
            </Button>
          )}
          {!isMobile && (
            <ToggleButtonGroup
              size="small"
              value={view}
              exclusive
              onChange={handleView}
              aria-label="text alignment"
              className={classes.switchView}
            >
              <ToggleButton value="grid">
                <GridIcon />
              </ToggleButton>
              <ToggleButton value="list">
                <ListIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          )}
          <FormControl variant="standard" className={classes.select}>
            <Select
              variant="standard"
              value={sortBySelected}
              displayEmpty
              fullWidth
              inputProps={{ 'aria-label': 'Sort By:' }}
              onChange={(e) => handleSortBy(e)}
            >
              <MenuItem value=""><em>Sort By:</em></MenuItem>
              {sortList.map((item, index) => (
                <MenuItem key={index.toString()} value={item.value}>{item.title}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
}

Sorter.propTypes = {
  view: PropTypes.string.isRequired,
  sortBySelected: PropTypes.string.isRequired,
  resultLength: PropTypes.number.isRequired,
  sortBy: PropTypes.func.isRequired,
  switchView: PropTypes.func.isRequired,
  openFilter: PropTypes.func.isRequired
};

export default Sorter;
