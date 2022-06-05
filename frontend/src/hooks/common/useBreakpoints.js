import {useMediaQuery, useTheme} from "@mui/material";

export default function useBreakpoints() {
  const theme = useTheme();

  const ex = useMediaQuery(theme.breakpoints.down('sm'));
  const sm = useMediaQuery(theme.breakpoints.down('md'));
  const md = useMediaQuery(theme.breakpoints.down('lg'));
  const lg = useMediaQuery(theme.breakpoints.down('xl'));
  const xl = useMediaQuery(theme.breakpoints.up('xl'));

  return {ex, sm, md, lg, xl};
};
