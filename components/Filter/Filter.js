import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withTranslation } from '~/i18n';
import useStyles from './filter-style';

function Filter(props) {
  const classes = useStyles();

  const [range, setRange] = useState({ from: '', to: '' });
  const {
    t,
    filterCategory, changeCategory,
    filterRating, changeRating,
    filterTag, changeTag,
    changeRange,
    filterCheck, changeCheck, checkAll,
    filterRadio, changeRadio
  } = props;

  const handleChangeCategory = (event, cat) => {
    changeCategory(cat);
  };

  const handleChangeRating = (event, rating) => {
    changeRating(rating);
  };

  const handleChangeTag = event => {
    const val = event.target.value;
    const index = filterTag.indexOf(val);
    if (event.target.checked) {
      changeTag([...filterTag, val]);
    } else {
      changeTag(currentTag => currentTag.filter((tag, i) => i !== index));
    }
  };

  const handleChangeRange = (event) => {
    setRange({ ...range, [event.target.name]: Number(event.target.value) });
  };

  const handleChangeCheck = (event) => {
    const val = event.target.value;
    const index = filterCheck.indexOf(val);
    if (event.target.checked) {
      changeCheck([...filterCheck, val]);
    } else {
      changeCheck(currentCheck => currentCheck.filter((check, i) => i !== index));
    }
  };

  const handleCheckAll = () => {
    checkAll();
  };

  const handleChangeRadio = (event) => {
    changeRadio(event.target.value);
  };

  return (
    <div className={classes.filter}>
      {/* ======== Filter Categories ======== */}
      <div className={classes.filterBlock}>
        <List subheader={<ListSubheader className={classes.titleLabel} disableSticky>Filter Categories</ListSubheader>}>
          <ListItem
            button
            selected={filterCategory === 'all'}
            onClick={(event) => handleChangeCategory(event, 'all')}
          >
            <ListItemText primary={t('common:list_filter')} />
          </ListItem>
          <ListItem
            button
            selected={filterCategory === 'cat-a'}
            onClick={(event) => handleChangeCategory(event, 'cat-a')}
          >
            <ListItemText primary="Category a" />
          </ListItem>
          <ListItem
            button
            selected={filterCategory === 'cat-b'}
            onClick={(event) => handleChangeCategory(event, 'cat-b')}
          >
            <ListItemText primary="Category b" />
          </ListItem>
          <ListItem
            button
            selected={filterCategory === 'cat-c'}
            onClick={(event) => handleChangeCategory(event, 'cat-c')}
          >
            <ListItemText primary="Category c" />
          </ListItem>
          <ListItem
            button
            selected={filterCategory === 'cat-d'}
            onClick={(event) => handleChangeCategory(event, 'cat-d')}
          >
            <ListItemText primary="Category d" />
          </ListItem>
          <ListItem
            button
            selected={filterCategory === 'cat-e'}
            onClick={(event) => handleChangeCategory(event, 'cat-e')}
          >
            <ListItemText primary="Category e" />
          </ListItem>
          <ListItem
            button
            selected={filterCategory === 'cat-f'}
            onClick={(event) => handleChangeCategory(event, 'cat-f')}
          >
            <ListItemText primary="Category f " />
          </ListItem>
        </List>
      </div>
      {/* ======== Filter Rating ======== */}
      <div className={classes.filterBlock}>
        <List subheader={<ListSubheader className={classes.titleLabel} disableSticky>Filter Rating</ListSubheader>}>
          <ListItem
            button
            selected={filterRating === 0}
            onClick={(event) => handleChangeRating(event, 0)}
          >
            <ListItemText primary="All Rating" />
          </ListItem>
          <ListItem
            button
            selected={filterRating === 1}
            onClick={(event) => handleChangeRating(event, 1)}
          >
            <ListItemText
              secondary="Minimum 1 star rating"
              primary={(
                <Rating value={1} readOnly />
              )}
            />
          </ListItem>
          <ListItem
            button
            selected={filterRating === 2}
            onClick={(event) => handleChangeRating(event, 2)}
          >
            <ListItemText
              secondary="Minimum 2 star rating"
              primary={(
                <Rating value={2} readOnly />
              )}
            />
          </ListItem>
          <ListItem
            button
            selected={filterRating === 3}
            onClick={(event) => handleChangeRating(event, 3)}
          >
            <ListItemText
              secondary="Minimum 3 star rating"
              primary={(
                <Rating value={3} readOnly />
              )}
            />
          </ListItem>
          <ListItem
            button
            selected={filterRating === 4}
            onClick={(event) => handleChangeRating(event, 4)}
          >
            <ListItemText
              secondary="Minimum 4 star rating"
              primary={(
                <Rating value={4} readOnly />
              )}
            />
          </ListItem>
          <ListItem
            button
            selected={filterRating === 5}
            onClick={(event) => handleChangeRating(event, 5)}
          >
            <ListItemText
              secondary="Minimum 5 star rating"
              primary={(
                <Rating value={5} readOnly />
              )}
            />
          </ListItem>
        </List>
      </div>
      {/* ======== Filter Tag ======== */}
      <Box mb={6} px={2}>
        <div className={classes.filterBlock}>
          <FormLabel className={classes.titleLabel} component="legend">Filter Tag</FormLabel>
          <form>
            <span className={classes.btnTag}>
              <input
                id="tag_one"
                type="checkbox"
                name="tag_one"
                onChange={(event) => handleChangeTag(event)}
                checked={filterTag.indexOf('tag-one') > -1}
                value="tag-one"
              />
              {/* eslint-disable-next-line */}
              <label htmlFor="tag_one">
                Tag One
              </label>
            </span>
            <span className={classes.btnTag}>
              <input
                id="tag_two"
                type="checkbox"
                name="tag_two"
                onChange={(event) => handleChangeTag(event)}
                checked={filterTag.indexOf('tag-two') > -1}
                value="tag-two"
              />
              {/* eslint-disable-next-line */}
              <label htmlFor="tag_two">
                Tag Two
              </label>
            </span>
            <span className={classes.btnTag}>
              <input
                id="tag_three"
                type="checkbox"
                name="tag_three"
                onChange={(event) => handleChangeTag(event)}
                checked={filterTag.indexOf('tag-three') > -1}
                value="tag-three"
              />
              {/* eslint-disable-next-line */}
              <label htmlFor="tag_three">
                Tag Three
              </label>
            </span>
            <span className={classes.btnTag}>
              <input
                id="tag_four"
                type="checkbox"
                name="tag_four"
                onChange={(event) => handleChangeTag(event)}
                checked={filterTag.indexOf('tag-four') > -1}
                value="tag-four"
              />
              {/* eslint-disable-next-line */}
              <label htmlFor="tag_four">
                Tag Four
              </label>
            </span>
          </form>
        </div>
      </Box>
      {/* ======== Filter Range ======== */}
      <Box mb={6} px={2}>
        <div className={classes.filterBlock}>
          <FormLabel className={classes.titleLabel} component="legend">Filter Range</FormLabel>
          <Grid container>
            <Grid item xs={5}>
              <FormControl component="div" className={classes.formControl}>
                <Input placeholder="From" name="from" type="number" value={range.from} onChange={(e) => handleChangeRange(e)} />
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <Box display="flex" alignItems="center" justifyContent="center" height="100%">
                &nbsp; - &nbsp;
              </Box>
            </Grid>
            <Grid item xs={5}>
              <FormControl component="div" className={classes.formControl}>
                <Input placeholder="To" name="to" type="number" value={range.to} onChange={(e) => handleChangeRange(e)} />
              </FormControl>
            </Grid>
          </Grid>
          <Box mt={2}>
            <Button
              color="primary"
              fullWidth
              size="small"
              variant="contained"
              endIcon={<Icon>navigate_next</Icon>}
              onClick={() => changeRange(range)}
            >
              Apply
            </Button>
          </Box>
        </div>
      </Box>
      {/* ======== Filter Check ======== */}
      <Box mb={6} px={2}>
        <div className={classes.filterBlock}>
          <List>
            <FormControl component="div" className={classes.formControl}>
              <FormLabel className={classes.titleLabel} component="legend">Filter Check</FormLabel>
              <FormGroup>
                <ListItem className={classes.checklist} button onClick={() => handleCheckAll()}>
                  <ListItemText primary="Select All" />
                </ListItem>
                <ListItem className={classes.checklist} button>
                  <FormControlLabel
                    label="Check A"
                    control={(
                      <Checkbox
                        checked={filterCheck.indexOf('check-a') > -1}
                        value="check-a"
                        onChange={(event) => handleChangeCheck(event)}
                        name="a"
                      />
                    )}
                  />
                </ListItem>
                <ListItem className={classes.checklist} button>
                  <FormControlLabel
                    label="Check B"
                    control={(
                      <Checkbox
                        checked={filterCheck.indexOf('check-b') > -1}
                        value="check-b"
                        onChange={(event) => handleChangeCheck(event)}
                        name="b"
                      />
                    )}
                  />
                </ListItem>
                <ListItem className={classes.checklist} button>
                  <FormControlLabel
                    label="Check C"
                    control={(
                      <Checkbox
                        checked={filterCheck.indexOf('check-c') > -1}
                        value="check-c"
                        onChange={(event) => handleChangeCheck(event)}
                        name="c"
                      />
                    )}
                  />
                </ListItem>
                <ListItem className={classes.checklist} button>
                  <FormControlLabel
                    label="Check D"
                    control={(
                      <Checkbox
                        checked={filterCheck.indexOf('check-d') > -1}
                        value="check-d"
                        onChange={(event) => handleChangeCheck(event)}
                        name="d"
                      />
                    )}
                  />
                </ListItem>
                <ListItem className={classes.checklist} button>
                  <FormControlLabel
                    label="Check E"
                    control={(
                      <Checkbox
                        checked={filterCheck.indexOf('check-e') > -1}
                        value="check-e"
                        onChange={(event) => handleChangeCheck(event)}
                        name="e"
                      />
                    )}
                  />
                </ListItem>
                <ListItem className={classes.checklist} button>
                  <FormControlLabel
                    label="Check F"
                    control={(
                      <Checkbox
                        checked={filterCheck.indexOf('check-f') > -1}
                        value="check-f"
                        onChange={(event) => handleChangeCheck(event)}
                        name="f"
                      />
                    )}
                  />
                </ListItem>
              </FormGroup>
            </FormControl>
          </List>
        </div>
      </Box>
      {/* ======== Filter Radio ======== */}
      <Box mb={6} px={2}>
        <div className={classes.filterBlock}>
          <FormControl component="fieldset">
            <FormLabel className={classes.titleLabel} component="legend">Filter Radio</FormLabel>
            <RadioGroup aria-label="radio" name="radio" value={filterRadio} onChange={(event) => handleChangeRadio(event)}>
              <FormControlLabel value="all" control={<Radio />} label={t('common:list_filter')} />
              <FormControlLabel value="radio-a" control={<Radio />} label="Radio A" />
              <FormControlLabel value="radio-b" control={<Radio />} label="Radio B" />
              <FormControlLabel value="radio-c" control={<Radio />} label="Radio C" />
              <FormControlLabel value="radio-d" control={<Radio />} label="Radio D" />
              <FormControlLabel value="radio-e" control={<Radio />} label="Radio E" />
              <FormControlLabel value="radio-f" control={<Radio />} label="Radio F" />
            </RadioGroup>
          </FormControl>
        </div>
      </Box>
    </div>
  );
}

Filter.propTypes = {
  t: PropTypes.func.isRequired,
  filterCategory: PropTypes.string.isRequired,
  changeCategory: PropTypes.func.isRequired,
  filterRating: PropTypes.number.isRequired,
  changeRating: PropTypes.func.isRequired,
  filterTag: PropTypes.array.isRequired,
  changeTag: PropTypes.func.isRequired,
  changeRange: PropTypes.func.isRequired,
  filterCheck: PropTypes.array.isRequired,
  changeCheck: PropTypes.func.isRequired,
  checkAll: PropTypes.func.isRequired,
  filterRadio: PropTypes.string.isRequired,
  changeRadio: PropTypes.func.isRequired
};

Filter.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(Filter);
