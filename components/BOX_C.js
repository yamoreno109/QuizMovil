import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function BOX_C() {
  return (
    <View style={styles_Box_c.container}>
      <Text>C</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles_Box_c = StyleSheet.create({
  container: {
    width: 400,
    height: 200,
    backgroundColor: '#3CB371',
    alignItems: 'center',
    justifyContent: 'center',
  },
});