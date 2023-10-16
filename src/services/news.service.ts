import axiosInstance from "@/libs/axios";
import { INewsApiResponse, IErrorResponse } from "@/types/news";
import { getCountryCode } from "@/utils/location";
import { AxiosResponse, type AxiosError } from "axios";

export const getEverythingNews = async (
	query: string
): Promise<INewsApiResponse | IErrorResponse> => {
	let url = `/everything`;
	if (query) {
		url = `${url}?q=${query}`;
	}
	try {
		const response: AxiosResponse<INewsApiResponse> = await axiosInstance.get(
			url
		);
		const data = response.data;
		return data;
	} catch (error) {
		const err = error as AxiosError;

		const errorResponse: IErrorResponse = {
			code: err.code as string,
			message: err.message,
			status: err.response?.status as number,
		};

		return errorResponse;
	}
};

export const getTrendingNews = async (
	category: string = "general"
): Promise<INewsApiResponse | IErrorResponse> => {
	let url = "/top-headlines?";
	try {
		const countryCode = await getCountryCode();

		if (category) {
			url = `${url}category=${category.toLowerCase()}&country=us`;
		}

		const response: AxiosResponse<INewsApiResponse> = await axiosInstance.get(
			url
		);
		const data = response.data;
		return data;
	} catch (error) {
		const err = error as AxiosError;

		return {
			code: err.code as string,
			message: err.message,
		} as IErrorResponse;
	}
};
