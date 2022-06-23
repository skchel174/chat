import {Box} from "@mui/material";
import {useEffect, useState} from "react";
import useBreakpoints from "hooks/common/useBreakpoints";

const DialogCenter = ({sx, children}) => {
  const [width, setWidth] = useState("60%");

  const {ex, md, lg, xl} = useBreakpoints();

  useEffect(() => {
    if (xl) {
      setWidth("60%");
    } else if (lg) {
      setWidth("75%");
    } else {
      setWidth("95%");
    }
  }, [ex, md, lg, xl]);

  return (
    <Box sx={{
      width,
      maxWidth: "60rem",
      minWidth: "20rem",
      margin: "0 auto",
      ...sx,
    }}>
      {children}
    </Box>
  )
};

export default DialogCenter;
