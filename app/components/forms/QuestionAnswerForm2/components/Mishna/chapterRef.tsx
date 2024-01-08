import { Controller } from "react-hook-form"
import { useState } from "react"
import { Label } from "flowbite-react"
import SeferRef from "@/app/context/mishnahRef"
import Select from "react-select"

const ChapterRefComponent = ({
	field,
	sectionIndex,
	selectedSection,
	selectedSefer,
	control, // setValue,
	seferIndex, // chapter,
} // setSelectedChapter,
// selectedSepher,
: {
	selectedSefer: string
	// chapter: string
	field: any
	sectionIndex: number
	control: any
	seferIndex: number
	// setValue: any
	selectedSection: any
	// selectedSepher: any
	// setSelectedChapter: any
}) => {
	const [selectedChapterIndex, setSelectedChapterIndex] = useState(null)

	if (!selectedSefer || !selectedSection) {
		return null
	}

	const chaperCount = SeferRef.find(
		(sefer) => sefer.name === selectedSefer
	)?.sections.find((section) => section.section === selectedSection.value)
		?.chapters

	if (!chaperCount) {
		return null
	}

	const ChapterList = Array.from(Array(chaperCount), (_, i) => i).map(
		(chapter, index) => ({ label: chapter + 1, value: chapter + 1, index })
	)

	return (
		<div key={`chapter-${sectionIndex}`} className="w-1/2">
			<div className={``}>
				<Label
					htmlFor={`SeferRefs[${seferIndex}].chapters[${sectionIndex}].chapter`}
					value="Chapter"
					className="px-1  text-sm font-semibold leading-6 text-gray-900 "
				/>
				<Controller
					name={`SeferRefs[${seferIndex}].sections[${sectionIndex}].chapters[${selectedChapterIndex}].chapter}`}
					control={control}
					render={({ field }: any) => (
						<Select
							{...field}
							isSearchable
							options={ChapterList}
							className=""
							placeholder="Chapter"
							onChange={(selectedOption) => {
								field.onChange(selectedOption)
								setSelectedChapterIndex(selectedOption.index)
							}}
						/>
					)}
				/>
			</div>
		</div>
	)
}

export default ChapterRefComponent
