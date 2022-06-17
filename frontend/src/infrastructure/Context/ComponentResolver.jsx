import Chats from "components/Chats";
import Search from "components/Search";
import Profile from "components/Profile";
import Dialog from "components/Dialog";
import PropTypes from "prop-types";

export const components = {
  Dialog,
  Chats,
  Search,
  Profile,
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
