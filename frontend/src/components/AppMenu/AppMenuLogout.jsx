import useAuth from "hooks/auth/useAuth";
import MenuItem from "components/Common/MenuItem";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const AppMenuLogout = () => {
  const {logout} = useAuth();

  return (
    <MenuItem
      icon={<LogoutOutlinedIcon/>}
      title="Log Out"
      handleSelect={logout}
    />
  );
};

export default AppMenuLogout;
