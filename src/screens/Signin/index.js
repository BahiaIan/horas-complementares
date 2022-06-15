import { Image, View } from 'react-native';
import logo from '../../assets/UTFPR.png';
import { ButtonCustom } from '../../components/ButtonCustom';
import { InputCustom } from '../../components/InputCustom';
import { styles } from './styles';

export function Signin() {
    return (
        <View style={styles.container}>
            {/* <View style={styles.subContainer}> */}
                <Image source={logo} style={styles.image} resizeMode='stretch' />
                <InputCustom placeholder='Usuário:' />
                <InputCustom placeholder='Senha:' />
                <ButtonCustom title='Login' />
            {/* </View> */}
        </View>
    )
}
