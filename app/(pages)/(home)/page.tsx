"use client"
import { useState } from "react"
import Hero from "@components/homePage/hero"
import Faq from "@components/homePage/faq"
import TestimonialSection from "@components/homePage/testimonialSection"
import BgBlur from "@components/bgBlur"
import PopupModal from "@components/popupModal"
import { type FormType } from "@forms/FormSupport"

export default function Home() {
	const [formOpen, setFormOpen] = useState(false)
	const [form, setForm] = useState<FormType>("")

	const toggleMainForm = () => {
		setFormOpen(!formOpen)
	}

	return (
		<main
			className={`flex flex-col items-center justify-between w-full min-h-screen pt-6 `}>
			{/* // className={`${ 
			// 	formOpen === true ? "overflow-hidden h-screen" : ""
			// } flex flex-col items-center justify-between w-full min-h-screen pt-6 `}>*/}
			<div
				className={` relative items-center justify-between w-full font-mono text-sm`}>
				{/*// className={` ${
				// 	formOpen === true ? "overflow-hidden h-screen" : ""
				// } relative items-center justify-between w-full font-mono text-sm`}>*/}
				{formOpen && <BgBlur toggleMainForm={toggleMainForm} />}
				{formOpen && (
					<PopupModal toggleMainForm={toggleMainForm} form={form} />
				)}
				<Hero
					toggleMainForm={toggleMainForm}
					formOpen={formOpen}
					setForm={setForm}
					form={form}
				/>
				<TestimonialSection />
				<Faq
					toggleMainForm={toggleMainForm}
					formOpen={formOpen}
					setForm={setForm}
				/>
			</div>
		</main>
	)
}
