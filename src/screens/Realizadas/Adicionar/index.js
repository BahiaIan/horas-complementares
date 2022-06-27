import { push, ref } from 'firebase/database';
import React from 'react';
import { Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { ButtonCustom } from '../../../components/ButtonCustom';
import { Header } from '../../../components/Header';
import { InputCustom } from '../../../components/InputCustom';
import { SelectCustom } from '../../../components/SelectCustom';
import { db } from '../../../config/firebaseConfig';
import { styles } from './styles';


export function Adicionar() {
    const grupos = ['Grupos 1: Atividades de complementação da formação social, humana e cultural',
        'Grupos 2: Atividades de cunho comunitário e de interesse coletivo',
        'Grupos 3: Atividades de iniciação científica, tecnológica e de formação profissional']

    const atividades = ['Atividade 1', 'Atividade 2', 'Atividade 3', 'Atividade 4'];

    const semestres = ['1º Semestre', '2º Semestre']
    const anos = [];
    for (let i = new Date().getFullYear(); i >= 2010; i--) {
        anos.push(i);
    }
    const [descriptionText, onChangeDescriptionText] = React.useState('');

    const [grupo, onChangeGrupo] = React.useState(grupos[0]);
    const [semestre, onChangeSemestre] = React.useState(semestres[0]);
    const [ano, onChangeAno] = React.useState(anos[0]);
    const [atividade, onChangeAtividade] = React.useState(atividades[0]);


    const salvar = () => {
        if (descriptionText != '') {
            push(ref(db, '/atividadeDisponivel'), {
            });
            onChangeDescriptionText('');
        } else {
            alert('Um ou mais campos estão inválidos.');
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Header title='Lançar Atividade' routeToReturn='Disponiveis' />
                <View style={styles.title}>
                    <Text>
                        Defina um título para a atividade:
                    </Text>
                </View>
                <InputCustom placeholder='Título:' changeText={onChangeDescriptionText} text={descriptionText} />
                <View style={styles.title}>
                    <Text>
                        Selecione o grupo da atividade realizada
                    </Text>
                </View>
                <View style={styles.linha}>
                    <View style={styles.select}>
                        <SelectCustom dados={semestres} item={semestre} onChange={onChangeSemestre} />
                    </View>
                    <View style={styles.select}>
                        <SelectCustom dados={anos} item={ano} onChange={onChangeAno} />
                    </View>
                </View>
                <View style={styles.title}>
                    <Text>
                        Selecione o grupo da atividade realizada
                    </Text>
                </View>
                <View style={styles.linha}>
                    <SelectCustom dados={grupos} item={grupo} onChange={onChangeGrupo} />
                </View>
                <View style={styles.title}>
                    <Text>
                        Selecione o grupo da atividade realizada
                    </Text>
                </View>
                <View style={styles.linha}>
                    <SelectCustom dados={atividades} item={atividade} onChange={onChangeAtividade} />
                </View>
                <ButtonCustom title='Salvar' press={salvar} />
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}
