import PropTypes from "prop-types";
import {useState, useEffect} from "react";
import {styled, Zoom} from "@mui/material";
import EmojiPicker from "components/Common/EmojiPicker";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import FormIcon from "./FormIcon";

const PickerContainer = styled("div")(
  () => ({
    position: "absolute!important",
    top: "-420px",
    left: 0,
  })
)

const FormEmoji = ({setInput}) => {
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

  const selectEmoji = (event, {emoji}) => setInput(prev => prev + emoji);

  const toggleEmojiPicker = () => setEmojiPickerOpen(!emojiPickerOpen);

  useEffect(() => {
    const clickHandler = (event) => {
      if (!event.target.closest("#emoji-picker") && !event.target.closest("#emoji-picker-icon")) {
        setEmojiPickerOpen(false);
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
        in={emojiPickerOpen}
        mountOnEnter={true}
      >
        <PickerContainer id="emoji-picker">
          <EmojiPicker handleSelect={selectEmoji}/>
        </PickerContainer>
      </Zoom>
    </>
  )
}

FormEmoji.propTypes = {
  setInput: PropTypes.func.isRequired,
};

export default FormEmoji;
