import PropTypes from "prop-types";
import {Box, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import DrawerBox from "components/DrawerBox";
import DrawerTitle from "components/DrawerTitle";

const GeneralSettingsTheme = ({value, onChange}) => {
  return (
    <DrawerBox sx={{marginBottom: ".625rem"}}>
      <DrawerTitle sx={{
        marginBottom: "2rem",
        padding: "0 1rem",
      }}>
        Theme
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
          value="light"
          label={
            <Box sx={{marginLeft: "1.5rem"}}>Light</Box>
          }
        />

        <FormControlLabel
          control={<Radio/>}
          value="dark"
          label={
            <Box sx={{marginLeft: "1.5rem"}}>Dark</Box>
          }
        />

        <FormControlLabel
          control={<Radio/>}
          value="system"
          label={
            <Box sx={{marginLeft: "1.5rem"}}>System</Box>
          }
        />
      </RadioGroup>
    </DrawerBox>
  );
};

GeneralSettingsTheme.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GeneralSettingsTheme;
