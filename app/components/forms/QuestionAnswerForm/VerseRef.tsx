import { Controller } from "react-hook-form"
import { Label } from "flowbite-react"
import { BibleRef } from "@/app/context/bibleRef"
import Select from "react-select"

const VerseRefComponent = ({
	field,
	chapterIndex,
	bookIndex,
	control,
	selectedChapter,
	selectedBook,
}) => {
	const selectedBookData = BibleRef.find((book) => book.name === selectedBook)
	let VerseList: { label: string; value: string }[] = []

	if (selectedBookData?.chapters) {
		const chapterData = selectedBookData.chapters[selectedChapter.value]

		if (chapterData) {
			VerseList = Array.from({ length: chapterData }, (_, index) => ({
				label: (index + 1).toString(),
				value: (index + 1).toString(),
			}))
		}
	}

	return (
		<div
			className={`	${
				selectedChapter.value === undefined ? "w-full" : "w-1/2"
			}`}>
			{field.chapters[chapterIndex].verses && (
				<div>
					{field.chapters[chapterIndex].verses.map(
						(verse: any, verseIndex: number) => (
							<div key={`verse-${verseIndex}`}>
								<Label
									htmlFor={`BibleRefs[${bookIndex}].chapters[${chapterIndex}].verses[${verseIndex}].verse`}
									value={`Verse ${verseIndex + 1}`}
									className="px-1 text-sm font-semibold leading-6 text-gray-900"
								/>
								<Controller
									name={`BibleRefs[${bookIndex}].chapters[${chapterIndex}].verses[${verseIndex}].verse`}
									control={control}
									render={({ field }: any) => (
										<Select
											{...field}
											isSearchable
											options={VerseList}
											placeholder="Verse"
											// onChange={(
											// 	selectedOption
											// ) => {
											// 	field.onChange(
											// 		selectedOption ||
											// 			""
											// 	)
											// 	setValue(
											// 		"BibleRef.verse",
											// 		{
											// 			label: undefined,
											// 			value: undefined,
											// 		}
											// 	)
											// }}
											// ... (verse dropdown logic)
										/>
									)}
								/>
							</div>
						)
					)}
				</div>
			)}
		</div>
	)
}

export default VerseRefComponent
