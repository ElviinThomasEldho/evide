import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getUserProfile } from '../services/authService';
import { getJourneyData } from '../services/locationService';

const ProfileScreen = () => {
    const userProfile = getUserProfile();
    const journeyData = getJourneyData();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{userProfile.name}'s Profile</Text>
            <Text>Email: {userProfile.email}</Text>
            <Text style={styles.subtitle}>Journey History:</Text>
            {journeyData.length ? (
                journeyData.map((journey, index) => (
                    <Text key={index}>
                        {journey.start} to {journey.end}, Distance: {journey.distance}
                    </Text>
                ))
            ) : (
                <Text>No journey history available</Text>
            )}
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
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
});

export default ProfileScreen;
