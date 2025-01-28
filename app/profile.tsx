import { useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput, ActivityIndicator, Alert, Pressable } from 'react-native';
import axios from 'axios';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { login, logout } from '@/redux/slices/authSlice';
import { useAppSelector } from '@/hooks/useAppSelector';

const API_URL = 'https://jsonplaceholder.typicode.com/users/2';

const Profile = () => {
	const router = useRouter();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const authslice = useAppSelector((state) => state.auth);
	const [text, setText] = useState('');
	const dispatch = useAppDispatch();

	useEffect(() => {
		console.log(authslice);
		const fetchUser = async () => {
			try {
				const response = await axios.get(API_URL);
				setUser(response.data);
			} catch (error) {
				Alert.alert("Erreur", "Impossible de récupérer les informations utilisateur.");
				console.error("Erreur lors de la récupération du profil :", error);
			} finally {
				setLoading(false);
			}
		};

		fetchUser();
	}, []);

	if (loading) {
		return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
	}

	return (
		<View style={styles.container}>
			<Image
				style={styles.profileImage}
				source={{ uri: user?.profileImage }}
			/>
			<Text style={styles.name}>{user?.name || "Nom inconnu"}</Text>
			<Text style={styles.email}>{user?.email || "Email inconnu"}</Text>
			<Pressable  style={styles.pressable}  onPress={() => router.navigate('/')}>
				<Text>Main Page</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	loader: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	profileImage: {
		width: 150,
		height: 150,
		borderRadius: 75,
		marginBottom: 20,
	},
	name: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	email: {
		fontSize: 18,
		color: 'gray',
		marginBottom: 20,
	},
	input: {
		width: '80%',
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 20,
	},
	pressable: {
		backgroundColor: '#f0f0f0',
		padding: 10,
		borderRadius: 5,
	},
});

export default Profile;
