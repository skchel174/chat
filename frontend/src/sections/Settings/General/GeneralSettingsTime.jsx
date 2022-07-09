import PropTypes from "prop-types";
import DrawerBox from "components/DrawerBox";
import DrawerTitle from "components/DrawerTitle";
import {Box, FormControlLabel, Radio, RadioGroup} from "@mui/material";

const GeneralSettingsTime = ({value, onChange}) => {
  return (
    <DrawerBox sx={{marginBottom: ".625rem"}}>
      <DrawerTitle sx={{
        marginBottom: "2rem",
        padding: "0 1rem",
      }}>
        Time Format
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
          control={<Radio/>}
          value="12"
          label={
            <Box sx={{marginLeft: "1rem"}}>12</Box>
          }
        />

        <FormControlLabel
          control={<Radio/>}
          value="24"
          label={
            <Box sx={{marginLeft: "1rem"}}>24</Box>
          }
        />
      </RadioGroup>
    </DrawerBox>
  );
};

GeneralSettingsTime.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GeneralSettingsTime;
