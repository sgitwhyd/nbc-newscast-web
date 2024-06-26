import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NEWS_CATEGORY } from "@/constants/news";

const Navigation = () => {
	const [isToggleShowing, setIsToggleShowing] = useState(false);

	const toggleNavbar = () => {
		setIsToggleShowing((prev) => !prev);
	};

	return (
		<header className="sticky top-0 z-50 ">
			<nav className="h-20  bg-white bg-opacity-80 backdrop-blur-md backdrop:blur-[14px] z-20 flex items-center">
				<div className="px-5 w-full md:max-w-2xl lg:max-w-7xl lg:px-10 mx-auto flex items-center justify-between">
					<Link href="/">
						<Image
							src="/images/logo.svg"
							alt="Newscast Logo"
							width={50}
							height={50}
						/>
					</Link>

					{/* Menu on desktop */}
					<div className="hidden  space-x-10  transition-all">
						{NEWS_CATEGORY.map((category) => (
							<Link
								key={category}
								href="/"
								className="capitalize font-semibold">
								{category}
							</Link>
						))}
					</div>

					<div
						className={`absolute left-0 top-20 w-full bg-white transition-all p-5 lg:hidden ${
							isToggleShowing ? "h-20 opacity-100  z-[99]" : "h-0 opacity-0"
						}`}>
						<div className="flex flex-wrap space-x-5 justify-center ">
							{NEWS_CATEGORY.map((category) => (
								<Link
									key={category}
									href="/"
									className="capitalize font-semibold ">
									{category}
								</Link>
							))}
						</div>
					</div>

					<div className="flex space-x-[50px]">
						<Image
							src="/icons/person.svg"
							alt="person icon"
							width={18}
							height={18}
						/>
						<Image
							src="/icons/magnifier.svg"
							alt="magnifier icon"
							width={18}
							height={18}
						/>
						<Image
							src="/icons/hamburger.svg"
							alt="hamburger icon"
							width={18}
							height={18}
							onClick={toggleNavbar}
							className="lg:hidden"
						/>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navigation;
