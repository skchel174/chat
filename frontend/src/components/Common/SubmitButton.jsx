import PropTypes from "prop-types";
import {styled} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const ButtonStyle = styled(LoadingButton)(
  ({theme}) => ({
    width: "100%",
    height: "3rem",
    borderRadius: ".75rem",
    fontWeight: 700,
    textTransform: "capitalize",
    color: theme.palette.text.neutral,
  })
);

const SubmitButton = ({label, ...props}) => {

  return (
    <ButtonStyle
      variant="contained"
      color="success"
      type="submit"
      {...props}
    >
      {label}
    </ButtonStyle>
  )
};

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SubmitButton;
