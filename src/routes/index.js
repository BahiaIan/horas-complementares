import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { theme } from '../global/styles/theme';
import { DashBoard } from '../screens/DashBoard';
import StackEventos from './Stack/StackEventos';
import StackRealizadas from './Stack/StackRealizadas';
import StackGroups from './Stack/StackGroups';

const { Navigator, Screen } = createBottomTabNavigator();

export function Route() {

    return (
        <NavigationContainer>
            <Navigator initialRouteName='DashBoardScreen' screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
                <Screen name="DashBoardScreen" component={DashBoard} options={{
                    tabBarIcon: () => (
                        <Icon name='home' type='material' size={24} color={theme.colors.roxo.menu} />
                    )
                }} />
                <Screen name="StackGroups" component={StackGroups} options={{
                    tabBarIcon: () => (
                        <Icon name='list-alt' type='material' size={24} color={theme.colors.roxo.menu} />
                    )
                }} />
                <Screen name="StackEventos" component={StackEventos} options={{
                    tabBarIcon: () => (
                        <Icon name='post-add' type='material' size={24} color={theme.colors.roxo.menu} />
                    )
                }} />
                <Screen name="StackRealizadas" component={StackRealizadas} options={{
                    tabBarIcon: () => (
                        <Icon name='event-available' type='material' size={24} color={theme.colors.roxo.menu} />
                    )
                }} />
            </Navigator>
        </NavigationContainer>
    )
}