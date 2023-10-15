import { Nunito_Sans, Poppins } from "next/font/google";

export const Nunito = Nunito_Sans({
	subsets: ["latin"],
});

export const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
});
