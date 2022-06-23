import {ListItemButton, styled} from "@mui/material";
import PropTypes from "prop-types";

const Container = styled(ListItemButton)(
  () => ({
    width: "100%",
    padding: "1rem",
    lineHeight: "1.5rem",
    borderRadius: ".75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  })
);

const ProfileInfoItem = ({children, onClick}) => {
  return (
    <Container onClick={onClick}>
      {children}
    </Container>
  );
};

ProfileInfoItem.propTypes = {
  onCLick: PropTypes.func,
};

export default ProfileInfoItem;
