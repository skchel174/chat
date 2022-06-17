import {IconButton, styled} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MicNoneIcon from "@mui/icons-material/MicNone";
import PropTypes from "prop-types";
import FormIcon from "./FormIcon";

const MessageIcon = styled(SendIcon)(
  ({theme}) => ({
    marginLeft: "5px",
    fontSize: "1.5rem",
    color: theme.palette.active.primary + "!important",
  })
);

const MicButton = styled(IconButton)(
  ({theme}) => ({
    height: "3.5rem",
    width: "3.5rem",
    marginLeft: ".5rem",
    backgroundColor: theme.palette.background.primary,
    boxShadow: "0 1px 2px rgba(114, 114, 114, .25098)",
    transition: "background-color .3s",

    "&:hover": {
      backgroundColor: theme.palette.active.primary,

      "& .MuiSvgIcon-root": {
        color: theme.palette.background.primary + "!important",
      }
    }
  })
);

const FormSubmit = ({isActive, onClick}) => {

  return (
    <MicButton onClick={onClick}>
      <FormIcon>
        {
          isActive
            ? <MessageIcon/>
            : <MicNoneIcon/>
        }
      </FormIcon>
    </MicButton>
  );
};

FormSubmit.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FormSubmit;
