import { TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function BotaoFlutuante({ route }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.touchableOpacityStyle}>
            <Icon name='add'
                type='material'
                size={40}
                color={theme.colors.cinza.background}
                onPress={() => navigation.navigate(`${route}`)}
            />
        </TouchableOpacity>
    )

}
