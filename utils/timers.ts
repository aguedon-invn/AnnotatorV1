import { useContext, useEffect, useRef, useState } from "react";
import {NativeModules} from "react-native";
// import { LogTimerContext, AnnotationTimerContext } from "@/components/timerContext";

const { Timer} = NativeModules;

export function useAnnotationTimer(runAnnotationTimer: boolean, reset: boolean = false, setReset: (value: boolean) => void = () => {}) {
  const [dispTime, setDispTime] = useState("00:00:00");
  const timerRef = useRef<NodeJS.Timeout | number | null>(null);
  let seconds = 0;
  const [curSecond, setCurSecond] = useState(seconds)

  useEffect(() => {
    if (runAnnotationTimer) {
        if (Timer) {
            Timer.startTimer();
        } else {
            console.warn("TimerModule is not available");
        }
      if (reset) {
        Timer.resetTimer();
        setDispTime("00:00:00");
        setReset(false);
        console.log("Resetting timer");
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      timerRef.current = setInterval(() => {
        setCurSecond((prevseconds) => {
          const newseconds = prevseconds + 1;
          const hrs = String(Math.floor(newseconds / 3600)).padStart(2, "0");
          const mins = String(Math.floor((newseconds % 3600) / 60)).padStart(2, "0");
          const secs = String(newseconds % 60).padStart(2, "0");
          setDispTime(`${hrs}:${mins}:${secs}`);
          return newseconds;
        })
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [runAnnotationTimer, reset]);

  return dispTime;
}

export function useTimer(runTimer: boolean, reset: boolean = false, setReset: (value: boolean) => void = () => {}) {
  const [time, setTime] = useState("00:00:00");
  const timerRef = useRef<NodeJS.Timeout | number | null>(null);
  let seconds = 0;
  const [curSecond, setCurSecond] = useState(seconds);
  useEffect(() => {
    if (runTimer) {
      timerRef.current = setInterval(() => {
        setCurSecond((prevseconds) => {
          const newseconds = prevseconds + 1;
          const hrs = String(Math.floor(newseconds / 3600)).padStart(2, "0");
          const mins = String(Math.floor((newseconds % 3600) / 60)).padStart(2, "0");
          const secs = String(newseconds % 60).padStart(2, "0");
          setTime(`${hrs}:${mins}:${secs}`);
          return newseconds;
        })
        
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [runTimer]);

  return time;
}
