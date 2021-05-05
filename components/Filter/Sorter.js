import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ListIcon from '@material-ui/icons/List';
import GridIcon from '@material-ui/icons/BorderAll';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { useText } from '~/theme/common';
import useStyles from './filter-style';

function Sorter(props) {
  const classes = useStyles();
  const text = useText();

  const {
    view, sortBySelected, resultLength,
    switchView, sortBy,
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
    <Grid container align="center" className={classes.sorter}>
      <Grid item lg={9} md={8} sm={6}>
        <Box my={1}>
          <h2 className={text.subtitle}>
            { resultLength }
            &nbsp;Items Found
          </h2>
        </Box>
      </Grid>
      <Grid item lg={3} md={4} sm={6}>
        <Box display="flex" my={1}>
          <ToggleButtonGroup
            size="small"
            value={view}
            exclusive
            onChange={handleView}
            aria-label="text alignment"
          >
            <ToggleButton value="grid">
              <GridIcon />
            </ToggleButton>
            <ToggleButton value="list">
              <ListIcon />
            </ToggleButton>
          </ToggleButtonGroup>
          <FormControl className={classes.formControl}>
            <Select
              value={sortBySelected}
              displayEmpty
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
  switchView: PropTypes.func.isRequired
};

export default Sorter;
