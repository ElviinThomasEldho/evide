import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const JourneyStartScreen = ({ route }) => {
  const { routeDetails } = route.params;
  const navigation = useNavigation();

  const handleStartJourney = () => {
    navigation.navigate('JourneyProgress', { routeDetails });
  };

  const renderStepItem = ({ item }) => (
    <View style={styles.stepItem}>
      <Text style={styles.stepText}>
        {item.mode} - {item.line ? `Line ${item.line}` : ''} 
        {item.from ? ` from ${item.from}` : ''} 
        {item.to ? ` to ${item.to}` : ''} 
        ({item.duration})
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journey Details</Text>
      <FlatList
        data={routeDetails.details.steps}
        renderItem={renderStepItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryText}>Total Duration: {routeDetails.details.totalDuration}</Text>
            <Text style={styles.summaryText}>Cost: {routeDetails.details.cost}</Text>
          </View>
        }
      />
      <Button title="Start Journey" onPress={handleStartJourney} />
    </View>
  );
};

export default JourneyStartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  summaryContainer: {
    marginBottom: 16,
  },
  summaryText: {
    fontSize: 18,
    marginBottom: 8,
  },
  stepItem: {
    padding: 12,
    backgroundColor: '#e0e0e0',
    marginBottom: 8,
    borderRadius: 8,
  },
  stepText: {
    fontSize: 16,
  },
});
