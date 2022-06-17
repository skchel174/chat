import {useMediaQuery, useTheme} from "@mui/material";

export default function useBreakpoints() {
  const theme = useTheme();

  const ex = useMediaQuery(theme.breakpoints.down('sm')); // < 600px
  const sm = useMediaQuery(theme.breakpoints.down('md')); // < 900px
  const md = useMediaQuery(theme.breakpoints.down('lg')); // < 1200px
  const lg = useMediaQuery(theme.breakpoints.down('xl')); // < 1536px
  const xl = useMediaQuery(theme.breakpoints.up('xl'));   // > 1536px

  return {ex, sm, md, lg, xl};
};
