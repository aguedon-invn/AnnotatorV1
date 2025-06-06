import { Stack, router,  } from "expo-router";
import Header from "@/components/header";
import NavBar from "@/components/navbar";
import {useState, useContext} from "react";
import { View, StyleSheet} from "react-native";
// import { TimerContext } from '@/components/timerContext';
// import {useLogTimer} from "@/utils/timers";

export default function RootLayout() {
  // const [startTimer, setStartTimer] = useState(false);
  // const timer : string = useLogTimer(startTimer);
  // const {timer, startTimer, setstartTimer} = useContext(TimerContext);
  return (
    <>
    <View style={styles.headerContainer}>
      <Header/>
      <NavBar />
    </View>
    <View style={styles.stackContainer}>
    <Stack initialRouteName="scenario">
      <Stack.Screen
        name="scenario"
        options={{
          title: "Scenario",
          
          headerShown: false,
          headerStyle: { backgroundColor: "#A9CDFF" },
          headerTitleStyle: { color: "#000" },
          headerTintColor: "#000",
        }}
      />
      <Stack.Screen
        name="start"
        options={{
          title: "Start",
          headerShown: false,
          headerStyle: { backgroundColor: "#A9CDFF" },
          headerTitleStyle: { color: "#000" },
          headerTintColor: "#000",
        }}
      />
      <Stack.Screen
        name="standalonedevicesync"
        options={{
          title: "standalonedevicesync",
          headerShown: false,
          headerStyle: { backgroundColor: "#A9CDFF" },
          headerTitleStyle: { color: "#000" },
          headerTintColor: "#000",
        }}
      />
      <Stack.Screen
        name="manualacquisition"
        options={{
          title: "manualacquisition",
          headerShown: false,
          headerStyle: { backgroundColor: "#A9CDFF" },
          headerTitleStyle: { color: "#000" },
          headerTintColor: "#000",
        }}
      />
    </Stack>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.25,
  },
  navBarContainer: {
    flex: 0.2,
    backgroundColor: "#A9CDFF",
  },
  stackContainer: {
    flex: 1,
  },
});

