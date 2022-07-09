import {Box} from "@mui/material";
import {useEffect, useRef} from "react";

const IntersectObserver = ({scrollArea, intersectHandler}) => {
  const observableRef = useRef(null);

  const intersectionCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        intersectHandler();
      }
    })
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, {
      root: scrollArea,
      rootMargin: '0px',
      threshold: 1.0
    });

    if (observableRef.current) {
      observer.observe(observableRef.current);
    }
  }, [observableRef])

  return (
    <Box ref={observableRef}/>
  );
};

export default IntersectObserver;
