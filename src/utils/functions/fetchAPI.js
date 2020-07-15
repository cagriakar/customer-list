import axios from 'axios';

export default async function fetchAPI(...args) {
	const response = await axios(...args);
	const { data } = response;
	return data;
}
