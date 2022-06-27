import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { Header } from '../../../components/Header';
import { Atividade } from '../../../components/Atividade';
import { styles } from './styles';
import { db } from "../../../config/firebaseConfig";
import { onValue, ref } from 'firebase/database';

const DATA = [];

const buscarDados = () => {
    onValue(ref(db, '/atividadesGrupo3'), querySnapShot => {
        for (const key of Object.keys(querySnapShot.val())) {
            const atividade = querySnapShot.val()[key];
            atividade.id = key;
            DATA.push(atividade);
        };
    });
}

export function Grupo3() {
    useEffect(() => {
        buscarDados();
    }, [])

    return (
        <View style={styles.container}>
            <Header title='Grupo 3' routeToReturn='Groups' />
            <FlatList
                data={DATA}
                extraData={DATA}
                renderItem={({ item }) => (<Atividade dados={item} route='Atividade' />)}
                keyExtractor={item => item.id}
            />
        </View>
    );
}