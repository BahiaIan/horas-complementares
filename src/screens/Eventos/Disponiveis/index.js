import { onValue, ref } from 'firebase/database';
import { FlatList, View } from 'react-native';
import { AtividadesDisponiveis } from '../../../components/AtividadesDisponiveis';
import { BotaoFlutuante } from '../../../components/BotaoFlutuante';
import { Header } from '../../../components/Header';
import { db } from "../../../config/firebaseConfig";
import { styles } from './styles';

const buscarDados = () => {
    let DATA = [];
    onValue(ref(db, '/atividadeDisponivel'), querySnapShot => {
        DATA = [];
        for (const key of Object.keys(querySnapShot.val())) {
            const atividade = querySnapShot.val()[key];
            atividade.id = key;
            DATA.push(atividade);
        };
    });
    return DATA;
}

export function Disponiveis() {
    return (
        <View style={styles.container}>
            <Header title='Atividades Disponiveis' />
            <FlatList
                data={buscarDados()}
                extraData={buscarDados()}
                refreshing={true}
                renderItem={({ item }) => (<AtividadesDisponiveis dados={item} />)}
                keyExtractor={item => item.id}
            />
            <BotaoFlutuante route='Cadastro' />
        </View>
    );
}