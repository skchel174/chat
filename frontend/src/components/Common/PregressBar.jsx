import {LinearProgress} from "@mui/material";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";

const ProgressBar = ({sx = {}}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 90);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <LinearProgress
      sx={sx}
      variant="determinate"
      value={progress}
    />
  )
};

ProgressBar.propTypes = {
  sx: PropTypes.object,
};

export default ProgressBar;
