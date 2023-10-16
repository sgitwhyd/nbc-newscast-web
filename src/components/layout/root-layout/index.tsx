import React from "react";
import { Nunito } from "@/libs/font";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col justify-between min-h-screen">
			<Navigation />
			<main className={`${Nunito.className} `}>{children}</main>
			<Footer />
		</div>
	);
};

export default RootLayout;
