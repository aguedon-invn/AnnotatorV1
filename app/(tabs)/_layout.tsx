import { Stack, router,  } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
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
    </Stack>
  );
}

