import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from 'react';
import { Image, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native';
import logo from '../../assets/UTFPR.png';
import { ButtonCustom } from '../../components/ButtonCustom';
import { InputCustom } from '../../components/InputCustom';
import { styles } from './styles';

export function Signin() {
    const [email, onChangeEmail] = React.useState('');
    const [senha, onChangeSenha] = React.useState('');
    const navigation = useNavigation();
    const auth = getAuth();

    function verificaLogin() {
        signInWithEmailAndPassword(auth, email, senha).then((userCredencials) => {
            navigation.navigate('TelasInternas', userCredencials.user.uid);
        }).catch((_) => {
            navigation.navigate('TelasInternas');
            alert('Falha no login')
        });
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior={'height'} style={styles.container}>
                <View style={styles.subContainer}>
                    <Image source={logo} style={styles.image} resizeMode='stretch' />
                    <InputCustom placeholder='Email:' text={email} changeText={onChangeEmail} />
                    <InputCustom placeholder='Senha:' security={true} text={senha} changeText={onChangeSenha} />
                    <ButtonCustom title='Login' press={() => verificaLogin()} />
                    <ButtonCustom title='Cadastre-se' press={() => navigation.navigate('Register')} />
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}
