import { React } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CameraScreen from './CameraScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <CameraScreen/>
      <Text>Text Extractor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
