import {
  useEffect,
  createContext,
  useContext,
  ReactNode,
  memo,
  useReducer,
  useRef,
} from "react";
import "./AnalogClock.css";

// Step 1: Create a context
const TimeContext = createContext<string>("");

// Step 2: Create a provider component
export const LiveTimeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // useRef to store animation frame ID
  const animationFrameIdRef = useRef<number>();

  // Optimize useEffect with requestAnimationFrame and useCallback
  useEffect(() => {
    const updateTime = () => {
      dispatch({ type: "TICK" });
      animationFrameIdRef.current = requestAnimationFrame(updateTime);
    };
    animationFrameIdRef.current = requestAnimationFrame(updateTime);

    // Cleanup function to cancel animation frame
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []); // Empty dependency array to run effect only once

  // Reducer function to manage the currentTime state, defined inline
  const [currentTime, dispatch] = useReducer(
    (state: string, action: { type: string }) => {
      if (action.type === "TICK") {
        return new Date().toLocaleString();
      }
      return state;
    },
    new Date().toLocaleString(),
  );

  return (
    <TimeContext.Provider value={currentTime}>{children}</TimeContext.Provider>
  );
};

// Step 3: Create a custom hook to access the context value
// eslint-disable-next-line react-refresh/only-export-components
export const useTimer = () => {
  const context = useContext(TimeContext);
  if (!context) {
    throw new Error("useLiveTime must be used within a LiveTimeProvider");
  }
  return context;
};

export const ComponentUsingTimer = memo(() => {
  const currentTime = useTimer();

  // Calculate current time in hours, minutes, and seconds
  const date = new Date(currentTime);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Calculate rotation angles for clock hands
  const hourRotation = (hours % 12) * 30 + minutes * 0.5; // 30 degrees per hour, 0.5 degrees per minute
  const minuteRotation = minutes * 6; // 6 degrees per minute
  const secondRotation = seconds * 6; // 6 degrees per second

  return (
    <div className="analog-clock">
      {/* Render clock numbers 12, 3, 6, and 9 */}
      <div className="clock-number twelve">12</div>
      <div className="clock-number three">3</div>
      <div className="clock-number six">6</div>
      <div className="clock-number nine">9</div>

      {/* Render clock hands */}
      <div
        className="hour-hand"
        style={{ transform: `rotate(${hourRotation}deg)` }}
      ></div>
      <div
        className="minute-hand"
        style={{ transform: `rotate(${minuteRotation}deg)` }}
      ></div>
      <div
        className="second-hand"
        style={{ transform: `rotate(${secondRotation}deg)` }}
      ></div>
      <div className="clock-face"></div>
    </div>
  );
});
