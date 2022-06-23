import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Realizadas } from '../../../screens/Realizadas';
import { Atividade } from '../../../screens/Realizadas/Atividade';
import { Adicionar } from '../../../screens/Realizadas/Adicionar';

const { Navigator, Screen } = createNativeStackNavigator();


export default function () {
    return (
        <Navigator initialRouteName='Realizadas' screenOptions={{ headerShown: false }}>
            <Screen name='Realizadas' component={Realizadas} />
            <Screen name='Atividade' component={Atividade} />
            <Screen name='Adicionar' component={Adicionar} />
        </Navigator >
    )
};