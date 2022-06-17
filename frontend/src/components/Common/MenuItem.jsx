import {styled} from "@mui/material";
import PropTypes from "prop-types";

const Content = styled("div")(
  ({theme}) => ({
    display: "flex",
    alignItems: "center",
    lineHeight: "1.5rem",
    fontSize: ".85rem",
    margin: ".125rem .25rem",
    padding: ".25rem",
    borderRadius: ".375rem",
    width: "auto",
    fontWeight: 500,
    transform: "scale(1)",
    transition: ".15s ease-in-out transform",
    color: theme.palette.text.primary,
    cursor: "pointer",

    "&:hover": {
      background: theme.palette.background.hover,
    },

    "&:active": {
      transform: "scale(.98)",
    }
  })
);

const Icon = styled("div")(
  ({theme}) => ({
    display: "flex",
    alignItems: "center",
    maxWidth: "1.25rem",
    fontSize: "1.25rem",
    marginRight: "1.25rem",
    marginLeft: ".5rem",
    color: theme.palette.text.secondary,
  })
);

const MenuItem = ({title, icon = null, badge = null, handleSelect = null}) => {

  return (
    <Content
      className="menu-item"
      onClick={handleSelect}
    >
      {
        icon && <Icon className={"menu-item__icon"}>{icon}</Icon>
      }

      {title}
      {badge}
    </Content>
  )
}

MenuItem.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  badge: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  handleSelect: PropTypes.func,
}

export default MenuItem;
