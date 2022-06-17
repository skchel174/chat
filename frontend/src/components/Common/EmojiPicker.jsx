import Picker from "emoji-picker-react";
import {useTheme} from "@mui/material";
import PropTypes from "prop-types";

const EmojiPicker = ({handleSelect}) => {
  const theme = useTheme();

  return (
    <Picker
      onEmojiClick={handleSelect}
      pickerStyle={{
        width: "26rem",
        height: "26rem",
        borderRadius: "10px",
        backgroundColor: theme.palette.background.primary,
        border: "none",
        boxShadow: "none",
      }}
    />
  )
}

EmojiPicker.propTypes = {
  handleSelect: PropTypes.func.isRequired,
};

export default EmojiPicker;