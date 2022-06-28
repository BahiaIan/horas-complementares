import { onValue, ref } from 'firebase/database';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AtividadesLancada } from '../../components/AtividadeLancada';
import { BotaoFlutuante } from '../../components/BotaoFlutuante';
import { ProfileHeader } from '../../components/ProfileHeader';
import { db } from "../../config/firebaseConfig";
import { styles } from './styles';
const DATA = [];

export function Realizadas() {
    onValue(ref(db, '/usuario/Mm1oof6opDdQJ5aQlnKwmWXtk0u2/atividadesLancadas/atividades'), querySnapShot => {
        DATA.length = 0;
        for (const key of Object.keys(querySnapShot.val())) {
            const atividade = querySnapShot.val()[key];
            atividade.id = key;
            DATA.push(atividade);
        };
        console.log(DATA)
    });
    return (
        <View style={styles.container}>
            <ProfileHeader id='Mm1oof6opDdQJ5aQlnKwmWXtk0u2' />

            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    DATA.map(item => { return <AtividadesLancada key={item.id} dados={item} route='Atividade' routeToReturn='Realizadas' /> })
                }
            </ScrollView>
            <BotaoFlutuante route='Adicionar' />
        </View>
    );
}