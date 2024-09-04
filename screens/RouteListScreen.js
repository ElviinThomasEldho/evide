import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const RouteListScreen = ({ route }) => {
  // const { origin, destination, routes } = route;
  const origin = "Si Calden Heights Apt"
  const destination = "Rajagiri School of Engineering and Technology"
  const routes = [
    {
      id: 1,
      summary: "Bus 25 -> Metro Blue Line -> Walk 500m",
      details: {
        steps: [
          {
            mode: "Bus",
            line: "25",
            from: "Origin",
            to: "Metro Station A",
            duration: "15 mins",
          },
          {
            mode: "Metro",
            line: "Blue Line",
            from: "Metro Station A",
            to: "Metro Station B",
            duration: "20 mins",
          },
          {
            mode: "Walk",
            from: "Metro Station B",
            to: "Destination",
            duration: "5 mins",
          },
        ],
        totalDuration: "40 mins",
        cost: "$2.50",
      },
    },
    {
      id: 2,
      summary: "Bike Share -> Metro Green Line -> Walk 200m",
      details: {
        steps: [
          {
            mode: "Bike",
            from: "Origin",
            to: "Metro Station C",
            duration: "10 mins",
          },
          {
            mode: "Metro",
            line: "Green Line",
            from: "Metro Station C",
            to: "Metro Station D",
            duration: "15 mins",
          },
          {
            mode: "Walk",
            from: "Metro Station D",
            to: "Destination",
            duration: "3 mins",
          },
        ],
        totalDuration: "28 mins",
        cost: "$3.00",
      },
    },
    {
      id: 3,
      summary: "Bus 12 -> Metro Red Line -> Walk 100m",
      details: {
        steps: [
          {
            mode: "Bus",
            line: "12",
            from: "Origin",
            to: "Metro Station E",
            duration: "20 mins",
          },
          {
            mode: "Metro",
            line: "Red Line",
            from: "Metro Station E",
            to: "Metro Station F",
            duration: "18 mins",
          },
          {
            mode: "Walk",
            from: "Metro Station F",
            to: "Destination",
            duration: "2 mins",
          },
        ],
        totalDuration: "40 mins",
        cost: "$2.75",
      },
    },
  ];

  const navigation = useNavigation();

  const handleRoutePress = (routeDetails) => {
    navigation.navigate("RouteView", { routeDetails });
  };

  const renderRouteItem = ({ item }) => (
    <TouchableOpacity
      style={styles.routeItem}
      onPress={() => handleRoutePress(item)}
    >
      <Text style={styles.routeText}>{item.summary}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Origin: {origin}</Text>
      <Text style={styles.label}>Destination: {destination}</Text>
      <FlatList
        data={routes}
        renderItem={renderRouteItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default RouteListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  routeItem: {
    padding: 16,
    backgroundColor: "#f0f0f0",
    marginBottom: 8,
    borderRadius: 8,
  },
  routeText: {
    fontSize: 16,
  },
});
