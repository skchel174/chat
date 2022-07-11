import PropTypes from "prop-types";
import {Box, styled} from "@mui/material";
import useFocus from "hooks/common/useFocus";
import {useSelector} from "react-redux";

const Root = styled(Box, {
  shouldForwardProp: (prop) => !["color", "value", "selected"].includes(prop),
})(({theme, color, value, selected}) => ({
  backgroundColor: color,
  margin: ".2rem",
  height: "6.5rem",
  width: "6.5rem",
  cursor: "pointer",
  opacity: value ? ".7" : null,
  outline: selected ? ".3rem solid " + theme.palette.active.primary : null,
  outlineOffset: "-.3rem",
  transition: "all .3s",
}));

const BackgroundSettingsColor = ({color, onFocus, onClick, selected = false}) => {
  const settings = useSelector(state => state.settings.data);

  const {value, focus, blur} = useFocus();

  const handleFocus = () => {
    onFocus(color);
    focus();
  };

  const handleBlur = () => {
    onFocus(null);
    blur();
  };

  const handleClick = () => {
    onClick(color);
  };

  return (
    <Root
      color={color}
      value={value}
      selected={selected}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      onClick={handleClick}
    >
      <Box sx={{
        height: "100%",
        width: "100%",
        backgroundColor: settings.theme === "dark" && "rgb(0, 0, 0, .5)",
      }}/>
    </Root>
  );
};

BackgroundSettingsColor.propTypes = {
  color: PropTypes.string.isRequired,
  onFocus: PropTypes.func,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};

export default BackgroundSettingsColor;
