import axios from "axios";
import { NEWSAPI_BASEURL, NEWSAPI_APIKEY } from "@/constants/news";

const axiosInstance = axios.create({
	baseURL: NEWSAPI_BASEURL,
	params: {
		apiKey: NEWSAPI_APIKEY,
	},
});

export default axiosInstance;
