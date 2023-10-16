import axios from "axios";

const getCurrentIp = async (): Promise<string> => {
	const response = await axios.get("https://api.ipify.org?format=json");
	const { ip } = response.data;

	return ip;
};

export const getCountryCode = async (): Promise<string> => {
	const ip = await getCurrentIp();
	const response = await axios.get(`http://ip-api.com/json/${ip}`);
	const { countryCode } = response.data;
	return countryCode;
};
