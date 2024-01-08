import { Controller } from "react-hook-form"
import { Label } from "flowbite-react"
import SeferRef from "@/app/context/mishnahRef"
import Select from "react-select"
import ChapterRefComponent from "./chapterRef"

const SectionRefComponent = ({
	selectedSefer,
	// section,
	sectionIndex,
	control,
	field,
	// setValue,
	seferIndex,
	selectedSection,
	setSelectedSection, // key,
}: {
	selectedSefer: string
	// section: string
	// sectionIndex: number
	control: any
	field: any
	// setValue: any
	seferIndex: number
	selectedSection: any
	setSelectedSection: any
	// key: number
}) => {
	const selectedSeferSection = SeferRef.find(
		(sefer) => sefer.name === selectedSefer
	)?.sections

	const SectionList = selectedSeferSection?.flatMap((section) => [
		{ label: section.section, value: section.section },
	])

	// console.log(
	// 	"selectedSeferSection",
	// 	selectedSeferSection?.flatMap((section) => [
	// 		{ label: section.section, value: section.section },
	// 	])
	// )

	return (
		<div key={`section-${sectionIndex}`} className="flex gap-2">
			<div
				className={`${
					selectedSection.value === undefined ? "w-full" : "w-2/3"
				}`}>
				<Label
					htmlFor={`SeferRefs[${seferIndex}].sections[${sectionIndex}].section[${sectionIndex}]`}
					value="Tractate"
					className="px-1  text-sm font-semibold leading-6 text-gray-900"
				/>
				<Controller
					name={`SeferRefs[${seferIndex}].sections[${sectionIndex}].section[${sectionIndex}]`}
					control={control}
					render={({ field }: any) => (
						<Select
							{...field}
							isSearchable
							options={SectionList}
							className=""
							placeholder="Section"
							onChange={(selectedOption) => {
								field.onChange(selectedOption)
								setSelectedSection(selectedOption)
							}}
						/>
					)}
				/>
			</div>
			{/* Render verse dropdowns similarly if available */}
			{selectedSection.value !== undefined && (
				<ChapterRefComponent
					field={field}
					// sectionIndex={sectionIndex}
					seferIndex={seferIndex}
					control={control}
					selectedSefer={selectedSefer}
					setSelectedSection={setSelectedSection}
					selectedSection={selectedSection}
				/>
			)}
		</div>
	)
}

export default SectionRefComponent
