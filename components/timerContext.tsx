import react, {useState, createContext} from "react";
import {Text, View, StyleSheet} from "react-native";
import {useTimer, useAnnotationTimer} from "@/utils/timers_save";

export const LogTimerContext = createContext(null);
export const AnnotationTimerContext = createContext(null);
export const resetContext = createContext(null);

export function LogTimerProvider({children}) {
    const [runLogTimer, setRunLogTimer] = useState(false);
    const logTimer = useTimer(runLogTimer);

    return (
        <LogTimerContext.Provider value={{logTimer, runLogTimer, setRunLogTimer}}>
            {children}
        </LogTimerContext.Provider>
    );

}

export function AnnotationTimerProvider({children}) {
    const [runAnnotationTimer, setRunAnnotationTimer] = useState(false);
    const [reset, setReset] = useState(false);
    const annotationTimer = useAnnotationTimer(runAnnotationTimer, reset, setReset);
    return (
        <AnnotationTimerContext.Provider value={{annotationTimer, runAnnotationTimer, setRunAnnotationTimer, reset, setReset}}>
            {children}
        </AnnotationTimerContext.Provider>
    );
}
