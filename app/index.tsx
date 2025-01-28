import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { login } from '@/redux/slices/authSlice';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function HomeScreen() {
	const router = useRouter();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useAppDispatch();
	const authState = useAppSelector((state) => state.auth);

	const handleLogin = async () => {
		dispatch(login());
		router.navigate('/profile');
	};

	if (authState.state === 'loading') {
		return <Text>Loading...</Text>;
	}

	if (authState.state === 'failed') {
		return <Text>Error: {authState.error}</Text>;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<TextInput
				style={styles.input}
				placeholder="Username"
				value={username}
				onChangeText={setUsername}
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>
			<Button title="Login" onPress={handleLogin} />
			<Button title="Register" onPress={() => router.navigate('/register')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 16,
	},
	title: {
		fontSize: 24,
		marginBottom: 16,
		textAlign: 'center',
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 12,
		paddingHorizontal: 8,
	},
});
