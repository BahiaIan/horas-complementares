
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { Route } from './src/routes';
import { styles } from './styles';


export default function App() {
  return (
    <View style={styles.container}>
      <Route />
    </View>
  )
}
