import React from 'react';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { ValidatorComponent } from 'react-material-ui-form-validator';

const red300 = red['500'];

const styles = theme => ({
  checkbox: {
    left: 0,
    fontSize: 12,
    color: red300,
    position: 'absolute',
    marginTop: theme.spacing()
  }
});

class CheckboxValidatorElement extends ValidatorComponent {
  errorText() {
    const { isValid } = this.state;
    const { classes } = this.props;
    if (isValid) {
      return null;
    }
    return (
      <div className={classes.checkbox}>
        {this.getErrorMessage()}
      </div>
    );
  }

  render() {
    const {
      errorMessages,
      validators,
      requiredError,
      value,
      checked,
      validatorListener,
      classes,
      ...rest
    } = this.props;

    return (
      <span>
        <Checkbox
          value={value}
          checked={checked}
          {...rest}
          ref={(r) => { this.input = r; }}
        />
        {this.errorText()}
      </span>
    );
  }
}

export default withStyles(styles)(CheckboxValidatorElement);
