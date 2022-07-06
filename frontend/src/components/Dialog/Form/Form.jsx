import useInput from "hooks/common/useInput";
import Appendix from "components/Common/Appendix";
import {DIRECTION} from "components/Common/Appendix";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import FormEmoji from "./FormEmoji";
import FormIcon from "./FormIcon";
import FormSubmit from "./FormSubmit";
import {InputBase, styled} from "@mui/material";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";

const FormContainer = styled("div")(
  () => ({
    margin: "1rem 0",
    display: "flex",
    justifyContent: "center",
    padding: "0 5%",
  })
);

const FormContent = styled("div")(
  () => ({
    display: "flex",
    height: "100%",
    width: "100%",
    minWidth: "20rem",
    maxWidth: "80rem",
  })
);

const FormInput = styled("div")(
  ({theme}) => ({
    position: "relative",
    padding: "15px 15px",
    width: "100%!important",
    display: "flex",
    alignItems: "flex-end",
    borderRadius: "10px 10px 0 10px",
    backgroundColor: theme.palette.background.primary,

    "& .MuiInputBase-root": {
      padding: "3px 0",
    }
  })
);

const Form = ({onSubmit}) => {
  const {value, setValue, handleInput} = useInput("");

  const handlers = {
    sendInput: () => {
      const content = value.trim();
      if (content.length > 0) {
        onSubmit(content);
        setValue('');
      }
    },

    breakLine: () => {
      setValue(prev => prev + "\n");
    }
  };

  const settings = useSelector(state => state.settings);

  const [enterHandler, setEnterHandler] = useState("sendInput");
  const [shiftEnterHandler, setShiftEnterHandler] = useState("breakLine");

  useEffect(() => {
    const isSendMessageByEnter = settings.keyboard === "enter";
    setEnterHandler(isSendMessageByEnter ? "sendInput" : "breakLine");
    setShiftEnterHandler(isSendMessageByEnter ? "breakLine" : "sendInput");
  }, [settings.keyboard]);

  const handleKeydown = (event) => {
    if (event.keyCode === 13) {
      const handler = event.shiftKey ? shiftEnterHandler : enterHandler;
      handlers[handler]()
      event.preventDefault();
    }
  };

  return (
    <FormContainer>
      <FormContent>
        <FormInput>
          <FormEmoji setInput={setValue}/>

          <InputBase
            autoFocus
            sx={{ml: 1, flex: 1}}
            placeholder="Message"
            multiline
            maxRows={20}
            value={value}
            onChange={handleInput}
            onKeyDown={handleKeydown}
          />

          <FormIcon>
            <AttachFileIcon sx={{transform: "rotate(45deg)"}}/>
          </FormIcon>

          <Appendix
            direction={DIRECTION.RIGHT}
            sx={{
              right: "-0.5rem",
              bottom: "-0.13rem",
            }}
          />
        </FormInput>

        <FormSubmit
          isActive={value.length > 0}
          onClick={handlers.sendInput}
        />
      </FormContent>
    </FormContainer>
  )
};

Form.propTypes = {
  sx: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
