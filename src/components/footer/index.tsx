import React from "react";
import Image from "next/image";
import Link from "next/link";

import { poppins } from "@/libs/font";
import ContentLayout from "@/components/layout/content-layout";

const FooterLink = {
	"privacy policy": "/",
	"do not sell my personal info": "/",
	"term of service": "/",
	"nbcnews.com site map": "/",
};

const routeFooterLink = {
	about: "/",
	contact: "/",
	careers: "/",
	Coupon: "/",
};

const sosmedLink = [
	{
		icon: "/icons/network.svg",
		path: "/",
		name: "network icon",
	},
	{
		icon: "/icons/twitter.svg",
		path: "/",
		name: "twitter icon",
	},
	{
		icon: "/icons/reddit.svg",
		path: "/",
		name: "reddit icon",
	},
	{
		icon: "/icons/facebook.svg",
		path: "/",
		name: "facebook icon",
	},
];

const Footer = () => {
	return (
		<footer
			className={`bg-brand-dark-blue-500 h-fit py-[30px] text-white w-full mt-[30px] md:mt-[60px]  ${poppins.className}`}>
			<ContentLayout>
				<div className="grid grid-cols-3 gap-y-[18px] ">
					<div className="flex flex-col col-span-3 md:col-span-3 md:justify-center md:items-center lg:col-span-1">
						<Image
							src="/icons/footer-logo.svg"
							alt="NBC News Logo"
							width={46}
							height={28}
						/>
						<p className="hidden md:block text-xs opacity-70 mt-10">
							Copyright © {new Date().getFullYear()} | NBC NEWS
						</p>
					</div>
					<ul className="flex flex-col col-span-2 md:col-span-2 space-y-3 lg:col-span-1">
						{Object.entries(FooterLink).map(([key, value]) => (
							<li key={key}>
								<Link
									href={value}
									className="capitalize text-[13px] font-medium ">
									{key}
								</Link>
							</li>
						))}
					</ul>
					<div className="flex flex-col md:items-center">
						<ul className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3">
							{Object.entries(routeFooterLink).map(([key, value]) => (
								<li key={key}>
									<Link
										href={value}
										className="capitalize text-[13px] font-medium">
										{key}
									</Link>
								</li>
							))}
						</ul>
						<div className="md:flex gap-10 justify-center my-8 hidden">
							{sosmedLink.map((item) => (
								<Link href={item.path} key={item.name}>
									<Image
										src={item.icon}
										alt={item.name}
										width={24}
										height={24}
									/>
								</Link>
							))}
						</div>
					</div>
				</div>
				<div className="flex gap-10 justify-center my-8 sm:hidden">
					{sosmedLink.map((item) => (
						<Link href={item.path} key={item.name}>
							<Image src={item.icon} alt={item.name} width={24} height={24} />
						</Link>
					))}
				</div>

				<hr className="bg-brand-gray-200 opacity-10 sm:hidden" />
				<p className=" md:hidden text-xs opacity-70 mt-5 text-center">
					Copyright © {new Date().getFullYear()} | NBC NEWS
				</p>
			</ContentLayout>
		</footer>
	);
};

export default Footer;
