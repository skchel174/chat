import MenuItem from "components/MenuItem";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import logout from "store/userSlice/reducers/logout";
import {useDispatch} from "react-redux";

const AppMenuLogout = () => {
  const dispatch = useDispatch();

  return (
    <MenuItem
      icon={<LogoutOutlinedIcon/>}
      title="Log Out"
      handleSelect={() => dispatch(logout())}
    />
  );
};

export default AppMenuLogout;
