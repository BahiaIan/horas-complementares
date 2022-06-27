import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { Image, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, ScrollView } from 'react-native';
import logo from '../../assets/UTFPR.png';
import { ButtonCustom } from '../../components/ButtonCustom';
import { InputCustom } from '../../components/InputCustom';
import { styles } from './styles';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export function Register() {
    const navigation = useNavigation();
    const auth = getAuth();

    function preparaSalvar(email, senha, senhaVerificadora, nome, periodo) {
        if (senha != senhaVerificadora) {
            alert('As senhas não correspondem.');
            return;
        }
        if (email != '' && senha != '' && nome != '' && periodo != '') {
            let usuario = {
                email: email,
                senha: senha,
                nome: nome,
                periodo: periodo,
            }
            cadastrar(usuario);
        } else {
            alert('Um ou mais campos estão inválidos.');
        }
    }

    function cadastrar(usuario) {
        createUserWithEmailAndPassword(auth, usuario.email, usuario.senha).then((_) => {
            // navigation.navigate('TelasInternas');
            alert('navigation de sacanagem.');
        }).catch((_) => {
            alert('Falha ao Cadastrar.');
        });
    }


    const [email, onChangeEmail] = React.useState('');
    const [senha, onChangeSenha] = React.useState('');
    const [nome, onChangeNome] = React.useState('');
    const [periodo, onChangePeriodo] = React.useState('');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior={"height"} style={styles.container}>
                <View style={styles.subContainer}>
                    <Image source={logo} style={styles.image} resizeMode='stretch' />
                    <InputCustom placeholder='Nome:' text={nome} changeText={onChangeNome} />
                    <InputCustom placeholder='Periodo:' text={periodo} changeText={onChangePeriodo} />
                    <InputCustom placeholder='Email:' text={email} changeText={onChangeEmail} />
                    <InputCustom placeholder='Senha:' security={true} text={senha} changeText={onChangeSenha} />
                    <ButtonCustom title='Cadastrar' press={() => preparaSalvar(email, senha, senhaVerificadora, nome, periodo)} />
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}
