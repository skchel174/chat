import DrawerContainer from "components/Common/DrawerContainer";
import ItemButton from "components/Common/ItemButton";
import StyledIcon from "components/Common/StyledIcon";
import DrawerBox from "components/Common/DrawerBox";
import BackgroundSettingsHeader from "./BackgroundSettingsHeader";
import wallpapers from "infrastructure/Wallpapers";
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import {Checkbox, Stack, Typography, useTheme} from "@mui/material";
import BackgroundSettingsColor from "./BackgroundSettingsColor";
import {useDispatch, useSelector} from "react-redux";
import {changeSettings} from "store/settingsSlice";

const BackgroundSettings = () => {
  const theme = useTheme();

  const settings = useSelector(state => state.settings.data);

  const dispatch = useDispatch();

  const toggleWallpapers = () => {
    dispatch(changeSettings({defaultWallpapers: !settings.defaultWallpapers}));
  };

  const selectWallpaperColor = (value) => {
    dispatch(changeSettings({color: value}));
  };

  const focusWallpaperColor = (value) => {
    dispatch(changeSettings({tmpColor: value}));
  };

  return (
    <DrawerContainer sx={{
      backgroundColor: theme.palette.background.secondary,
    }}>
      <BackgroundSettingsHeader/>

      <DrawerBox sx={{marginBottom: ".625rem"}}>
        <ItemButton sx={{justifyContent: "flex-start"}}>
          <StyledIcon
            sx={{marginRight: "2rem"}}
            icon={AddAPhotoOutlinedIcon}
          />
          <Typography>Chat Background</Typography>

          <input
            type="file"
            style={{
              position: "absolute",
              width: "95%",
              height: "100%",
              cursor: "pointer",
              opacity: 0,
              zIndex: 1000,
            }}
          />
        </ItemButton>

        <ItemButton
          sx={{justifyContent: "flex-start"}}
          onClick={toggleWallpapers}
        >
          <Checkbox
            checked={settings.defaultWallpapers}
            onChange={toggleWallpapers}
            sx={{
              padding: 0,
              marginRight: "2rem",
            }}
          />
          <Typography>Set default background</Typography>
        </ItemButton>
      </DrawerBox>

      <DrawerBox>
        <Stack
          flexWrap="wrap"
          flexDirection="row"
          justifyContent="center"
        >
          {
            wallpapers.map(wallpaper => {
                return <BackgroundSettingsColor
                  key={wallpaper}
                  color={wallpaper}
                  selected={wallpaper === settings.color}
                  onFocus={focusWallpaperColor}
                  onClick={selectWallpaperColor}
                />
              }
            )
          }
        </Stack>
      </DrawerBox>

    </DrawerContainer>
  );
};

export default BackgroundSettings;
