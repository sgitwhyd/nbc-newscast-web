import React, { FC } from "react";
import { poppins } from "@/libs/font";
import ContentLayout from "@/components/layout/content-layout";
import { IArticle } from "@/types/news";
import Marquee from "react-fast-marquee";
import Link from "next/link";

type BreakingNewsProps = {
	article: IArticle;
};

const BreakingNews: FC<BreakingNewsProps> = ({ article }) => {
	return (
		<ContentLayout>
			<Link
				href={article.url}
				target="_blank"
				className={`h-[84px] w-full bg-brand-red-500 flex flex-col items-center justify-center px-5 py-2.5 md:max-w-7xl md:mx-auto md:items-center ${poppins.className}`}>
				<div className="flex items-center space-x-[15px]">
					<div className="bg-white rounded-sm text-brand-red-500 text-sm px-2 py-1.5 text-[15px] lg:text-base">
						Breaking News
					</div>
					<p className="text-xl font-medium text-white hidden lg:block">
						{article.title}
					</p>
					<p className="opacity-70 text-sm lg:hidden">Tap to see full story</p>
				</div>
				<Marquee className="mt-2.5 lg:!hidden text-[14px] font-medium text-white">
					{article.title}
				</Marquee>
			</Link>
		</ContentLayout>
	);
};

export default BreakingNews;
