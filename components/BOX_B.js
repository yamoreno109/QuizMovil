import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function BOX_B() {
  return (
    <View style={styles_Box_B.container}>
      <Text>B</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles_Box_B = StyleSheet.create({
  container: {
    width: 400,
    height: 400,
    backgroundColor: '#4682B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});