import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: 'Login', headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ title: 'Register', headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
