import {useState} from "react";
import DrawerContainer from "components/Common/DrawerContainer";
import ItemButton from "components/Common/ItemButton";
import StyledIcon from "components/Common/StyledIcon";
import DrawerBox from "components/Common/DrawerBox";
import BackgroundSettingsHeader from "./BackgroundSettingsHeader";
import wallpapers from "infrastructure/Wallpapers";
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import {Checkbox, Stack, Typography, useTheme} from "@mui/material";
import BackgroundSettingsColor from "./BackgroundSettingsColor";

const BackgroundSettings = () => {
  const theme = useTheme();

  const [defaultBackground, setDefaultBackground] = useState(true);
  const selectDefaultBackground = (event) => setDefaultBackground(event.target.checked);

  const [wallpaperColor, setWallpaperColor] = useState("#e5ddd5");
  const selectWallpaperColor = (value) => setWallpaperColor(value);
  const focusWallpaperColor = (value) => console.log(value);

  return (
    <DrawerContainer sx={{
      backgroundColor: theme.palette.background.secondary,
    }}>
      <BackgroundSettingsHeader/>

      <DrawerBox sx={{marginBottom: ".625rem"}}>
        <ItemButton sx={{justifyContent: "flex-start"}}>
          <StyledIcon icon={AddAPhotoOutlinedIcon}/>
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
          onClick={() => setDefaultBackground(!defaultBackground)}
        >
          <Checkbox
            checked={defaultBackground}
            onChange={selectDefaultBackground}
            sx={{padding: "0 2rem 0 0"}}
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
            wallpapers.map(
              wallpaper => <BackgroundSettingsColor
                key={wallpaper}
                color={wallpaper}
                selected={wallpaper === wallpaperColor}
                onFocus={focusWallpaperColor}
                onClick={selectWallpaperColor}
              />
            )
          }
        </Stack>
      </DrawerBox>

    </DrawerContainer>
  );
};

export default BackgroundSettings;
