import { getCountryCode } from "@/utils/location";

export const NEWS_CATEGORY = [
	"business",
	"entertainment",
	"health",
	"science",
	"sports",
	"technology",
];

export const NEWSAPI_BASEURL = process.env.NEXT_PUBLIC_NEWSAPI_BASEURL;
export const NEWSAPI_APIKEY = process.env.NEXT_PUBLIC_NEWSAPI_APIKEY;
