
import React, { View } from 'react-native';
import { Route } from './src/routes';
import { styles } from './styles';
import 'react-native-gesture-handler';


export default function App() {
  return (
    <View style={styles.container}>
      <Route />
    </View>
  )
}
