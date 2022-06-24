import PropTypes from "prop-types";
import Chats from "components/Chats";
import Search from "components/Search";
import Profile from "components/Profile";
import Dialog from "components/Dialog";
import {SettingsMenu, ProfileSettings, GeneralSettings} from "components/Settings";

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
