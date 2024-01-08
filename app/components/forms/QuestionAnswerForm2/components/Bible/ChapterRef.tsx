import { Controller } from "react-hook-form"
import { Label } from "flowbite-react"
import { BibleRef } from "@/app/context/bibleRef"
import Select from "react-select"
import VerseRefComponent from "./VerseRef"

const ChapterRefComponent = ({
	selectedBook,
	// chapter,
	chapterIndex,
	control,
	field,
	// setValue,
	bookIndex,
	selectedChapter,
	setSelectedChapter,
}: {
	selectedBook: string
	// chapter: string
	chapterIndex: number
	control: any
	field: any
	// setValue: any
	bookIndex: number
	selectedChapter: any
	setSelectedChapter: any
}) => {
	const ChapterList = BibleRef.flatMap((book) => {
		if (book.name === selectedBook) {
			const chapters = Object.entries(book.chapters)
				.filter(([key]) => key !== "total")
				.map(([chapterNum]) => ({
					label: chapterNum,
					value: chapterNum,
				}))
			return chapters
		}
		return []
	})
	const selectedBookChapters = BibleRef.find(
		(book) => book.name === selectedBook
	)?.chapters

	const selectedChapterVerses = selectedBookChapters
		? selectedBookChapters[selectedChapter]
		: []

	return (
		<div key={`chapter-${chapterIndex}`} className="flex gap-2">
			<div
				className={`${
					selectedChapter.value === undefined ? "w-full" : "w-1/2"
				}`}>
				<Label
					htmlFor={`BibleRefs[${bookIndex}].chapters[${chapterIndex}].chapter`}
					value="Chapter"
					className="px-1  text-sm font-semibold leading-6 text-gray-900 "
				/>
				<Controller
					name={`BibleRefs[${bookIndex}].chapters[${chapterIndex}].chapter`}
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
								setSelectedChapter(selectedOption)
							}}
						/>
					)}
				/>
			</div>
			{/* Render verse dropdowns similarly if available */}
			{selectedChapter.value !== undefined && (
				<VerseRefComponent
					field={field}
					chapterIndex={chapterIndex}
					bookIndex={bookIndex}
					control={control}
					selectedBook={selectedBook}
					selectedChapter={selectedChapter}
				/>
			)}
		</div>
	)
}

export default ChapterRefComponent
