import { Image, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import logo from '../../assets/UTFPR.png';
import { ButtonCustom } from '../../components/ButtonCustom';
import { InputCustom } from '../../components/InputCustom';
import { styles } from './styles';

export function Signin() {
    const [usuario, onChangeUsuario] = React.useState('');
    const [senha, onChangeSenha] = React.useState('');
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior={"height"} style={styles.container}>
                <View style={styles.subContainer}>
                    <Image source={logo} style={styles.image} resizeMode='stretch' />
                    <InputCustom placeholder='Usuário:' text={usuario} changeText={onChangeUsuario} />
                    <InputCustom placeholder='Senha:' security={true} text={senha} changeText={onChangeSenha} />
                    <ButtonCustom title='Login' />
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}
