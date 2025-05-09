import { Stack, Redirect } from "expo-router";
import Header from "@/components/header";
import NavBar from "@/components/navbar";
import {StyleSheet} from "react-native";
export default function RootLayout() {
  return (
  <>
  <Stack >
    <Stack.Screen
      name="(tabs)"
      options={{
        title: "",
        headerShown: false,
        headerStyle: { backgroundColor: "#A9CDFF" },
        headerTitleStyle: { color: "#000" },
        headerTintColor: "#000",
      }}
    />
  </Stack>
  </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.07,
  },  
  navBarContainer: {
    flex: 0.2,
    backgroundColor: "#A9CDFF",
  },
  stackContainer:{
    flex: 1,
  }
});
