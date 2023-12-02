import React from "react"
import { SiteParams } from "@/app/context/library"

const navigation = SiteParams.footerNavigation
export default function Footer() {
	return (
		<section className="bg-white/70 z-20">
			<div className=" py-12 md:flex px-10 md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center space-x-6 md:order-2">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-gray-400 hover:text-gray-500">
							<span className="sr-only">{item.name}</span>
							<item.icon className="h-6 w-6" aria-hidden="true" />
						</a>
					))}
				</div>
				<div className=" md:order-1 md:mt-0">
					<p className="text-center text-xs leading-5 text-gray-500">
						&copy; 2020 Your Company, Inc. All rights reserved.
					</p>
				</div>
			</div>
		</section>
	)
}
