import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from './Service/fetcher';

export default function HomeScreen() {
	const router = useRouter();

	const callAPI = async () => {
		connect('admin', 'admin');
	};

  return (
    <View style={styles.container}>
	  <Button title="Main Page" onPress={() => router.navigate('/profile')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
