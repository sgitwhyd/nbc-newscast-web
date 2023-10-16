import React from "react";
import Article from "../../component/article-card";
import { IArticle } from "@/types/news";

const ArticleList = ({ articles }: { articles: IArticle[] }) => {
	return (
		<div className=" grid grid-cols-1 lg:grid-cols-2 md:gap-4">
			{articles.map((article, index) => (
				<Article key={index} article={article} />
			))}
		</div>
	);
};

export default ArticleList;
