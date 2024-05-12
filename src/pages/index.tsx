import Head from "next/head";

import { IErrorResponse, INewsApiResponse } from "@/types/news";
import TrendingCard from "@/features/home/component/trending-card";
import BreakingNews from "@/features/home/section/breaking-news";
import LatestStories from "@/features/home/section/latest-stories";
import NoCategoryFound from "@/components/no-category-found";
import ErroBoundaries from "@/components/error-boundaries";

import { getEverythingNews, getTrendingNews } from "@/services/news.service";

export const getServerSideProps = async (context: {
	query: {
		category: string;
		page: number;
	};
}) => {
	const category = context.query.category;
	const trendingPageSize = 6;
	const trendingCurrentPage = context.query.page
		? Number(context.query.page)
		: 1;

	const [everythingNews, trendingNews] = await Promise.all([
		getEverythingNews("prabowo", 1, 1),
		getTrendingNews(
			category ? category : "general",
			trendingCurrentPage,
			trendingPageSize
		),
	]);

	if (
		(trendingNews.status as number) >= 404 ||
		(everythingNews.status as number) >= 404
	) {
		const error = trendingNews as IErrorResponse;
		return {
			props: {
				error,
			},
		};
	} else {
		const everythingNewsData = everythingNews as INewsApiResponse;
		const trendingNewsData = trendingNews as INewsApiResponse;
		const trendingNewsTotalItems = trendingNewsData.totalResults;

		return {
			props: {
				trendingNews: trendingNewsData,
				everythingNews: everythingNewsData,
				error: null,
				trendingPageSize,
				trendingNewsTotalItems,
				trendingCurrentPage,
			},
		};
	}
};

export default function Home({
	trendingNews,
	everythingNews,
	error,
	trendingPageSize,
	trendingNewsTotalItems,
}: {
	everythingNews: INewsApiResponse;
	trendingNews: INewsApiResponse;
	error: IErrorResponse;
	trendingPageSize: number;
	trendingNewsTotalItems: number;
}) {
	return (
		<>
			<Head>
				<title>Newscast App</title>
			</Head>
			{error ? (
				<ErroBoundaries error={error} />
			) : trendingNews.articles.length === 0 ? (
				<NoCategoryFound />
			) : (
				<>
					<TrendingCard article={everythingNews.articles[0]} />
					<BreakingNews
						article={
							trendingNews.articles[trendingNews.articles.length > 1 ? 2 : 0]
						}
					/>
					<LatestStories
						articles={trendingNews.articles}
						pageSize={trendingPageSize}
						totalItems={trendingNewsTotalItems}
					/>
				</>
			)}
		</>
	);
}
