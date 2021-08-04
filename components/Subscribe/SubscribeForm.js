import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import useStyles from './subscribe-style';

export default function Pricing() {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: '',
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.subscribeWrap}>
      <Paper className={classes.paper}>
        <Typography align="center" variant="h5">Subscribe Our Newsletter</Typography>
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item sm={9} xs={12}>
              <TextField
                id="standard-email"
                label="Your Email"
                className={classes.textField}
                fullWidth
                value={values.email}
                onChange={handleChange('email')}
                margin="normal"
              />
            </Grid>
            <Grid item sm={3} xs={12}>
              <Button variant="contained" fullWidth={isMobile} color="primary" className={classes.button}>
                Send
                {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                <Icon className={classes.rightIcon}>send</Icon>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}
