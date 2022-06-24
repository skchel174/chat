import {IconButton} from "@mui/material";
import HeaderContainer from "components/Common/HeaderContainer";
import CloseIcon from '@mui/icons-material/Close';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import SearchField from "components/Common/SearchField";
import useFocus from "hooks/common/useFocus";
import PropTypes from "prop-types";

const SearchHeader = ({input, closeHandler}) => {

  const focus = useFocus();

  return (
    <HeaderContainer>
      <IconButton
        sx={{marginRight: "10px"}}
        onClick={closeHandler}
      >
        <CloseIcon/>
      </IconButton>

      <SearchField
        input={input}
        focus={focus}
      />

      <IconButton sx={{marginLeft: "10px"}}>
        <CalendarTodayOutlinedIcon/>
      </IconButton>
    </HeaderContainer>
  )
};

SearchHeader.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
    handleInput: PropTypes.func.isRequired,
  }),

  closeHandler: PropTypes.func.isRequired,
};

export default SearchHeader;
