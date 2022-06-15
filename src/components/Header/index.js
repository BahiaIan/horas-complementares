import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { Icon } from 'react-native-elements';
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";


export function Header({ title, routeToReturn }) {
    const navigation = useNavigation();
    const showReturn = routeToReturn ? true : false;
    return (
        <View style={styles.container}>
                <View style={styles.title}>
                    <View style={styles.btnMenu}>
                        <Icon name='arrow-left'
                            type='font-awesome'
                            size={20}
                            color={theme.colors.roxo.botaoRetorno}
                            onPress={() => navigation.navigate(`${routeToReturn}`)} />
                    </View>
                    <Text style={styles.nome}>
                        {title}
                    </Text>
                </View>
        </View>
    )
}