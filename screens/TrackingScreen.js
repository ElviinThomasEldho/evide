import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getLiveLocation, getCrowdednessData } from '../services/liveTrackingService';

const TrackingScreen = () => {
    const [location, setLocation] = useState(null);
    const [crowdedness, setCrowdedness] = useState(null);

    useEffect(() => {
        const fetchLocation = async () => {
            const loc = await getLiveLocation();
            setLocation(loc);
        };

        const fetchCrowdedness = async () => {
            const crowd = await getCrowdednessData();
            setCrowdedness(crowd);
        };

        fetchLocation();
        fetchCrowdedness();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Real-Time Tracking</Text>
            <Text>Current Location: {location}</Text>
            <Text>Crowdedness: {crowdedness}</Text>
            <Button title="Refresh Location" onPress={() => fetchLocation()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default TrackingScreen;
