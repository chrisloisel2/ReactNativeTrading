import axios from 'axios';

const fetcher = axios.create({
	baseURL: 'http://localhost:3000', // Change the port number if needed
	headers: {
		'Content-Type': 'application/json',
	},
});

const connect = async (email : string, password : string) => {
	try {
		const response = await fetcher.post('/login', { email, password });
		return response.data;
	} catch (error) {
		throw error;
	}
};

export { connect };
