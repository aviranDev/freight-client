/* import React, { useState, useEffect } from "react";
import "./time.css"; // Import CSS file

interface AnalogClockProps {
  time: string;
}

const AnalogClock: React.FC<AnalogClockProps> = ({ time }) => {
  const [hourDegrees, setHourDegrees] = useState(0);
  const [minuteDegrees, setMinuteDegrees] = useState(0);
  const [secondDegrees, setSecondDegrees] = useState(0);

  useEffect(() => {
    const now = new Date(time);
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourAngle = hours * 30 + 0.5 * minutes; // 30 degrees per hour, plus half a degree per minute
    const minuteAngle = minutes * 6 + 0.1 * seconds; // 6 degrees per minute, plus 0.1 degree per second
    const secondAngle = seconds * 6; // 6 degrees per second

    setHourDegrees(hourAngle);
    setMinuteDegrees(minuteAngle);
    setSecondDegrees(secondAngle);
  }, [time]);

  return (
    <div className="clock">
      <div
        className="hour-hand"
        style={{ transform: `rotate(${hourDegrees}deg)` }}
      ></div>
      <div
        className="minute-hand"
        style={{ transform: `rotate(${minuteDegrees}deg)` }}
      ></div>
      <div
        className="second-hand"
        style={{ transform: `rotate(${secondDegrees}deg)` }}
      ></div>
      <div className="center-circle"></div>
    </div>
  );
};

export default AnalogClock;
 */
