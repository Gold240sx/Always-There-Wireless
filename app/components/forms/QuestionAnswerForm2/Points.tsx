"use client"
import * as React from "react"
import { useState, useEffect } from "react"
import { format, utcToZonedTime } from "date-fns" // date-fns-tz alternative for local time Zoned time
import { useForm, SubmitHandler } from "react-hook-form"
import { PointsSchema } from "./formSupport/formSchema"
import { z } from "zod"

type PointsProps = {
	store: z.infer<typeof PointsSchema>
	onSubmit: SubmitHandler<z.infer<typeof PointsSchema>>
}

const Points: React.FC<PointsProps> = ({ onSubmit, store }) => {
	const {
		handleSubmit,
		register,
		setValue,
		reset,
		formState: { errors, isValid },
	} = useForm({
		// defaultValues: updatedStore,
		mode: "onChange",
	})

	return (
		<div className="mx-6">
			<div className="border border-zinc-400 rounded-3xl p-5">
				<p>(array)</p>
				<h1>Points</h1>
				<h2>Sub Points</h2>
			</div>
			<div className="border border-zinc-400 rounded-3xl p-5">
				<p>(array)</p>
				<h3>Facts</h3>
				<h4>
					proofs / references: Types: -Oral law, Ancient Songs,
					Historical Record, Eyewitness Testimony, Archeological
				</h4>
			</div>
			<span className="font-bold w-full ">
				Groups: (Prophets, Sages, Historians, Apostles, Rabbi&#39;im)
			</span>
			<h3>
				<span className="font-bold">Writer / Speaker :</span> (Dropdown
				with custom input) Hashem, Moses, Rabbi Akiva, Rambam, Rashi,
				Maimonides, David, Ezekiel, Solomon, Ezra, Nehemiah, Asaph,
				Heman, Hosea, Amos, Obadiah, Micah, Zephaniah, Haggai,
				Zechariah, Malachi, Jude, John, Isaiah, Jeremiah, Joel, Pharoah,
				Jesus, Paul, or Custom
			</h3>
			<h3>
				<span className="font-bold">Audience (custom):</span> ( Same
				dropdown as Writer / Speaker ) + Sadducees / Pharisee /
				Egyptians, Church, Israel, Judah, goyyim or Custom (Input) -
				Multi-input
			</h3>
			<h3>Categories (Dropdown)</h3>
			<div className="border border-zinc-400 rounded-3xl p-5">
				<p>(array)</p>
				<h1>Title: Time Period</h1>
				<h3>Dropdown: (Periods, kingdoms, empires, wars, lifetimes)</h3>
				<h4>or Year</h4>
			</div>
			<div className="border border-zinc-400 rounded-3xl p-5">
				<p>(array)</p>
				<h3>Bible Refs</h3>
				<h4>Sefer Refs</h4>
			</div>
			<div className="border border-zinc-400 rounded-3xl p-5">
				<p>(array)</p>
				<h4>Title: External Refs</h4>
				<div className="flex gap-2">
					<p>- Book</p>
					<p>- Link</p>
					<p>- Person</p>
				</div>
			</div>
		</div>
	)
}

export default Points
