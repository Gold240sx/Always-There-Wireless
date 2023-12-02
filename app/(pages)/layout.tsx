import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
// import Link from "next/link"
// import Navbar from "@components/navbar"
import TWNavbar from "../components/tailwindUI/navbar"
import TWFooter from "../components/tailwindUI/footer"
import "../styles/globals.css"
import Chevrons from "../components/tailwindUI/chevrons"
// import { cookies } from "next/headers"
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"  // if using supabase
// import { useSearchParams } from "next/navigation"
// import { cache } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "2023 Base",
	description: "A Web description",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	// console.log(cookies)
	return (
		<html lang="en">
			<body
				className={`${inter.className} min-h-[100vh] h-full w-screen relative m-0 p-0`}>
				<header className="top-1 fixed z-10 left-0 flex flex-col items-start justify-between w-full  align-center ">
					{/* <Link
						href="/"
						className="flex mr-auto text-2xl font-bold text-white uppercase logo whitespace-nowrap w-fit">
						Tenak Talk
					</Link> */}
					{/* <Navbar /> */}
					<TWNavbar />
				</header>

				<main className="relative flex flex-col h-full w-screen">
					{/* pt-24 accounts for the navbar. dont do py-24 or there will be issues with background height. */}
					<Chevrons />
					<div className="grid grid-cols-3 pt-[84px]  px-5 md:px-10 lg:px-2 pb-0 md:grid-cols:6 lg:grid-cols-9 xl:grid-cols-12 h-auto justify-center w-full max-w-5xl font-mono text-sm">
						{children}
					</div>
					<footer className="h-fit w-full  mt-auto  z-10 ">
						<TWFooter />
					</footer>
				</main>
				<div className="flex pointer-events-none absolute -z-50 h-full before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"></div>
			</body>
		</html>
	)
}

// export const createServerClient = cache(() => {
// 	// const cookieStore = cookies()
// 	// return createServerComponentClient({
// 	// 	cookies: () => cookieStore,
// 	// })
// })
