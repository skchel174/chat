import PropTypes from "prop-types";
import DrawerBox from "components/Common/DrawerBox";
import DrawerTitle from "components/Common/DrawerTitle";
import DrawerSubtitle from "components/Common/DrawerSubtitle";
import {Box, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";

const GeneralSettingsKeyboard = ({value, onChange}) => {
  return (
    <DrawerBox sx={{marginBottom: ".625rem"}}>
      <DrawerTitle sx={{
        marginBottom: "2rem",
        padding: "0 1rem",
      }}>
        Keyboard
      </DrawerTitle>

      <RadioGroup
        sx={{
          width: "100%",
          padding: "0 1rem",
        }}
        value={value}
        onChange={onChange}
      >
        <FormControlLabel
          sx={{marginBottom: "1rem"}}
          control={<Radio/>}
          value="enter"
          label={
            <Box sx={{marginLeft: "1.5rem"}}>
              <Typography>Send with Enter</Typography>
              <DrawerSubtitle>New line by Shift + Enter</DrawerSubtitle>
            </Box>
          }
        />

        <FormControlLabel
          control={<Radio/>}
          value="shift&enter"
          label={
            <Box sx={{marginLeft: "1.5rem"}}>
              <Typography>Send with Shift+Enter</Typography>
              <DrawerSubtitle>New line by Enter</DrawerSubtitle>
            </Box>
          }
        />
      </RadioGroup>
    </DrawerBox>
  )
};

GeneralSettingsKeyboard.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GeneralSettingsKeyboard;
