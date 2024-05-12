export interface INews {
	id: string;
	name: string;
	description: string;
	url: string;
	category: string;
	language: string;
	country: string;
}

export interface IArticle {
	source: {
		id: string;
		name: string;
	};
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
}

export interface INewsApiResponse {
	status: string;
	totalResults: number;
	articles: IArticle[];
}

export interface IErrorResponse {
	code: string;
	message: string;
	status: number;
}
