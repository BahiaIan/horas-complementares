import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Atividade } from '../../../screens/Eventos/Atividade';
import { Cadastro } from '../../../screens/Eventos/Cadastro';
import { Disponiveis } from '../../../screens/Eventos/Disponiveis';

const { Navigator, Screen } = createNativeStackNavigator();


export default function () {
    return (
        <Navigator initialRouteName='Disponiveis' screenOptions={{ headerShown: false }}>
            {/* <Screen name='Cadastro' component={Cadastro} /> */}
            <Screen name='Disponiveis' component={Disponiveis} />
            <Screen name='AtividadeEvento' component={Atividade} />
        </Navigator >
    )
};