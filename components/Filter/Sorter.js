import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import FilterListIcon from '@material-ui/icons/FilterList';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import ListIcon from '@material-ui/icons/List';
import GridIcon from '@material-ui/icons/BorderAll';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { useText, useTextAlign } from '~/theme/common';
import useStyles from './filter-style';

function Sorter(props) {
  const classes = useStyles();
  const text = useText();
  const align = useTextAlign();
  // Media Query
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

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
          <h2 className={clsx(text.subtitle, align.textLeft)}>
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
          <FormControl className={classes.select}>
            <Select
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
