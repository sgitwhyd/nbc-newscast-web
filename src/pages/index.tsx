import Head from "next/head";

import { IArticle, IErrorResponse, INewsApiResponse } from "@/types/news";
import TrendingCard from "@/features/home/component/trending-card";
import BreakingNews from "@/features/home/section/breaking-news";
import LatestStories from "@/features/home/section/latest-stories";

import { getEverythingNews, getTrendingNews } from "@/services/news.service";

export const getServerSideProps = async (context: {
	query: {
		category: string;
	};
}) => {
	const category = context.query.category;
	const [everythingNews, trendingNews] = await Promise.all([
		getEverythingNews("elon musk"),
		getTrendingNews(category ? category : "general"),
	]);

	if ((everythingNews.status as number) >= 404) {
		const { message } = trendingNews as IErrorResponse;
		return {
			props: {
				error: message,
			},
		};
	} else {
		const { articles } = everythingNews as INewsApiResponse;
		const { articles: trendingArticle } = trendingNews as INewsApiResponse;
		return {
			props: {
				trendingNews: trendingArticle,
				everythingNews: articles,
			},
		};
	}
};

export default function Home({
	trendingNews,
	everythingNews,
	error,
}: {
	everythingNews: IArticle[];
	trendingNews: IArticle[];
	error: string;
}) {
	return (
		<>
			<Head>
				<title>Newscast App</title>
			</Head>
			{error ? (
				<h1>{error}</h1>
			) : (
				<>
					<TrendingCard article={trendingNews[0]} />
					<BreakingNews article={trendingNews[4]} />
					<LatestStories articles={trendingNews.slice(1, 5)} />
				</>
			)}
		</>
	);
}
