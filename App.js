import { Text, View, StyleSheet } from 'react-native';
import Formularz from './Formularz.js'
import Wave from './Wave.js'

export default function App() {
  return(
    <View style={styles.container}>
      <Formularz/>
      <Wave/>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD1F1",
  }
}