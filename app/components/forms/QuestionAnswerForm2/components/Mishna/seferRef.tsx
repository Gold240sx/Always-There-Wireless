import { useState } from "react"
import { Controller } from "react-hook-form"
import { Label } from "flowbite-react"
import mishnahRef from "@context/mishnahRef"
// import { DropdownValue } from "./QnAtypes"
import Select from "react-select"
// import ChapterRefComponent from "./chapterRef"
import SectionRefComponent from "./tractateRef"
// import { MdDeleteForever } from "react-icons/md"
import { MdOutlineDeleteOutline } from "react-icons/md"

const SeferRefComponent = ({
	field,
	index: seferIndex,
	// key,
	control,
	// chapter,
	setValue,
	removeSeferRef,
	seferRefFields,
}: any) => {
	const [selectedSefer, setSelectedSefer] = useState(undefined)
	const [selectedSection, setSelectedSection] = useState({
		value: undefined,
		label: undefined,
	})
	const SeferList = [] as any[]
	mishnahRef.forEach((sefer) => {
		if (sefer.name !== "total") {
			SeferList.push({
				// change the label to the sefer.name + " " + sefer.subject
				label: sefer.name + " (" + sefer.subject + ")",
				value: sefer.name,
			})
		}
	})

	return (
		<div
			id={`seferRef-Sefer-${seferIndex}`}
			key={field.id}
			className="grid grid-cols-12">
			{/* Sefer */}
			<div
				className={`${
					selectedSefer
						? selectedSection.value == undefined
							? "col-span-7"
							: "col-span-5"
						: "col-span-11 pr-2"
				} relative px-1 mb-2`}>
				{/* <p>{selectedSection.value}</p> */}
				<Label
					htmlFor={`SeferRefs[${seferIndex}].sefer`}
					value="Sefer"
					className="px-1 text-sm font-semibold leading-6 text-gray-900 "
				/>
				<Controller
					name={`SeferRefs[${seferIndex}].sefer`}
					control={control}
					render={({ field }: any) => (
						<Select
							{...field}
							className="mb-4 rounded-lg bg-[#F9FAFB]"
							options={SeferList}
							placeholder="Sefer"
							isSearchable
							onChange={(selectedOption: DropdownValue) => {
								field.onChange(selectedOption || "")
								setSelectedSefer(selectedOption?.value) // Update selected sefer
								console.log(selectedOption)
							}}
							styles={
								{
									// ... (existing styles)
								}
							}
						/>
					)}
				/>
			</div>
			{/*  additional questions (mapped array)*/}
			{selectedSefer && (
				<div
					id={`Sefer-map-container`}
					className={`${
						selectedSefer
							? selectedSection.value == undefined
								? "col-span-4 pr-2"
								: "col-span-6 pr-2"
							: "col-span-11 pr-2"
					} relative px-1 mb-2`}>
					{/* {mishnahRef.map((section: any, sectionIndex: number) => ( */}
					<SectionRefComponent
						// section={selectedSection}
						// key={`setion-${sectionIndex}`}
						// chapterIndex={sectionIndex}
						selectedSefer={selectedSefer}
						field={field}
						seferIndex={seferIndex}
						control={control}
						// setValue={setValue}
						selectedSection={selectedSection}
						setSelectedSection={setSelectedSection}
					/>
					{/* ))} */}
					{/* {selectedSefer.sections.map((section, index) => (
						<div key={index}>
							<h2>{section.section}</h2>
							<p>Chapters: {section.chapters}</p>
						</div>
					))} */}
					{/* {selectedSefer && (
						<div>
							<p className="whitespace-nowrap">
								SelectedSefer: {selectedSefer}
							</p>
							<pre>
								Data
								{
									(JSON.stringify(
										mishnahRef
											.filter(
												(sefer) =>
													sefer.name == selectedSefer
											)[0]
											.sections.flatMap(
												(section) => section.section
											),
										null,
										4
									),
									null,
									2)
								}
							</pre>
						</div>
					)} */}
					{/* <pre>Data: {JSON.stringify(field, null, 2)}</pre> */}
				</div>
			)}
			<button
				className="text-[27px] disabled:text-zinc-300 disabled:border-zinc-200 text-zinc-600 dark:disabled:text-zinc-700 dark:disabled:border-zinc-800 hover:border-red-400 hover:text-red-600 close delete h-[40px] mt-[22px] pb-0  pl-[16%]  rounded-lg hover:bg-zinc-50 cursor-pointer disabled:hover:bg-transparent disabled:cursor-default border-zinc-300 border col-span-1 max-h-[60px]"
				disabled={seferRefFields.length === 1}
				onClick={() => {
					if (seferRefFields.length > 1) {
						removeSeferRef(seferIndex)
					}
				}}>
				{/* X */}
				{/* <MdDeleteForever /> */}
				<MdOutlineDeleteOutline />
			</button>
		</div>
	)
}

export default SeferRefComponent
