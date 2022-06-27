import React from 'react';
import { FlatList, View } from 'react-native';
import { Header } from '../../../components/Header';
import { Atividade } from '../../../components/Atividade';
import { styles } from './styles';
import { db } from "../../../config/firebaseConfig";
import { onValue, ref } from 'firebase/database';

const buscarDados = () => {
    let DATA = [];
    onValue(ref(db, '/atividadesGrupo2'), querySnapShot => {
        DATA = [];
        for (const key of Object.keys(querySnapShot.val())) {
            const atividade = querySnapShot.val()[key];
            atividade.id = key;
            DATA.push(atividade);
        };
    });
    return DATA;
}

export function Grupo2() {
    return (
        <View style={styles.container}>
            <Header title='Grupo 2' routeToReturn='Groups' />
            <FlatList
                data={buscarDados()}
                extraData={buscarDados()}
                renderItem={({ item }) => (<Atividade dados={item} route='Atividade' />)}
                keyExtractor={item => item.id}
            />
        </View>
    );
}