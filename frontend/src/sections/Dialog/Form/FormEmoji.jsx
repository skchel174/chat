import PropTypes from "prop-types";
import {useState, useEffect} from "react";
import {styled, Zoom} from "@mui/material";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import Picker from "emoji-picker-react";
import FormIcon from "./FormIcon";

const PickerContainer = styled("div")(
  ({theme}) => ({
    position: "absolute!important",
    top: "-420px",
    left: 0,

    "& .emoji-picker-react": {
      width: "26rem",
      height: "26rem",
      borderRadius: "10px",
      backgroundColor: theme.palette.background.primary,
      border: "none",
      boxShadow: "none",

      "& .emoji-group:before": {
        backgroundColor: theme.palette.background.primary,
      },

      "& input.emoji-search": {
        backgroundColor: theme.palette.background.primary,
        border: "1px solid " + theme.palette.background.secondary,
      },
    },
  })
)

const FormEmoji = ({setInput}) => {
  const [emojiOpen, setEmojiOpen] = useState(false);

  const selectEmoji = (event, payload) => {
    setInput(prev => prev + payload.emoji);
  };

  const toggleEmojiPicker = () => {
    setEmojiOpen(!emojiOpen);
  };

  useEffect(() => {
    const clickHandler = (event) => {
      if (!event.target.closest("#emoji-picker") && !event.target.closest("#emoji-picker-icon")) {
        setEmojiOpen(false);
      }
    };

    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, []);

  return (
    <>
      <FormIcon>
        <SentimentSatisfiedAltOutlinedIcon
          id="emoji-picker-icon"
          onClick={toggleEmojiPicker}
        />
      </FormIcon>

      <Zoom
        in={emojiOpen}
        mountOnEnter={true}
      >
        <PickerContainer id="emoji-picker">
          <Picker onEmojiClick={selectEmoji}/>
        </PickerContainer>
      </Zoom>
    </>
  )
}

FormEmoji.propTypes = {
  setInput: PropTypes.func.isRequired,
};

export default FormEmoji;
