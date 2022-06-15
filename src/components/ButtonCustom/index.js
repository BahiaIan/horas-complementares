import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function ButtonCustom({ title }) {
    
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8} >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )

}
