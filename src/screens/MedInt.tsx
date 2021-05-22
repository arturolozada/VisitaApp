import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles } from '../theme/appTheme';

//interface Props extends StackScreenProps<any, any> { };
interface Props extends DrawerScreenProps<any, any> { };

export const MedInt = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button
                    title='Menu'
                    onPress={() => navigation.toggleDrawer()}
                />
            )
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#F0AC32'
                    }}
                    onPress={() => navigation.navigate('MedGenUno')}
                >
                    <Text style={styles.botonGrandeTexto}>Artrinal</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856d6'
                    }}
                    onPress={() => navigation.navigate('MedGenDos')}
                >
                    <Text style={styles.botonGrandeTexto}>Vastorfit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
