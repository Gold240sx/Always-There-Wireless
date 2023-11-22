"use client"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@components/shadcn/ui/tooltip"
import React, { useState, useEffect } from "react"
import { Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { SiteParams } from "@context/library"
import { useAuth, SignOut } from "@firebase/authFunctions"
import Image from "next/image"
import Link from "next/link"
import SiteIcon from "../siteIcon" // in place of a static image

export default function TWNavbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const { navigation, adminNavigation } = SiteParams
	const { user, isAdmin, userData } = useAuth(true)

	useEffect(() => {}, [user])

	return (
		<header className=" w-full">
			{mobileMenuOpen && (
				<div className="absolute bg-white/50 z-50 dark:bg-zinc-700/50 blur-sm backdrop-blur-md  h-screen w-screen"></div>
			)}
			<nav
				className="mx-auto flex relative max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
				aria-label="Global">
				<div id="main-site-logo" className="flex lg:flex-0">
					<Link href="/">
						<h1 className="sr-only">Free Phones Today</h1>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<SiteIcon
										className="w-16 h-16 text-5xl"
										textClassName="font-outline-2 mt-[11px]"
									/>
								</TooltipTrigger>
								<TooltipContent className="text-white rounded-lg bg-zinc-700">
									<p>Home</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</Link>
				</div>
				<div
					id="main-site-nav-links"
					className="hidden md:flex flex-1 pr-10 items-center justify-center text-xl mx-auto md:gap-x-12">
					{!isAdmin &&
						navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="font-medium text-gray-500 hover:text-gray-900">
								{item.name}
							</Link>
						))}
					{isAdmin &&
						adminNavigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="font-medium text-gray-500 hover:text-gray-900">
								{item.name}
							</Link>
						))}
				</div>
				<div
					id="login-actions"
					className="hidden gap-3 md:absolute md:inset-y-0 md:right-10 md:flex md:items-center md:justify-end">
					<div className="flex flex-col gap-2 items-right">
						<div className="flex items-end gap-3">
							{isAdmin && (
								<div className="flex items-end w-full">
									<p className="px-3 py-1 ml-auto text-sm text-right text-white bg-black rounded-full w-fit">
										ADMIN
									</p>
								</div>
							)}
							{!user && (
								<span className="inline-flex rounded-md shadow">
									<Link
										href="/signIn"
										className="inline-flex items-center px-4 py-2 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-gray-50">
										Log in
									</Link>
								</span>
							)}
							{user && (
								<span className="inline-flex rounded-md shadow">
									<button
										onClick={SignOut}
										className="inline-flex items-center px-4 py-2 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md whitespace-nowrap hover:bg-gray-50">
										Log out
									</button>
								</span>
							)}
						</div>
						<Link href={`/users/${userData?.userId}`}>
							<div className="flex items-center gap-3 align-middle">
								{userData && (
									<p className="text-right ">
										Welcome{" "}
										<span className="text-amber-500">
											{userData.username}
										</span>
										!
									</p>
								)}
								{userData && (
									<Image
										alt="avatar"
										src={userData.avatarUrl}
										className="w-10 h-10 ml-auto rounded-full"
									/>
								)}
							</div>
						</Link>
					</div>
				</div>
				<div id="main-menu-open button" className="flex lg:hidden">
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
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel
					id="mobile-menu-nav"
					className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex justify-between gap-x-6 lg:pr-10">
						<Link
							id="mobile-nav-main-site-logo"
							href="/"
							onClick={() => setMobileMenuOpen(false)}
							className="focus:ring-transparent hover:focus-within:ring-0 ring-0">
							<h1 className="sr-only">Free Phones Today</h1>
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger>
										<SiteIcon
											className="w-16 h-16 text-5xl scale-75"
											textClassName="font-outline-2 mt-[11px]"
										/>
									</TooltipTrigger>
									<TooltipContent className="text-white rounded-lg bg-zinc-700">
										<p>Go Home</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</Link>
						<div className="flex items-center gap-3">
							{!user && (
								<span className="inline-flex rounded-md shadow">
									<Link
										href="/signIn"
										className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
										Sign Up
									</Link>
								</span>
							)}
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileMenuOpen(false)}>
								<span className="sr-only">Close menu</span>
								<XMarkIcon
									className="h-6 w-6"
									aria-hidden="true"
								/>
							</button>
						</div>
					</div>
					<div id="mobile-nav-links" className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-xl leading-7 text-zinc-500 hover:bg-gray-50">
										{item.name}
									</a>
								))}
							</div>
							<div className="py-6">
								{!user && (
									<span className="inline-flex rounded-md shadow">
										<Link
											href="/signIn"
											className="inline-flex items-center px-4 py-2 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-gray-50">
											Log in
										</Link>
									</span>
								)}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	)
}
