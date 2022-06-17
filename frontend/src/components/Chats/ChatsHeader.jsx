import useFocus from "hooks/common/useFocus";
import usePopover from "hooks/common/usePopover";
import AppMenu from "components/AppMenu";
import SearchField from "components/Common/SearchField";
import HeaderContainer from "components/Layout/HeaderContainer";
import {Box, IconButton, styled} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useEffect, useState} from "react";

const MenuButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "focus",
})(
  ({focus}) => ({
    position: 'absolute',
    opacity: '1',
    zIndex: '10',
    transition: 'opacity .2s, transform .3s !important',

    "& .MuiSvgIcon-root": {
      fontSize: "1.5rem",
    },

    ...(focus) && {
      transform: 'rotate(90deg)',
      opacity: '0',
      zIndex: '1',
    },
  })
);

const ForwardButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "focus",
})(
  ({focus}) => ({
    opacity: '0',
    zIndex: '1',
    transition: 'opacity .2s, transform .3s !important',

    "& .MuiSvgIcon-root": {
      fontSize: "1.8rem",
    },

    ...(focus) && {
      transform: 'rotate(180deg)',
      opacity: '1',
      zIndex: '10',
    },
  })
)

const ChatsHeader = ({input}) => {
  const focus = useFocus();

  const [isSearchActive, setSearchActive] = useState(false);

  useEffect(() => {
    if (input.value || focus.value) {
      setSearchActive(true);
    } else {
      setSearchActive(false);
    }
  }, [focus.value, input.value]);

  const popover = usePopover({
    vertical: 'bottom',
    horizontal: 'left',
  });

  return (
    <HeaderContainer>
      <MenuButton
        focus={isSearchActive}
        onClick={popover.open}
      >
        <MenuIcon/>
      </MenuButton>

      <ForwardButton
        focus={isSearchActive}
        onClick={() => input.setValue('')}
      >
        <ArrowForwardIcon/>
      </ForwardButton>

      <AppMenu
        position={popover.position}
        anchor={popover.anchor}
        handleClose={popover.close}
      />

      <Box sx={{
        marginLeft: ".6rem",
        width: "100%",
      }}>
        <SearchField
          focus={focus}
          input={input}
        />
      </Box>
    </HeaderContainer>
  );
};

export default ChatsHeader;