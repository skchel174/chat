import {IconButton, InputBase, styled, useTheme} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

const Content = styled("div", {
  shouldForwardProp: (prop) => prop !== "focus",
})(({theme, focus}) => ({
  width: "100%",
  height: "2.8rem",
  padding: "0 10px",
  backgroundColor: focus ? theme.palette.background.primary : theme.palette.background.secondary,
  border: "2px solid " + (focus ? theme.palette.active.primary : theme.palette.background.secondary),
  borderRadius: "1.375rem",
  display: "flex",
  alignItems: "center",
  transition: "all .3s"
}));

const Input = styled(InputBase)(({theme}) => ({
  flex: 1,
  marginLeft: ".5rem",
  caretColor: theme.palette.active.primary,

  "& .MuiInputBase-input::placeholder": {
    color: theme.palette.text.secondary,
  }
}));

const SearchField = ({focus, input}) => {
  const theme = useTheme();

  return (
    <Content focus={focus.value}>
      <SearchIcon
        sx={{
          color: focus.value ? theme.palette.active.primary : theme.palette.text.light,
          transition: "color .3s",
        }}
      />

      <Input
        placeholder="Search"
        value={input.value}
        onChange={input.handleInput}
        onFocus={focus.focus}
        onBlur={focus.blur}
      />

      {
        input.value.length > 0 &&
        <IconButton
          size="small"
          sx={{
            position: "relative",
            left: "5px",
          }}
          onClick={() => input.setValue('')}
        >
          <CloseIcon
            sx={{color: theme.palette.text.secondary}}
            fontSize="small"
          />
        </IconButton>
      }
    </Content>
  )
};

SearchField.propTypes = {
  focus: PropTypes.shape({
    value: PropTypes.bool.isRequired,
    focus: PropTypes.func.isRequired,
    blur: PropTypes.func.isRequired,
  }),

  input: PropTypes.shape({
    value: PropTypes.string,
    handleInput: PropTypes.func.isRequired,
  }),
};

export default SearchField;
