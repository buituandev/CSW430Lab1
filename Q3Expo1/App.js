import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [pressCount, setPressCount] = useState(0);

  return (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <Text>You've pressed the button: {pressCount} time(s)</Text>
      <Button
        title="Press me"
        onPress={() => setPressCount(pressCount + 1)}
      />
      <Text>Bui Anh Tuan-2131200024</Text>
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
