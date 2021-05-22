import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MedUno } from '../screens/MedUno';
import { MedGenUno } from '../screens/MedGenUno';
import { MedGenDos } from '../screens/MedGenDos';
import { MedInterno } from '../screens/MedInterno';

export type RootStackParams = {
    MedUno: undefined,
    MedGenUno: undefined,
    MedInterno: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackMUno = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0
                },
                cardStyle: {
                    backgroundColor: '#0FBFFA'
                }
            }}
        >
            <Stack.Screen name="MedUno" options={{ title: "Médico General 1" }} component={MedUno} />
            <Stack.Screen name="MedGenUno" options={{ title: "Médico General 1" }} component={MedGenUno} />
            <Stack.Screen name="MedGenDos" options={{ title: "Médico General 2" }} component={MedGenDos} />
            <Stack.Screen name="MedInterno" options={{ title: "Médico Internista" }} component={MedInterno} />
        </Stack.Navigator>
    );
}