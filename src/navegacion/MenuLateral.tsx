import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { StackMUno } from './StackMUno';
import { StackMDos } from './StackMDos';
import { StackMInt } from './StackMInt';
import { styles } from '../theme/appTheme';


// interface Slide {
//     title: string;
//     desc: string;
//     img: ImageSourcePropType
// };

// const items: Slide[] = [
//     {
//         title: 'Artrinal',
//         desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
//         img: require('../assets/ic_launcher_round.png')
//     }
// ]

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
    return (
        <Drawer.Navigator
            drawerPosition="right"
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen name="StackMUno" options={{ title: 'Médico General 1' }} component={StackMUno} />
            <Drawer.Screen name="StackMDos" options={{ title: 'Médico General 2' }} component={StackMDos} />
            <Drawer.Screen name="StackMInt" options={{ title: 'Médico Internista' }} component={StackMInt} />
        </Drawer.Navigator>
    );
};


const MenuInterno = ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {

    return (
        <DrawerContentScrollView style={styles.drawer}>
            <View style={styles.avatarContainer}>
                <Image
                    source={require('../assets/ic_launcher_round.png')}
                    style={styles.avatar}
                />
            </View>

            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('StackMUno')}
                >
                    <Text style={styles.menuTexto}>Médico General 1</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('StackMDos')}
                >
                    <Text style={styles.menuTexto}>Médico General 2</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('StackMInt')}
                >
                    <Text style={styles.menuTexto}>Médico Internista</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};