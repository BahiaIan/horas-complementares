import React from "react";
import { View } from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import { styles } from "./styles";


export function SelectCustom({ dados, item, onChange }) {
    return (
        <View style={styles.container}>
            <SelectDropdown
                data={dados}
                defaultValue={item}
                onSelect={(selectedItem) => {
                    onChange(selectedItem)
                }}
                buttonStyle={styles.field}
                buttonTextStyle={styles.textField}
                
                buttonTextAfterSelection={(selectedItem) => {
                    return selectedItem
                }}
                rowTextForSelection={(item) => {
                    return item
                }}
            />
        </View>
    )
}