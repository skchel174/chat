import MuiLink from "@mui/material/Link";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const RouterLink = ({label, to, ...props}) => {
  return (
    <MuiLink
      to={to}
      component={Link}
      cursor="pointer"
      {...props}
    >
      {label}
    </MuiLink>
  );
};

RouterLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default RouterLink;
