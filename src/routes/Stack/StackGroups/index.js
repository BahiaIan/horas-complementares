import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Atividade } from '../../../screens/Groups/Atividade';
import { Groups } from '../../../screens/Groups';
import { Grupo1 } from '../../../screens/Groups/Grupo1';
import { Grupo2 } from '../../../screens/Groups/Grupo2';
import { Grupo3 } from '../../../screens/Groups/Grupo3';

const { Navigator, Screen } = createNativeStackNavigator();


export default function () {
    return (
        <Navigator initialRouteName='Groups' screenOptions={{ headerShown: false }}>
            <Screen name='Groups' component={Groups} />
            <Screen name='Grupo1' component={Grupo1} />
            <Screen name='Grupo2' component={Grupo2} />
            <Screen name='Grupo3' component={Grupo3} />
            <Screen name='Atividade' component={Atividade} />
        </Navigator >
    )
};