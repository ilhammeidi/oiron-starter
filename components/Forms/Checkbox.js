import React from 'react';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { ValidatorComponent } from 'react-material-ui-form-validator';

const red300 = red['500'];

class CheckboxValidatorElement extends ValidatorComponent {
  renderValidatorComponent() {
    const {
      classes,
      errorMessages,
      validatorListener,
      requiredError,
      value,
      ...rest
    } = this.props;

    return (
      <div>
        <Checkbox
          {...rest}
          ref={(r) => { this.input = r; }}
        />
        {this.errorText()}
      </div>
    );
  }

  errorText() {
    const { isValid } = this.state;

    if (isValid) {
      return null;
    }

    return (
      <Box
        sx={{
          left: 42,
          fontSize: 12,
          color: red300,
          position: 'absolute',
          mt: 1,
        }}
      >
        {this.getErrorMessage()}
      </Box>
    );
  }
}

export default CheckboxValidatorElement;
