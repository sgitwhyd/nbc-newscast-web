import React, { FC } from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

import { poppins } from "@/libs/font";
import ContentLayout from "@/components/layout/content-layout";

import { IArticle } from "@/types/news";
import clsx from "clsx";

type TrendingCardProps = {
	article: IArticle;
};

const TrendingCard: FC<TrendingCardProps> = ({ article }) => {
	return (
		<ContentLayout>
			<div
				className={`${poppins.className} mb-5 w-full flex  md:gap-[50px] lg:gap-[76px] lg:mt-8 justify-between md:min-h-[500px]`}>
				{/* image on desktop */}
				<div
					className={clsx(
						"relative -z-10 md:min-w-[350px] md:h-[400px] self-center lg:h-[500px]  max-h-[500px] hidden md:flex flex-1",
						{
							"flex justify-center items-center bg-gray-300":
								!article.urlToImage,
						}
					)}>
					{article.urlToImage ? (
						<Image
							src={article.urlToImage}
							alt={article.title}
							fill
							className="object-contain"
						/>
					) : (
						<div className="">No Image Displayed</div>
					)}
				</div>
				<div className="flex flex-col justify-center max-w-lg">
					<div className="flex justify-between items-center">
						<p className="text-brand-red-500 font-semibold text-sm">Trending</p>
						<div className="flex items-center space-x-5">
							<Image
								src="/icons/love.svg"
								alt="love news icon"
								width={18}
								height={18}
							/>
							<Image
								src="/icons/share.svg"
								alt="share news icon"
								width={13}
								height={16}
							/>
							<Image
								src="/icons/save.svg"
								alt="save news icon"
								width={10}
								height={16}
							/>
						</div>
					</div>

					<Link
						href={article.url}
						target="_blank"
						className="font-semibold text-2xl mt-[15px] leading-[150%] mb-[30px] md:text-xl lg:text-4xl md:mb-0">
						{article.title}
					</Link>

					{/* image on mobile */}
					<div
						className={clsx("relative w-full max-w-lg h-[220px] md:hidden", {
							"flex items-center justify-center bg-gray-300":
								!article.urlToImage,
						})}>
						{article.urlToImage ? (
							<Image
								src={article.urlToImage}
								alt={article.title}
								sizes="100vw"
								fill
								className=" object-cover"
							/>
						) : (
							<div className="">No Image Displayed</div>
						)}
					</div>

					<p className="mt-5 mb-[22px] text-sm md:text-[15px] pr-10">
						{article.description}
					</p>
					<div className="text-xs flex font-normal text-brand-gray-200">
						<p className="flex-[0.3] md:flex-[0.4]">
							{moment(article.publishedAt).fromNow()}
						</p>
						<p className="flex-1 justify-start opacity-70">
							By {article.author} | 4min read
						</p>
					</div>
				</div>
			</div>
		</ContentLayout>
	);
};

export default TrendingCard;
