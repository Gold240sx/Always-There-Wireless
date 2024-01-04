
const stats = [
	{ label: "devices given every day", value: "10,000+" },
	{ label: "worth given per day", value: "$500,000+" },
	{ label: "customers served ( and growing )", value: "85,000 +" },
]

export default function About() {

	return (
		<div className="bg-transparent">
			{/* Header */}

			<main className="isolate ">
				{/* Hero section */}
				<div className="relative isolate -z-10">
					<svg
						className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
						aria-hidden="true">
						<defs>
							<pattern
								id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
								width={200}
								height={200}
								x="50%"
								y={-1}
								patternUnits="userSpaceOnUse">
								<path d="M.5 200V.5H200" fill="none" />
							</pattern>
						</defs>
						<svg x="50%" y={-1} className="overflow-visible fill-gray-50">
							<path
								d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
								strokeWidth={0}
							/>
						</svg>
						<rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
					</svg>
					<div
						className="absolute top-0 right-0 -ml-24 overflow-hidden left-1/2 -z-10 transform-gpu blur-3xl lg:ml-24 xl:ml-48"
						aria-hidden="true">
						<div
							className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
							style={{
								clipPath:
									"polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
							}}
						/>
					</div>
					<div className="overflow-hidden">
						<div className="px-6 pb-32 mx-auto max-w-7xl pt-36 sm:pt-60 lg:px-8 lg:pt-24">
							<div className="max-w-2xl mx-auto gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
								<div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
									<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
										We&apos;re bringing connection to the world!
									</h1>
									<p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
										With every device that we provide, we open a world of possibilities to those without the resources
										or circumstances to retrieve a device right now. Possibilities akin to a fresh tart, a hope, and a
										dream that we can all live in a world where every person has the ability to live according to their
										full potential.
									</p>
								</div>
								<div className="flex justify-end gap-8 mt-14 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
									<div className="flex-none pt-32 ml-auto space-y-8 w-44 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
										<div className="relative">
											<img
												src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
												alt=""
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
											/>
											<div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
									</div>
									<div className="flex-none mr-auto space-y-8 w-44 sm:mr-0 sm:pt-52 lg:pt-36">
										<div className="relative">
											<img
												src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
												alt=""
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
											/>
											<div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
										<div className="relative">
											<img
												src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
												alt=""
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
											/>
											<div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
									</div>
									<div className="flex-none pt-32 space-y-8 w-44 sm:pt-0">
										<div className="relative">
											<img
												src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
												alt=""
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
											/>
											<div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
										<div className="relative">
											<img
												src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
												alt=""
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
											/>
											<div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Content section */}
				<div className="px-6 mx-auto -mt-12 max-w-7xl sm:mt-0 lg:px-8 xl:-mt-16">
					<div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
						{/* <SheetsTestForm />
						<SendEmailTestForm /> */}
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
						<div className="flex flex-col mt-6 gap-x-8 gap-y-20 lg:flex-row">
							<div className="lg:w-full lg:max-w-2xl lg:flex-auto">
								<p className="text-xl leading-8 text-gray-600">
									Our mission started with the belief that our short times here on earth should be to serve one another.
									Without a doubt, mobile devices are a neccessary resource for securing work, paying bills, staying
									connected to others and positive mental health.
								</p>
								<div className="max-w-xl mt-10 text-base leading-7 text-gray-700">
									<p>
										In these times our devices are not only a lifeline but renewed confidence in the world and one&apos;s own
										abilities. With the help of our allies and the programs which provide these devices, we can make the
										world a more prossitive and brighter one and bring joy to many faced with challenges and adversity.
									</p>
									<p className="mt-10">
										We live by The Golden Rule and we are passionate about what we do. We accept partnerships and are
										growing larger day by day.
									</p>
								</div>
							</div>
							<div className="lg:flex lg:flex-auto lg:justify-center ">
								<dl className="w-64 pb-6 space-y-8 xl:w-80">
									{stats.map((stat) => (
										<div key={stat.label} className="flex flex-col-reverse gap-y-4">
											<dt className="text-base leading-7 text-gray-600">
												{stat.label}
												{stat !== stats[2] && (
													<span className="px-1 mt-3 text-lg font-semibold text-lime-600">*</span>
												)}
											</dt>
											<dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
										</div>
									))}
									<p className="pl-2 mt-3 text-lg font-semibold text-lime-600">
										*<span className="font-normal text-zinc-700">Average</span>
									</p>
								</dl>
							</div>
						</div>
					</div>
				</div>

				{/* Image section */}
				<div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
					<img
						src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
						alt=""
						className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
					/>
				</div>

				{/* Values section */}
				{/* <div className="px-6 mx-auto mt-32 max-w-7xl sm:mt-40 lg:px-8">
					<div className="max-w-2xl mx-auto lg:mx-0">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							With every dollar made through this we invest $0.10 to charity
						</p>
					</div>
					<div>
						<h3>This months charity: GivePower.org</h3>
						<h3>A non-profit who provides clean water through clean energy initiatives in Africa.</h3>
					</div>
					<dl className="grid max-w-2xl grid-cols-1 mx-auto mt-16 text-base leading-7 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{values.map((value) => (
							<div key={value.name}>
								<dt className="font-semibold text-gray-900">{value.name}</dt>
								<dd className="mt-1 text-gray-600">{value.description}</dd>
							</div>
						))}
					</dl>
				</div> */}

				{/* Logo cloud */}
				{/* <div className="relative mt-32 isolate -z-10 sm:mt-48">
					<div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
						<svg className="h-[40rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true">
							<defs>
								<pattern
									id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
									width={200}
									height={200}
									x="50%"
									y="50%"
									patternUnits="userSpaceOnUse"
									patternTransform="translate(-100 0)">
									<path d="M.5 200V.5H200" fill="none" />
								</pattern>
							</defs>
							<svg x="50%" y="50%" className="overflow-visible fill-gray-50">
								<path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />
							</svg>
							<rect width="100%" height="100%" strokeWidth={0} fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" />
						</svg>
					</div>
					<div className="px-6 mx-auto max-w-7xl lg:px-8">
						<h2 className="text-lg font-semibold leading-8 text-center text-gray-900">
							Trusted by the world’s most innovative teams
						</h2>
						<div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-10 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
							<img
								className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
								src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
								alt="Transistor"
								width={158}
								height={48}
							/>
							<img
								className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
								src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
								alt="Reform"
								width={158}
								height={48}
							/>
							<img
								className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
								src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
								alt="Tuple"
								width={158}
								height={48}
							/>
							<img
								className="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
								src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
								alt="SavvyCal"
								width={158}
								height={48}
							/>
							<img
								className="object-contain w-full col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
								src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
								alt="Statamic"
								width={158}
								height={48}
							/>
						</div>
					</div>
				</div> */}

				{/* Blog section */}
				{/* <div className="px-6 mx-auto mt-32 max-w-7xl sm:mt-40 lg:px-8">
					<div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
						<p className="mt-2 text-lg leading-8 text-gray-600">Vel dolorem qui facilis soluta sint aspernatur totam cumque.</p>
					</div>
					<div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 auto-rows-fr sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{blogPosts.map((post) => (
							<article
								key={post.id}
								className="relative flex flex-col justify-end px-8 pb-8 overflow-hidden bg-gray-900 isolate rounded-2xl pt-80 sm:pt-48 lg:pt-80">
								<img src={post.imageUrl} alt="" className="absolute inset-0 object-cover w-full h-full -z-10" />
								<div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
								<div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

								<div className="flex flex-wrap items-center overflow-hidden text-sm leading-6 text-gray-300 gap-y-1">
									<time dateTime={post.datetime} className="mr-8">
										{post.date}
									</time>
									<div className="flex items-center -ml-4 gap-x-4">
										<svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
											<circle cx={1} cy={1} r={1} />
										</svg>
										<div className="flex gap-x-2.5">
											<img src={post.author.imageUrl} alt="" className="flex-none w-6 h-6 rounded-full bg-white/10" />
											{post.author.name}
										</div>
									</div>
								</div>
								<h3 className="mt-3 text-lg font-semibold leading-6 text-white">
									<a href={post.href}>
										<span className="absolute inset-0" />
										{post.title}
									</a>
								</h3>
							</article>
						))}
					</div>
				</div> */}
			</main>
		</div>
	)
}