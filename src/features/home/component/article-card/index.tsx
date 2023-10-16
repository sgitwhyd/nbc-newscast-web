import React, { FC } from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

import { poppins } from "@/libs/font";

import { IArticle } from "@/types/news";
import clsx from "clsx";

const Article: FC<{
	article: IArticle;
}> = ({ article }) => {
	return (
		<div
			className={`mb-5 drop-shadow-md rounded-tl-md rounded-tr-md overflow-hidden bg-white ${poppins.className}`}>
			<div
				className={clsx("relative w-full h-[200px] ", {
					"flex items-center justify-center bg-gray-300": !article.urlToImage,
				})}>
				{article.urlToImage ? (
					<Image
						src={article.urlToImage}
						alt={article.title}
						fill
						sizes="100vw"
						className="object-cover "
						priority
						placeholder="blur"
						blurDataURL={article.urlToImage}
					/>
				) : (
					<div className="">No Image Displayed</div>
				)}
			</div>
			<div className="px-[25px] mt-4">
				<Link
					href={article.url}
					target="_blank"
					className="text-[14px] font-semibold">
					{article.title}
				</Link>
				<p className="mt-2 text-[13px] font-medium line-clamp-3">
					{article.description}
				</p>
				<div className="flex mt-[25px] mb-5 text-xs">
					<p className="flex-[0.3]">{moment(article.publishedAt).fromNow()}</p>
					<p className="flex-1 opacity-70">By {article.author} | 4min read</p>
				</div>
			</div>
			<hr className="mb-5 bg-brand-gray-200 " />
			<div className="flex justify-center space-x-[30px] mb-5">
				<div className="flex items-center gap-[7px]">
					<Image
						src="/icons/love.svg"
						alt="love news icon"
						width={18}
						height={18}
					/>
					<p className="text-[10px] font-medium">25</p>
				</div>
				<div className="flex items-center gap-[7px]">
					<Image
						src="/icons/share.svg"
						alt="share news icon"
						width={13}
						height={16}
					/>
					<p className="text-[10px] font-medium">72</p>
				</div>
				<Image
					src="/icons/save.svg"
					alt="save news icon"
					width={10}
					height={16}
				/>
			</div>
		</div>
	);
};

export default Article;
