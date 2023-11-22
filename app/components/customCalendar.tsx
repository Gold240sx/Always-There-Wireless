"use client"
import React, { useEffect, useState, useRef } from "react"
import Calendar from "react-calendar"
import { format } from "date-fns"

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

export const CustomCalendar = ({ updateFields, setDOB }: any) => {
	const [value, onChange] = useState<Value>(new Date())
	const [showPicker, setShowPicker] = useState(false)
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		setShowPicker(false)
	}, [value])

	const setInputFocus = () => {
		inputRef.current ? inputRef.current.focus() : null
	}

	const formattedValue = value ? format(value as Date, "MM-DD-YYYY") : ""

	return (
		<div className="relative w-full">
			<div
				id="input-overlay"
				onClick={() => {
					setInputFocus()
					setShowPicker(true)
				}}
				className="absolute z-20 w-full h-10 rounded-lg cursor-text opacity-20 bg-zinc-600/50"></div>
			<input
				ref={inputRef}
				id="DOB"
				name="dob"
				required
				type="text"
				// selected={dob}
				onChange={(date: any) => {
					// Format the date
					const formattedDate = value
						? format(value as Date, "MM-DD-YYYY")
						: ""
					updateFields({ DOB: formattedDate })
					setDOB(date)
				}}
				onClick={() => setShowPicker(!showPicker)}
				value={formattedValue}
				className="block w-full px-2 py-2 text-center text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			/>

			{showPicker && (
				<>
					<div
						className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen"
						onClick={() => setShowPicker(false)}></div>
					<Calendar
						onChange={onChange}
						value={value}
						minDate={new Date(1920, 0, 1)}
						maxDate={new Date()}
						className="absolute md:-translate-x-[22.5%] min-w-[400px]  z-10 flex-col items-center gap-1 py-6 mt-2 text-lg text-center bg-white border-2 shadow-lg justify-evenly rounded-xl border-zinc-400 w-fit"
					/>
				</>
			)}
		</div>
	)
}

export default CustomCalendar
