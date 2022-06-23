import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function ButtonCustom({ title, press }) {

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={press}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )

}
