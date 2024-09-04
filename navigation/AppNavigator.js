import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

import RouteSearchScreen from "../screens/RouteSearchScreen";
import RouteListScreen from "../screens/RouteListScreen";
import RouteViewScreen from "../screens/RouteViewScreen";

import JourneyStartScreen from "../screens/JourneyStartScreen";
import JourneyProgressScreen from "../screens/JourneyProgressScreen";
import JourneyCompleteScreen from "../screens/JourneyCompleteScreen";
import JourneyOverviewScreen from "../screens/JourneyOverviewScreen";
import JourneyHistoryScreen from "../screens/JourneyHistoryScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true, // Shows the header for all screens by default
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="RouteSearch"
        component={RouteSearchScreen}
        options={{ title: "Route Search" }}
      />
      <Stack.Screen
        name="RouteList"
        component={RouteListScreen}
        options={{ title: "Route List" }}
      />
      <Stack.Screen
        name="RouteView"
        component={RouteViewScreen}
        options={{ title: "Route View" }}
      />
      <Stack.Screen
        name="JourneyStart"
        component={JourneyStartScreen}
        options={{ title: "Journey Start" }}
      />
      <Stack.Screen
        name="JourneyProgress"
        component={JourneyProgressScreen}
        options={{ title: "Journey Progress" }}
      />
      <Stack.Screen
        name="JourneyComplete"
        component={JourneyCompleteScreen}
        options={{ title: "Journey Complete" }}
      />
      <Stack.Screen
        name="JourneyOverview"
        component={JourneyOverviewScreen}
        options={{ title: "Journey Overview" }}
      />
      <Stack.Screen
        name="JourneyHistory"
        component={JourneyHistoryScreen}
        options={{ title: "Journey History" }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
