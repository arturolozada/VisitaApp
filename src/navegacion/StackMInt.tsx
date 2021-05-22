import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MedGenUno } from '../screens/MedGenUno';
import { MedGenDos } from '../screens/MedGenDos';
import { MedInterno } from '../screens/MedInterno';

export type RootStackParams = {
    MedInterno: undefined,
    MedGenUno: undefined,
    MedGenDos: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackMInt = () => {
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
            <Stack.Screen name="MedInterno" options={{ title: "Médico Internista" }} component={MedInterno} />
            <Stack.Screen name="MedGenUno" options={{ title: "Artrinal" }} component={MedGenUno} />
            <Stack.Screen name="MedGenDos" options={{ title: "Vastorfit" }} component={MedGenDos} />
        </Stack.Navigator>
    );
}