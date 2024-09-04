import { StyleSheet, Text, View, ProgressBarAndroid, Button } from 'react-native';
import React from 'react';
import MapView, { Polyline, Marker } from 'react-native-maps';

const JourneyProgressScreen = ({ route }) => {
  const { routeDetails } = route.params;
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);

  const currentStep = routeDetails.details.steps[currentStepIndex];
  const nextStep = routeDetails.details.steps[currentStepIndex + 1];

  const handleNextStep = () => {
    if (currentStepIndex < routeDetails.details.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <ProgressBarAndroid
        styleAttr="Horizontal"
        indeterminate={false}
        progress={(currentStepIndex + 1) / routeDetails.details.steps.length}
        style={styles.progressBar}
      />

      {/* Live Map */}
      <MapView style={styles.map}>
        {/* Polyline for route */}
        <Polyline
          coordinates={routeDetails.details.steps.map(step => ({
            latitude: step.fromLat,
            longitude: step.fromLng
          }))}
          strokeWidth={4}
          strokeColor="blue"
        />
        {/* Current Step Marker */}
        <Marker
          coordinate={{ latitude: currentStep.fromLat, longitude: currentStep.fromLng }}
          title="Current Step"
          description={`${currentStep.mode} - ${currentStep.line || ''}`}
        />
      </MapView>

      {/* Bottom Container for Step Information */}
      <View style={styles.stepInfoContainer}>
        <Text style={styles.stepTitle}>Current Step: {currentStep.mode} - {currentStep.line || ''}</Text>
        <Text style={styles.stepDescription}>
          {`From ${currentStep.from} to ${currentStep.to} (${currentStep.duration})`}
        </Text>
        {nextStep && (
          <>
            <Text style={styles.stepTitle}>Next Step: {nextStep.mode} - {nextStep.line || ''}</Text>
            <Text style={styles.stepDescription}>
              {`From ${nextStep.from} to ${nextStep.to} (${nextStep.duration})`}
            </Text>
          </>
        )}
      </View>

      {/* Bottom Panel */}
      <View style={styles.bottomPanel}>
        <Text style={styles.instructionText}>Have you gotten on or off the bus?</Text>
        <View style={styles.buttonContainer}>
          <Button title="Got On" onPress={handleNextStep} />
          <Button title="Got Off" onPress={handleNextStep} />
        </View>
      </View>
    </View>
  );
};

export default JourneyProgressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  progressBar: {
    margin: 16,
  },
  map: {
    flex: 1,
  },
  stepInfoContainer: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderColor: '#dddddd',
    borderWidth: 1,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 16,
    marginBottom: 16,
  },
  bottomPanel: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
  },
  instructionText: {
    fontSize: 18,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
