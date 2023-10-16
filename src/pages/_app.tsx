import "@/styles/globals.css";
import "nprogress/nprogress.css";
import type { AppProps } from "next/app";
import RootLayout from "@/components/layout/root-layout";
import nProgress from "nprogress";
import { Router } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
	nProgress.configure({
		showSpinner: false,
	});

	Router.events.on("routeChangeStart", nProgress.start);
	Router.events.on("routeChangeError", nProgress.done);
	Router.events.on("routeChangeComplete", nProgress.done);
	return (
		<RootLayout>
			<Component {...pageProps} />
		</RootLayout>
	);
}
