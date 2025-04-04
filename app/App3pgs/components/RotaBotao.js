import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import Playlist from './Playlist';
import Perfil from './Perfil'; 

const Stack = createStackNavigator();

export default function RotaBotao() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Playlist" component={Playlist} />
                <Stack.Screen name="Perfil" component={Perfil} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}