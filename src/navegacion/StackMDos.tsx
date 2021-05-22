import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MedUno } from '../screens/MedUno';
import { MedGenUno } from '../screens/MedGenUno';
import { MedGenDos } from '../screens/MedGenDos';
import { MedDos } from '../screens/MedDos';

export type RootStackParams = {
    MedDos: undefined,
    MedGenUno: undefined,
    MedGenDos: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackMDos = () => {
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
            <Stack.Screen name="MedDos" options={{ title: "Médico General 2" }} component={MedDos} />
            <Stack.Screen name="MedGenUno" options={{ title: "Artrinal" }} component={MedGenUno} />
            <Stack.Screen name="MedGenDos" options={{ title: "Vastorfit" }} component={MedGenDos} />
        </Stack.Navigator>
    );
}