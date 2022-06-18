import { View } from 'react-native';
import { Header } from '../../components/Header';
import { HeaderTable } from '../../components/HeaderTable';
import { styles } from './styles';

export function Groups() {
    return (
        <View style={styles.container}>
            <Header title='Grupos de Atividades' />
            <HeaderTable title='Grupos 1:' descricao='Atividades de complementação da formação social, humana e cultural' route='Grupo1' icone='human-edit'/>

            <HeaderTable title='Grupos 2:' descricao='Atividades de cunho comunitário e de interesse coletivo' route='Grupo2'  icone='hand-extended'/>

            <HeaderTable title='Grupos 3:' descricao='Atividades de iniciação científica, tecnológica e de formação profissional' route='Grupo3'  icone='monitor-edit'/>

        </View>
    )
}