import React from "react"
// import Chevrons from "@components/tailwindUI/chevrons"

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex scroll-smooth h-auto flex-col w-full pt-36 justify-between align-center">
			{/* <Chevrons /> */}
			<div className="flex justify-center w-full font-mono text-sm lg:flex">
				{children}
			</div>
		</main>
	)
}

export default HomeLayout
