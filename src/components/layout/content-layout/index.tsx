import React from "react";

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className=" px-5 md:max-w-2xl lg:max-w-7xl lg:px-10 mx-auto ">
			{children}
		</div>
	);
};

export default ContentLayout;
