import React, { FC } from "react";
import ContentLayout from "@/components/layout/content-layout";
import { IErrorResponse } from "@/types/news";

type ErrorBoundariesProps = {
	error: IErrorResponse;
};

const ErroBoundaries: FC<ErrorBoundariesProps> = ({ error }) => {
	return (
		<ContentLayout>
			<div className="flex flex-col items-center justify-center">
				<h1 className="font-bold text-3xl text-center">{error.status}</h1>
				<p>{error.code}</p>
				<p>{error.message}</p>
			</div>
		</ContentLayout>
	);
};

export default ErroBoundaries;
