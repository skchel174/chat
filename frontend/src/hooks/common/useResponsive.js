import {useMediaQuery, useTheme} from "@mui/material";

export default function useResponsive(query, ...keys) {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints[query](...keys));
}
