import React, { useEffect, useRef } from "react";

interface TimeDisplayProps {
  prevTimeRef: React.MutableRefObject<string>;
}

// eslint-disable-next-line react-refresh/only-export-components
const TimeDisplay: React.FC<TimeDisplayProps> = ({ prevTimeRef }) => {
  const currentTimeRef = useRef<string>(new Date().toLocaleString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().toLocaleString();
      if (currentTime !== prevTimeRef.current) {
        prevTimeRef.current = currentTime;
        currentTimeRef.current = currentTime;
      }
    }, 1000); // Update every second

    return () => {
      clearInterval(intervalId);
    };
  }, [prevTimeRef]);

  return (
    <div>
      <h2>Current Time:</h2>
      <p>{currentTimeRef.current}</p>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(TimeDisplay);
