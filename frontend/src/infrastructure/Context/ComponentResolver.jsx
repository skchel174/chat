import PropTypes from "prop-types";
import Chats from "components/Chats";
import Search from "components/Search";
import Profile from "components/Profile";
import Dialog from "components/Dialog";
import SettingsMenu from "components/Settings/Menu";
import ProfileSettings from "components/Settings/Profile";
import GeneralSettings from "components/Settings/General";

export const components = {
  Dialog,
  Chats,
  Search,
  Profile,
  SettingsMenu,
  ProfileSettings,
  GeneralSettings,
};

const ComponentResolver = ({is}) => {
  const Content = components[is];

  return (
    <Content/>
  );
};

ComponentResolver.propTypes = {
  is: PropTypes.oneOf(Object.keys(components)).isRequired,
};

export default ComponentResolver;
