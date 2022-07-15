import MenuItem from "components/Common/MenuItem";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PropTypes from "prop-types";

const AppMenuSettings = ({handleSelect}) => {
  return (
    <MenuItem
      title="Settings"
      icon={<SettingsOutlinedIcon/>}
      handleSelect={() => handleSelect("SettingsMenu")}
    />
  )
};

AppMenuSettings.propTypes = {
  handleSelect: PropTypes.func.isRequired,
};

export default AppMenuSettings;
