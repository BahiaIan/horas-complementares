import { NavigationContainer } from '@react-navigation/native';
import StackAutenticacao from './Stack/StackAutenticacao';

export function Route() {
    return (
        <NavigationContainer>
            <StackAutenticacao />
        </NavigationContainer>
    )
}