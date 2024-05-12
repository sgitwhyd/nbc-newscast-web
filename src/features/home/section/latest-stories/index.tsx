import React, { FC, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { clsx } from "clsx";
import Pagination from "@/features/home/component/pagination";

import { poppins } from "@/libs/font";
import ArticleList from "@/features/home/section/article-list";
import { IArticle } from "@/types/news";
import ContentLayout from "@/components/layout/content-layout";
import { updateSearchParams } from "@/utils";
import { NEWS_CATEGORY } from "@/constants/news";

const CATEGORY = ["Latest Stories", ...NEWS_CATEGORY];

type LatestStoriesProps = {
	articles: IArticle[];
	pageSize: number;
	totalItems: number;
};

const LatestStories: FC<LatestStoriesProps> = ({
	articles,
	pageSize,
	totalItems,
}) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [search, setSearch] = useState("");
	const categoryParam = searchParams.get("category");

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setSearch(event.target.value);
	};

	const handleSubmit = () => {
		setSearch("");
		alert(search);
	};

	const handleChangeCategory = (category: string) => {
		if (category === "latest stories") {
			category = "general";
		}

		const newPathName = updateSearchParams("category", category);

		router.push(newPathName, {
			scroll: false,
		});
	};

	return (
		<ContentLayout>
			<div
				className={`grid grid-cols-1 md:gap-20 mt-5 lg:grid-cols-3 ${poppins.className}`}>
				<div className="col-span-2">
					<div className="min-h-[42px] h-fit w-full px-5 py-2.5 bg-white flex justify-between items-center flex-wrap mb-[18px]">
						<div className="lg:flex gap-5 hidden ">
							{CATEGORY.map((category) => (
								<p
									key={category}
									className={clsx(
										"font-semibold capitalize relative text-sm cursor-pointer block",
										{
											"after:content-[' '] after:w-[40px] after:h-[2px] after:bg-brand-red-500 after:absolute after:bottom-0 after:rounded-full after:left-0":
												category === categoryParam ||
												(categoryParam === "general" &&
													category === "Latest Stories") ||
												(categoryParam === null &&
													category === "Latest Stories"),
										}
									)}
									onClick={() => handleChangeCategory(category.toLowerCase())}>
									{category}
								</p>
							))}
						</div>
						<Image
							src="/icons/grid.svg"
							width={27}
							height={24}
							alt="grid toggle icon"
						/>
					</div>
					{articles.length === 0 ? (
						<div className="">category not found</div>
					) : (
						<ArticleList articles={articles} />
					)}
					{/* <div className="flex justify-center my-[30px]">
						<button className="text-sm font-medium uppercase text-brand-red-500 border border-brand-red-500 w-[220px] h-[60px]">
							View More
						</button>
					</div> */}
					<Pagination pageSize={pageSize} totalItems={totalItems} />
				</div>
				<div className="flex flex-col col-span-2 lg:col-span-1">
					<h1 className="text-lg font-semibold mb-2.5">Location News</h1>
					<div className="bg-white h-[200px] pl-[14px] ">
						<h3 className="pt-[14px]">Get Location specific News</h3>
						<input
							type="text"
							value={search}
							className="p-4 border border-opacity-20 w-[calc(100%-46px)] focus:outline-none my-5"
							placeholder="Enter your locations"
							onChange={handleOnChange}
						/>
						<button
							className="bg-brand-red-500 text-white font-semibold px-5 py-3 uppercase mb-5 rounded-sm"
							onClick={handleSubmit}>
							Submit
						</button>
					</div>
				</div>
			</div>
		</ContentLayout>
	);
};

export default LatestStories;
