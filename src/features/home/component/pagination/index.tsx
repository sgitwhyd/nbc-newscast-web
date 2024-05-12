"use client";

import RPagination from "rc-pagination";
import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import { updateSearchParams } from "@/utils";

type PaginationProps = {
	pageSize: number;
	totalItems: number;
};

const Pagination: FC<PaginationProps> = ({ pageSize, totalItems }) => {
	const router = useRouter();
	const page = Number(router?.query?.page);
	const [currentPage, setCurrentPage] = useState(page || 1);

	const handlePageChange = (page: number) => {
		const newPathname = updateSearchParams("page", page);
		router.push(newPathname);
		setCurrentPage(page);
	};

	return (
		<RPagination
			current={currentPage}
			total={totalItems}
			pageSize={pageSize}
			onChange={handlePageChange}
		/>
	);
};

export default Pagination;
