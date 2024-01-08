import { useState } from "react"
import { Controller } from "react-hook-form"
import { Label } from "flowbite-react"
import { BibleRef } from "@/app/context/bibleRef"
import { DropdownValue } from "./QnAtypes"
import Select from "react-select"
import ChapterRefComponent from "./ChapterRef"
// import { MdDeleteForever } from "react-icons/md"
import { MdOutlineDeleteOutline } from "react-icons/md"

const BibleRefComponent = ({
	field,
	index: bookIndex,
	// key,
	control,
	chapter,
	setValue,
	removeBibleRef,
	bibleRefFields,
}: any) => {
	const [selectedBook, setSelectedBook] = useState(undefined)
	const [selectedChapter, setSelectedChapter] = useState({
		value: undefined,
		label: undefined,
	})
	const BookList = [] as any[]
	BibleRef.forEach((book) => {
		if (book.name !== "total") {
			BookList.push({
				label: book.name,
				value: book.name.toUpperCase(),
			})
		}
	})
	return (
		<div
			id={`bibleRef-Book-${bookIndex}`}
			key={field.id}
			className="grid grid-cols-12">
			{/* Book */}
			<div
				className={`${
					selectedBook
						? selectedChapter.value == undefined
							? "col-span-7"
							: "col-span-4"
						: "col-span-11 pr-2"
				} relative px-1 mb-2`}>
				{/* <p>{selectedChapter.value}</p> */}
				<Label
					htmlFor={`BibleRefs[${bookIndex}].book`}
					value="Book"
					className="px-1 text-sm font-semibold leading-6 text-gray-900 "
				/>
				<Controller
					name={`BibleRefs[${bookIndex}].book`}
					control={control}
					render={({ field }: any) => (
						<Select
							{...field}
							className="mb-4 rounded-lg bg-[#F9FAFB]"
							options={BookList}
							placeholder="Book"
							isSearchable
							onChange={(selectedOption: DropdownValue) => {
								field.onChange(selectedOption || "")
								setSelectedBook(selectedOption?.label) // Update selected book
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
			{selectedBook && (
				<div
					id={`chapters-map-container`}
					className={`${
						selectedBook
							? selectedChapter.value == undefined
								? "col-span-4 pr-2"
								: "col-span-7 pr-2"
							: "col-span-11 pr-2"
					} relative px-1 mb-2`}>
					{field.chapters.map(
						(chapter: any, chapterIndex: number) => (
							<ChapterRefComponent
								chapter={chapter}
								key={`chapter-${chapterIndex}`}
								chapterIndex={chapterIndex}
								selectedBook={selectedBook}
								field={field}
								bookIndex={bookIndex}
								control={control}
								setValue={setValue}
								selectedChapter={selectedChapter}
								setSelectedChapter={setSelectedChapter}
							/>
						)
					)}
				</div>
			)}
			<button
				className="text-[27px] disabled:text-zinc-300 disabled:border-zinc-200 text-zinc-600 dark:disabled:text-zinc-700 dark:disabled:border-zinc-800 hover:border-red-400 hover:text-red-600 close delete h-[40px] mt-[22px] pb-0  text-center pl-[16%] rounded-lg hover:bg-zinc-50 cursor-pointer disabled:hover:bg-transparent disabled:cursor-default border-zinc-300 border col-span-1 max-h-[60px]"
				disabled={bibleRefFields.length === 1}
				onClick={() => {
					if (bibleRefFields.length > 1) {
						removeBibleRef(bookIndex)
					}
				}}>
				{/* X */}
				{/* <MdDeleteForever /> */}
				<MdOutlineDeleteOutline />
			</button>
		</div>
	)
}

export default BibleRefComponent
