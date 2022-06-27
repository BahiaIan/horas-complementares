import { push, ref } from 'firebase/database';
import React, { useEffect } from "react";
import { Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { ButtonCustom } from '../../../components/ButtonCustom';
import { Header } from '../../../components/Header';
import { InputCustom } from '../../../components/InputCustom';
import { SelectCustom } from '../../../components/SelectCustom';
import { db } from "../../../config/firebaseConfig";
import { styles } from './styles';


export function Cadastro() {
    const grupos = ['Grupos 1: Atividades de complementação da formação social, humana e cultural',
        'Grupos 2: Atividades de cunho comunitário e de interesse coletivo',
        'Grupos 3: Atividades de iniciação científica, tecnológica e de formação profissional']
    useEffect(() => {

    })
    const [titleText, onChangeTitleText] = React.useState('');
    const [descriptionText, onChangeDescriptionText] = React.useState('');
    const [localText, onChangeLocalText] = React.useState('');
    const [requisitoConclusaoText, onChangeRequisitoConclusaoText] = React.useState('');
    const [grupo, onChange] = React.useState(grupos[0]);

    const salvar = () => {
        if (titleText != '' && descriptionText != '' && localText != '' && requisitoConclusaoText != '') {
            push(ref(db, '/atividadeDisponivel'), {
                titulo: titleText,
                descricao: descriptionText,
                local: localText,
                grupo: grupos.indexOf(grupo) + 1,
                requisitoConclusao: requisitoConclusaoText
            });
            onChangeTitleText('');
            onChangeDescriptionText('');
            onChangeLocalText('');
            onChangeRequisitoConclusaoText('');
        } else {
            alert('Um ou mais campos estão inválidos.');
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Header title='Cadastro' routeToReturn='Disponiveis' />
                <View style={styles.title}>
                    <Text>
                        Defina um título para a atividade:
                    </Text>
                </View>
                <InputCustom placeholder='Título:' changeText={onChangeTitleText} text={titleText} />
                <View style={styles.title}>
                    <Text>
                        Descreva brevemente a atividade:
                    </Text>
                </View>
                <InputCustom placeholder='Descrição:' changeText={onChangeDescriptionText} text={descriptionText} />
                <View style={styles.title}>
                    <Text>
                        Onde realizar a atividade:
                    </Text>
                </View>
                <InputCustom placeholder='Local:' changeText={onChangeLocalText} text={localText} />
                <View style={styles.title}>
                    <Text>
                        O que deve ser realizado na atividade:
                    </Text>
                </View>
                <InputCustom placeholder='Atividade:' changeText={onChangeRequisitoConclusaoText} text={requisitoConclusaoText} />
                <View style={styles.title}>
                    <Text>
                        Selecione o grupo da atividade realizada
                    </Text>
                </View>
                <View style={styles.linha}>
                    <SelectCustom dados={grupos} item={grupo} onChange={onChange} />
                </View>
                <ButtonCustom title='Salvar' press={salvar} />
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}
