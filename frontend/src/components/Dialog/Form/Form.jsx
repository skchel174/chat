import useInput from "hooks/common/useInput";
import Appendix from "components/Common/Appendix";
import {DIRECTION} from "components/Common/Appendix";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import FormEmoji from "./FormEmoji";
import FormInput from "./FormInput";
import FormIcon from "./FormIcon";
import FormSubmit from "./FormSubmit";
import FormField from "./FormField";
import {useDispatch} from "react-redux";
import addMessage from "store/chatsSlice/addMessage";

const Form = () => {
  const {value, setValue, handleInput, handleEnterDown} = useInput('');

  const dispatch = useDispatch();

  const sendInput = () => {
    const content = value.trim();

    if (content.length > 0) {
      dispatch(addMessage(value));
    }

    setValue('');
  };

  return (
    <>
      <FormField>
        <FormEmoji setInput={setValue}/>

        <FormInput
          value={value}
          onChange={handleInput}
          onKeyDown={(event) => handleEnterDown(event, sendInput)}
        />

        <FormIcon>
          <AttachFileIcon sx={{transform: "rotate(45deg)"}}/>
        </FormIcon>

        <Appendix
          direction={DIRECTION.RIGHT}
          sx={{
            right: "-0.5rem",
            bottom: "-0.13rem"
          }}
        />
      </FormField>

      <FormSubmit
        isActive={value.length > 0}
        onClick={sendInput}
      />
    </>
  )
};

export default Form;
