import PropTypes from "prop-types";
import {TextField} from "@mui/material";
import {useEffect, useState} from "react";

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
};

const InputField = ({
  onChange,
  onError,
  type = 'text',
  label = '',
  value = '',
  sx = {},
  ...rules
}) => {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  useEffect(() => {
    for (let [name, val] of Object.entries(rules)) {
      if (!availableRules[name]) {
        continue;
      }

      const rule = availableRules[name](val);

      const check = rule.handler(value);

      if (!check) {
        setError(true);

        const message = rule.message(label);
        setHelperText(message);

        if (onError) {
          onError(message);
        }

        return;
      }
    }

    setError(false);
    setHelperText('');

    if (onError) {
      onError(null);
    }
  }, [value]);

  useEffect(() => {
    setError(false);
    setHelperText('');
  }, [])

  return (
    <TextField
      sx={{
        width: "100%",

        "& .MuiOutlinedInput-root": {
          borderRadius: ".75rem",
        },
        ...sx,
      }}
      variant="outlined"
      error={error}
      type={type}
      label={label}
      value={value}
      onChange={onChange}
      helperText={helperText}
    />
  );
};

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  onError: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  rules: PropTypes.array,
  sx: PropTypes.object,
};

export default InputField;
