import {styled} from "@mui/material";
import SearchHeader from "./SearchHeader";
import useInput from "hooks/common/useInput";
import DrawerContainer from "components/Common/DrawerContainer";
import {useMemo} from "react";
import PropTypes from "prop-types";
import {useMainPageLayout} from "pages/MainPage/MainPageContext";

const Messages = styled("div")(
  () => ({
    padding: "0 .5rem",
  })
);

const Info = styled("div")(
  ({theme}) => ({
    fontSize: "1rem",
    padding: "1rem",
    fontWeight: 500,
    color: theme.palette.text.secondary,
  })
);

const Search = () => {
  const {rightColumn} = useMainPageLayout();

  const input = useInput();

  const closeSearch = () => {
    input.setValue('');
    rightColumn.close();
  }

  const title = useMemo(() => {
    if (!input.value) {
      return "Search for messages";
    }

    return "No messages found";
  }, [input.value]);

  return (
    <DrawerContainer>
      <SearchHeader
        input={input}
        closeHandler={closeSearch}
      />

      <Messages>
        <Info>{title}</Info>
      </Messages>
    </DrawerContainer>
  )
};

Search.propTypes = {
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

export default Search;
