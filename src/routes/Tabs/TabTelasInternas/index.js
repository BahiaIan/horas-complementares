import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { theme } from '../../../global/styles/theme';
import { DashBoard } from '../../../screens/DashBoard';
import StackEventos from './../../Stack/StackEventos';
import StackGroups from './../../Stack/StackGroups';
import StackRealizadas from './../../Stack/StackRealizadas';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabTelasInternas() {
    return (
        <Navigator initialRouteName='Home' screenOptions={{ headerShown: false, tabBarShowLabel: true, tabBarHideOnKeyboard: true }}>
            <Screen name="Home" component={StackRealizadas} options={{
                tabBarIcon: () => (
                    <Icon name='home' type='material' size={24} color={theme.colors.roxo.menu} />
                )
            }} />
            <Screen name="Grupos de Atividades" component={StackGroups} options={{
                tabBarIcon: () => (
                    <Icon name='list-alt' type='material' size={24} color={theme.colors.roxo.menu} />
                )
            }} />
            <Screen name="Disponiveis" component={StackEventos} options={{
                tabBarIcon: () => (
                    <Icon name='post-add' type='material' size={24} color={theme.colors.roxo.menu} />
                )
            }} />
        </Navigator>
    )
}