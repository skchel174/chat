import {InputBase} from "@mui/material";
import PropTypes from "prop-types";

const FormInput = ({value, onChange, onKeyDown}) => {
  return (
    <InputBase
      sx={{ml: 1, flex: 1}}
      placeholder="Message"
      multiline
      maxRows={20}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

FormInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default FormInput;
