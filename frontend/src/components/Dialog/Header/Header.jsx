import useBreakpoints from "hooks/common/useBreakpoints";
import HeaderContainer from "components/Common/HeaderContainer";
import HeaderChat from "./HeaderChat";
import HeaderMenu from "./HeaderMenu";
import usePopover from "hooks/common/usePopover";
import {useMainPageLayout} from "pages/MainPage/MainPageContext";
import {Box, IconButton, useTheme} from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import PropTypes from "prop-types";
import StyledIcon from "components/Common/StyledIcon";

const Header = ({chat}) => {
  const {ex} = useBreakpoints();

  const {leftColumn, rightColumn} = useMainPageLayout();

  const openSearch = () => {
    rightColumn.setComponent('Search');
    rightColumn.open();
  };

  const openChatOptions = (event) => {
    popover.open(event);
  };

  const popover = usePopover({
    vertical: 'bottom',
    horizontal: 'center',
  });

  const theme = useTheme();

  return (
    <HeaderContainer sx={{
      width: "100%",
      boxShadow: theme.palette.shadow.secondary,
      zIndex: 1000,
    }}>
      {
        ex && <IconButton
          sx={{marginRight: ".5rem"}}
          onClick={() => leftColumn.open()}
        >
          <StyledIcon icon={ArrowBack}/>
        </IconButton>
      }

      <Box sx={{flex: 1}}>
        <HeaderChat chat={chat}/>
      </Box>

      <Box sx={{display: "flex"}}>
        <IconButton onClick={openSearch}>
          <StyledIcon icon={SearchIcon}/>
        </IconButton>

        <IconButton onClick={openChatOptions}>
          <StyledIcon icon={MoreIcon}/>
        </IconButton>

        <HeaderMenu
          position={popover.position}
          anchor={popover.anchor}
          handleClose={popover.close}
        />
      </Box>
    </HeaderContainer>
  )
};

Header.propTypes = {
  chat: PropTypes.object.isRequired,
}

export default Header;
