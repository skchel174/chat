import PropTypes from "prop-types";
import {styled, TextField} from "@mui/material";
import {useEffect} from "react";

const InputStyle = styled(TextField)(
  ({theme}) => ({
    width: "100%",

    "& .MuiOutlinedInput-root": {
      borderRadius: ".75rem",
    },

    "& input:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.secondary} inset`,
      WebkitTextFillColor: theme.palette.text.primary,
    },
  })
)

const availableRules = {
  required: () => ({
    handler: (value) => value.trim().length !== 0,
    message: (label) => `Field ${label} is required.`,
  }),

  min: (min) => ({
    handler: (value) => value.trim().length >= min,
    message: (label) => `Filed ${label} must be at least ${min} characters.`,
  }),

  max: (max) => ({
    handler: (value) => value.trim().length >= max,
    message: (label) => `Field ${label} may not be greater than ${max} characters.`,
  }),

  confirm: (confirmationValue) => ({
    handler: (value) => value === confirmationValue,
    message: (label) => `Field ${label} does not match.`,
  }),
};

const InputField = ({
  value,
  onChange,
  type = "text",
  name = "",
  label = "",
  error= null,
  onError = null,
  sx = {},
  ...rules
}) => {
  useEffect(() => {
    for (let [name, val] of Object.entries(rules)) {
      if (!availableRules[name]) {
        continue;
      }

      const rule = availableRules[name](val);
      const check = rule.handler(value);

      if (!check) {
        const message = rule.message(label);

        if (onError) {
          onError(message);
        }

        return;
      }
    }

    if (onError) {
      onError(null);
    }
  }, [value]);

  return (
    <InputStyle
      variant="outlined"
      sx={{...sx}}
      type={type}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      onError={onError}
      error={Boolean(error)}
      helperText={error}
    />
  );
};

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onError: PropTypes.func,
  rules: PropTypes.array,
  sx: PropTypes.object,
};

export default InputField;
