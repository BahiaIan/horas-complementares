import React from 'react';
import { FlatList, View } from 'react-native';
import { BotaoFlutuante } from '../../components/BotaoFlutuante';
import { Atividade } from '../../components/Atividade';
import { styles } from './styles';
import { useRoute } from "@react-navigation/native";
import { ProfileHeader } from '../../components/ProfileHeader';
import { onValue, ref } from 'firebase/database';
import { db } from "../../config/firebaseConfig";

const perfil = {
    nome: 'Ian Carlos Rocha Lima',
    periodo: '7',
    curso: 'Bacharelado em Engenharia de Software',
    progress: {
        grupo1: 27,
        grupo2: 5,
        grupo3: 13,
    }
}

export function Realizadas() {
    function buscarDados(id) {
        let perfil = [];
        onValue(ref(db, `/usuario/${id}/dadosPessoais`), querySnapShot => {
            perfil = [];
            for (const key of Object.keys(querySnapShot.val())) {
                const dadosUsuario = querySnapShot.val()[key];
                dadosUsuario.id = key;
                perfil.push(dadosUsuario);
            };
        });
        return perfil;
    }

    const params = useRoute().params;
    console.log(useRoute().params)
    return (
        <View style={styles.container}>
            {/* <ProfileHeader perfil={buscarDados(params.id)} /> */}
            <FlatList
                data={[]}
                renderItem={({ item }) => (<Atividade dados={item} route='Realizadas' />)}
                keyExtractor={item => item.id}
            />
            <BotaoFlutuante route='Adicionar' />
        </View>
    );
}