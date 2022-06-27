import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


export function Atividade({ dados, route }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(`${route}`, dados)}>
            <Text style={styles.descricao}>
                {dados.descricao && dados.descricao.length > 69 ? `${dados.descricao.substring(0, 70)}...` : dados.descricao}
            </Text>
        </TouchableOpacity >
    )
}