import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Register = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Register</Text>
			<TextInput style={styles.input} placeholder="Username" />
			<TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
			<TextInput style={styles.input} placeholder="Password" secureTextEntry />
			<Button title="Register" onPress={() => { /* Handle registration logic */ }} />
		</View>
	);
};

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

export default Register;
