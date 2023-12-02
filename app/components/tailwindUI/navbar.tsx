"use client"
import React, { useState, useEffect } from "react"
import { Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { SiteParams } from "@context/library"
import Link from "next/link"
// import Image from "next/image"
// import { companyLogo } from "@context/library"
// import Logo from "app/assets/icons/tenaktalk_icon_lg.png"

export default function TWNavbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const { navigation, companyName } = SiteParams

	useEffect(() => {
		// console.log("menuToggle")
	}, [mobileMenuOpen])
	//
	return (
		<header className="z-20 bg-white h-fit w-screen items-center justify-center flex flex-row-col">
			{mobileMenuOpen && (
				<div
					id="mobile-bg-blur-overlay"
					className="fixed h-full min-h-screen z-50 bg-white/50 inset-0 dark:bg-zinc-700/50 blur-sm backdrop-blur-md w-screen"></div>
			)}
			<nav
				className=" flex fixed top-0 bg-white z-10 justify-center  w-full  align-middle mx-auto items-center  gap-x-6 p-6 lg:px-8"
				aria-label="Global">
				<div className="flex lg:flex-1 max-w-7xl">
					<Link
						href="/"
						onClick={() => setMobileMenuOpen(false)}
						className="-m-1.5 p-1.5">
						<span className="sr-only">{companyName}</span>
						main nav logo
						{/* <img
							className="h-8 w-auto"
							src={companyLogo.medium}
							height={60}
							width={60}
							alt="site logo"
						/> */}
					</Link>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							onClick={() => setMobileMenuOpen(false)}
							className="text-sm font-semibold leading-6 text-gray-900">
							{item.name}
						</Link>
					))}
				</div>
				<div className="flex flex-1 items-center justify-end gap-x-6">
					<Link
						href="/signin"
						onClick={() => setMobileMenuOpen(false)}
						className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900">
						Log in
					</Link>
					<Link
						href="/signup"
						onClick={() => setMobileMenuOpen(false)}
						className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
						Sign up
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => {
							setMobileMenuOpen(true)
							console.log("clicked")
						}}>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
			</nav>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-10 blur-md" />
				{/* change the inste-y-0 to inset-0 for a left hand navbar */}
				<Dialog.Panel className="fixed z-20 h-full max-h-screen inset-y-0 right-0 w-full overflow-y-hidden bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center gap-x-6 h-auto">
						<Link
							href="/"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-1.5 p-1.5">
							<span className="sr-only">{companyName}</span>
							Mobile Company Logo
							{/* <img
								className="h-8 w-auto"
								// src="/brandMd.png"
								src=""
								height={60}
								width={60}
								alt="site logo"
							/> */}
						</Link>
						<Link
							href="/signup"
							onClick={() => setMobileMenuOpen(false)}
							className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
							Sign up
						</Link>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="pt-16 pl-4 flow-root h-full">
						<div className="-my-6 h-full justify-between flex-col flex divide-y divide-gray-500/10">
							<div className="space-y-2 py-6 h-full overflow-y-scroll overflow-x-hidden ">
								{navigation.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										onClick={() => setMobileMenuOpen(false)}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
										{item.name}
									</Link>
								))}
							</div>
							<div className="py-6 pb-0 h-fit">
								<Link
									href="/signin"
									onClick={() => setMobileMenuOpen(false)}
									className="mx-3 text-center bg-indigo-200 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-indigo-700 hover:bg-indigo-300">
									Log In
								</Link>
								<p className="text-zinc-300 text-center pt-2 text-sm">
									copyright 2024 - Michael Martell Development
								</p>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	)
}
