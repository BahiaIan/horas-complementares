import React from 'react';
import { FlatList, View } from 'react-native';
import { Header } from '../../../components/Header';
import { AtividadesDisponiveis } from '../../../components/AtividadesDisponiveis';
import { styles } from './styles';
import { BotaoFlutuante } from '../../../components/BotaoFlutuante';
const DATA = [
    {
        id: '0',
        grupo: 1,
        titulo: 'Curso de Inglês',
        descricao: 'As roupas serão doadas ao assistencia social do municipio.',
        local: 'Centro acadêmico de engenharia de software',
        requisitoConclusao: 'Doar ao menos uma peça de roupa.',
    },
    {
        id: '1',
        grupo: 3,
        titulo: 'Curso segurança de dados',
        descricao: 'As roupas serão doadas ao assistencia social do municipio.',
        local: 'Centro acadêmico de engenharia de software',
        requisitoConclusao: 'Doar ao menos uma peça de roupa.',
    },
    {
        id: '2',
        grupo: 2,
        titulo: 'Campanha do agasalho',
        descricao: 'As roupas serão doadas ao assistencia social do municipio.',
        local: 'Centro acadêmico de engenharia de software',
        requisitoConclusao: 'Doar ao menos uma peça de roupa.',
    },
    {
        id: '3',
        grupo: 3,
        titulo: 'LatinoWare',
        descricao: 'As roupas serão doadas ao assistencia social do municipio.',
        local: 'Centro acadêmico de engenharia de software',
        requisitoConclusao: 'Doar ao menos uma peça de roupa.',
    },
    {
        id: '4',
        grupo: 1,
        titulo: 'Curso de Educação Financeira',
        descricao: 'As roupas serão doadas ao assistencia social do municipio.',
        local: 'Centro acadêmico de engenharia de software',
        requisitoConclusao: 'Doar ao menos uma peça de roupa.',
    },
    {
        id: '5',
        grupo:2,
        titulo: 'Doação de Sangue',
        descricao: 'As roupas serão doadas ao assistencia social do municipio.',
        local: 'Centro acadêmico de engenharia de software',
        requisitoConclusao: 'Doar ao menos uma peça de roupa.',
    },
];
export function Disponiveis() {
    return (
        <View style={styles.container}>
            <Header title='Atividades Disponiveis' />
            <FlatList
                data={DATA}
                renderItem={({ item }) => (<AtividadesDisponiveis dados={item} />)}
                keyExtractor={item => item.id}
            />
            <BotaoFlutuante />
        </View>
    );
}