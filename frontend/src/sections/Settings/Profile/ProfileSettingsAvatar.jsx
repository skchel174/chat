import PropTypes from "prop-types";
import {Avatar, styled} from "@mui/material";
import useFocus from "hooks/common/useFocus";
import requireImage from "helpers/requireImage";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";

const AvatarBtn = styled(Avatar)(
  () => ({
    marginBottom: "3rem",
    width: "7.5rem",
    height: "7.5rem",
    cursor: "pointer",
  })
);

const AvatarIcon = styled("div", {
  shouldForwardProp: (prop) => !["focus", "isAvatarExists"].includes(prop),
})(({theme, focus, isAvatarExists}) => ({
  position: "absolute",
  width: "7.5rem",
  height: "7.5rem",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: isAvatarExists ? theme.palette.background.opacity : theme.palette.active.primary,

  "& .MuiSvgIcon-root": {
    fontSize: focus ? "3.8rem" : "3rem",
    transition: "font-size .4s",
    color: theme.palette.text.neutral,
  },
}));

const AvatarInput = styled("input")(
  () => ({
    position: "absolute",
    width: "7.5rem",
    height: "7.5rem",
    cursor: "pointer",
    zIndex: 1000,
    opacity: 0,
  })
);

const ProfileSettingsAvatar = ({onChange, avatar = ''}) => {
  const {value: focusValue, focus, blur} = useFocus();

  return (
    <>
      <AvatarBtn src={requireImage(avatar)}/>

      <AvatarIcon
        isAvatarExists={Boolean(avatar)}
        focus={focusValue}
      >
        <AddAPhotoOutlinedIcon/>
      </AvatarIcon>

      <AvatarInput
        type="file"
        onMouseEnter={focus}
        onMouseLeave={blur}
        onInput={onChange}
      />
    </>
  );
};

ProfileSettingsAvatar.propTypes = {
  onChange: PropTypes.func.isRequired,
  avatar: PropTypes.string,
};

export default ProfileSettingsAvatar;
