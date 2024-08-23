import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function BOX_A() {
  return (
    <View style={styles_Box_A.container}>
      <Text>A</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles_Box_A = StyleSheet.create({
  container: {
    width: 400,
    height: 200,
    backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center',
  },
});