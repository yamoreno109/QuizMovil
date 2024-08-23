import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BOX_A from './components/BOX_A';
import BOX_B from './components/BOX_B';
import BOX_C from './components/BOX_C';

export default function App() {
  return (
    <View style={styles.container}>
      <BOX_A />
      <BOX_B />
      <BOX_C />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between', 
    alignItems: 'center',    
    flexWrap: "wrap", 
  },
});
