import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register } from '../../../screens/Register';
import { Signin } from '../../../screens/Signin';
import { TabTelasInternas } from '../../Tabs/TabTelasInternas';

const { Navigator, Screen } = createNativeStackNavigator();


export default function () {
    return (
        <Navigator initialRouteName='Signin' screenOptions={{ headerShown: false }}>
            <Screen name='Signin' component={Signin} />
            <Screen name='Register' component={Register} />
            <Screen name='TelasInternas' component={TabTelasInternas} />
        </Navigator >
    )
};