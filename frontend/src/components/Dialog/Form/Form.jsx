import useInput from "hooks/common/useInput";
import Appendix from "components/Common/Appendix";
import {DIRECTION} from "components/Common/Appendix";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import {styled} from "@mui/material";
import FormEmoji from "./FormEmoji";
import FormInput from "./FormInput";
import FormIcon from "./FormIcon";
import FormSubmit from "./FormSubmit";
import FormField from "./FormField";

const FormContainer = styled("div")(
  () => ({
    width: "100%",
    display: "flex",
    padding: "10px 0 15px",
  })
)

const Form = () => {
  const {value, setValue, handleInput, handleEnterDown} = useInput('');

  const sendInput = () => {
    const content = value.trim();

    if (content.length > 0) {
      //todo: add send message function
      console.log(content);
    }

    setValue('');
  };

  return (
    <FormContainer>
      <FormField>
        <FormEmoji setInput={setValue}/>

        <FormInput
          value={value}
          onChange={handleInput}
          onKeyDown={handleEnterDown}
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
    </FormContainer>
  )
};

export default Form;
