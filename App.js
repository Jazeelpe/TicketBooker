import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation/StackNavigator';

export default function App() {
  return (
    <>
      <Navigation/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
