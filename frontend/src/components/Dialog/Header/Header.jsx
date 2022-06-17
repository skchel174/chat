import HeaderContainer from "components/Layout/HeaderContainer";
import HeaderChat from "./HeaderChat";
import {Box, IconButton} from "@mui/material";
import PropTypes from "prop-types";
import useBreakpoints from "hooks/common/useBreakpoints";
import ArrowBack from "@mui/icons-material/ArrowBack";
import {useLeftColumn} from "infrastructure/Context/LeftColumnContext";
import {useEffect} from "react";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import HeaderMenu from "./HeaderMenu";
import {useRightColumn} from "infrastructure/Context/RightColumnContext";
import usePopover from "hooks/common/usePopover";

const Header = ({chat}) => {
  const {ex} = useBreakpoints();

  const leftColumn = useLeftColumn();

  useEffect(() => {
    console.log(ex)
  })

  const {open, setComponent} = useRightColumn();

  const openSearch = () => {
    setComponent('Search');
    open();
  };

  const openChatOptions = (event) => {
    popover.open(event);
  };

  const popover = usePopover({
    vertical: 'bottom',
    horizontal: 'center',
  });

  return (
    <Box
      sx={{
        width: "100%",
        boxShadow: "0 2px 2px rgba(114, 114, 114, .15)",
      }}
    >
      <HeaderContainer>
        {
          ex &&
          <IconButton
            sx={{marginRight: ".5rem"}}
            onClick={() => leftColumn.open()}
          >
            <ArrowBack/>
          </IconButton>
        }

        <Box sx={{flex: "1", height: "100%"}}>
          <HeaderChat chat={chat}/>
        </Box>

        <Box sx={{display: "flex"}}>
          <IconButton onClick={openSearch}>
            <SearchIcon/>
          </IconButton>

          <IconButton onClick={openChatOptions}>
            <MoreIcon/>
          </IconButton>

          <HeaderMenu
            position={popover.position}
            anchor={popover.anchor}
            handleClose={popover.close}
          />
        </Box>
      </HeaderContainer>
    </Box>
  )
};

Header.propTypes = {
  chat: PropTypes.object.isRequired,
}

export default Header;