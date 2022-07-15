import DrawerBox from "components/DrawerBox";
import DrawerTitle from "components/DrawerTitle";
import ItemButton from "components/ItemButton";
import StyledIcon from "components/StyledIcon";
import {useMainPageLayout} from "pages/MainPage/MainPageContext";
import {Box, Slider, Stack, Typography, useTheme} from "@mui/material";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import PropTypes from "prop-types";

const GeneralSettingsFont = ({value, onChange}) => {
  const theme = useTheme();

  const {leftColumn} = useMainPageLayout();

  return (
    <DrawerBox sx={{marginBottom: ".625rem"}}>
      <DrawerTitle sx={{
        marginBottom: "2rem",
        padding: "0 1rem",
      }}>
        Settings
      </DrawerTitle>

      <Stack sx={{
        width: "100%",
        padding: "0 1rem 1rem",
      }}>
        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: ".5rem",
        }}>
          Message Text Size
          <Typography
            component="span"
            color={theme.palette.text.secondary}
          >
            {value}
          </Typography>
        </Box>

        <Slider
          value={value}
          onChange={onChange}
          step={1}
          min={12}
          max={20}
          marks
        />
      </Stack>

      <ItemButton
        sx={{justifyContent: "flex-start"}}
        onClick={() => leftColumn.setComponent("BackgroundSettings")}
      >
        <StyledIcon
          sx={{marginRight: "2rem"}}
          icon={InsertPhotoOutlinedIcon}
        />
        <Typography>Chat Background</Typography>
      </ItemButton>
    </DrawerBox>
  )
};

GeneralSettingsFont.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GeneralSettingsFont;
