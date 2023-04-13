import MainLayout from "@/components/layout/main-layout"
import Head from "next/head"
import "../styles/globals.css"
import "../styles/general.sass"

export default function App({ Component, pageProps }) {
    return (
		<>
			<Head>
				<title>Events App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
      			<Component {...pageProps} />
			</MainLayout>
		</>
    )
}