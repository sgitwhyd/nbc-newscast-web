import axiosInstance from "@/libs/axios";
import { INewsApiResponse, IErrorResponse } from "@/types/news";
import { getCountryCode } from "@/utils/location";
import { AxiosResponse, type AxiosError } from "axios";

export const getEverythingNews = async (
	query: string,
	page?: number,
	pageSize?: number
): Promise<INewsApiResponse | IErrorResponse> => {
	let url = `/everything`;

	const body = {
		params: {
			q: query ? query : "us",
			page: page ? page : 1,
			pageSize: pageSize ? pageSize : 12,
		},
	};

	try {
		const response: AxiosResponse<INewsApiResponse> = await axiosInstance.get(
			url,
			body
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
	category: string = "general",
	page?: number,
	pageSize?: number
): Promise<INewsApiResponse | IErrorResponse> => {
	let url = "/top-headlines?";
	try {
		const countryCode = await getCountryCode();

		const body = {
			params: {
				category: category ? category : "general",
				page: page ? page : 1,
				pageSize: pageSize ? pageSize : 12,
				country: "us",
			},
		};

		const response: AxiosResponse<INewsApiResponse> = await axiosInstance.get(
			url,
			body
		);
		const data = response.data;
		return data;
	} catch (error) {
		const err = error as AxiosError;

		return {
			code: err.code as string,
			message: err.message,
			status: err.response?.status as number,
		} as IErrorResponse;
	}
};
