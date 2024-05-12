import React from "react";
import clsx from "clsx";
import { useRouter } from "next/router";

import ContentLayout from "@/components/layout/content-layout";
import { poppins } from "@/libs/font";

const NoCategoryFound = () => {
	const router = useRouter();

	return (
		<ContentLayout>
			<div
				className={clsx(
					"flex flex-col justify-center items-center space-y-5",
					poppins.className
				)}>
				<h1 className="text-5xl font-bold">Opss...</h1>
				<p className="text-center">
					your category search was not found or the category does not exist
				</p>
				<button
					className="bg-brand-red-500 text-white font-semibold px-10 py-3 uppercase mb-5 rounded-md"
					onClick={() => router.push("/")}>
					Back
				</button>
			</div>
		</ContentLayout>
	);
};

export default NoCategoryFound;
