import {useMediaQuery, useTheme} from "@mui/material";

export default function useBreakpoints() {
  const theme = useTheme();

  // < 600px
  const ex = useMediaQuery(theme.breakpoints.down('sm'));

  // 600px - 900px
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const sm = smUp && mdDown;

  // 900px - 1200px
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const md = mdUp && lgDown;

  // 1200px - 1536px
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const xlDown = useMediaQuery(theme.breakpoints.down('xl'));
  const lg = lgUp && xlDown;

  // > 1536px
  const xl = useMediaQuery(theme.breakpoints.up('xl'));

  return {ex, sm, md, lg, xl};
};
