import React from 'react';
import { FlatList, View } from 'react-native';
import { Header } from '../../../components/Header';
import { Atividade } from '../../../components/Atividade';
import { styles } from './styles';

const DATA = [
    {
        titulo:'Atividade 1',
        id: '0',
        descricao: 'Atividades esportivas - participação nas atividades esportivas',
        pontuacao: 5,
        unidade: 'Pontos/Projeto',
        maxSemestre: 5,
        comprovante: 'Declaração ou Certificado'
    },
    {
        titulo:'Atividade 2',
        id: '1',
        descricao: 'Cursos de língua estrangeira – participação com aproveitamento em cursos de língua estrangeira ',
        pontuacao: 5,
        unidade: 'Pontos/Projeto',
        maxSemestre: 5,
        comprovante: 'Declaração de frequência e aproveitamento ou Certificado ou Diploma'
    },
    {
        titulo:'Atividade 3',
        id: '2',
        descricao: 'Participação em atividades artísticas e culturais, tais como: banda marcial, camerata de sopro, teatro, coral, radioamadorismo e outras',
        pontuacao: 5,
        unidade: 'Pontos/Projeto',
        maxSemestre: 5,
        comprovante: 'Declaração ou Certificado'
    },
    {
        titulo:'Atividade 4',
        id: '3',
        descricao: 'Participação efetiva na organização de exposições e seminários de caráter artístico ou cultural ',
        pontuacao: 5,
        unidade: 'Pontos/Evento',
        maxSemestre: 5,
        comprovante: 'Declaração ou Certificado'
    },
    {
        titulo:'Atividade 5',
        id: '4',
        descricao: 'Participação como expositor em exposição artística ou cultural ',
        pontuacao: 10,
        unidade: 'Pontos/Participação',
        maxSemestre: 10,
        comprovante: 'Declaração ou Certificado'
    },
    {
        titulo:'Atividade 6',
        id: '5',
        descricao: 'Participação em cursos e atividades de formação pessoal que não sejam na área de formação do curso ',
        pontuacao: 2,
        unidade: 'Pontos/Hora',
        maxSemestre: 10,
        comprovante: 'Declaração ou Certificado'
    },
    {
        titulo:'Atividade 7',
        id: '6',
        descricao: 'Participação em eventos ou palestras não relacionados diretamente à área de formação do curso ',
        pontuacao: 2,
        unidade: 'Pontos/Evento',
        maxSemestre: 6,
        comprovante: 'Declaração ou Certificado'
    },
];

export function Grupo2() {
    return (
        <View style={styles.container}>
            <Header title='Grupo 2' routeToReturn='Groups' />
            <FlatList
                data={DATA}
                renderItem={({ item }) => (<Atividade dados={item} />)}
                keyExtractor={item => item.id}
            />
        </View>
    );
}