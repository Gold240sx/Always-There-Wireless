import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import TWNavbar from "@components/tailwindUI/navbar"
import TWFooter from "@components/tailwindUI/footer"
import "@styles/globals.css"
import Chevrons from "@components/tailwindUI/chevrons"
import { SiteParams } from "@context/library"
import BgPattern from "@components/bgPattern"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: SiteParams.companyName,
	description: SiteParams.siteDescription,
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} min-h-screen w-screen relative m-0 p-0`}>
				<BgPattern />
				<div className=" absolute flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"></div>
				<header className="fixed top-0 left-0 flex flex-col items-start justify-between w-full duration-500 align-center ">
					<TWNavbar />
					<Chevrons />
				</header>
				<main className=" flex h-full flex-col items-center justify-between p-24">
					<div className="flex items-center justify-center w-full max-w-5xl font-mono text-sm lg:flex">
						{children}
					</div>
				</main>
				<footer className="h-fit">
					<TWFooter />
				</footer>
			</body>
		</html>
	)
}
