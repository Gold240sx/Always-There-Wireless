"use client"
/* eslint-disable */
import React, { useEffect, useState } from "react"
import { Button, Label, TextInput } from "flowbite-react"
import { getMonth, getDate, format, getYear } from "date-fns"
import { ExclamationCircleIcon } from "@heroicons/react/20/solid"
import { BibleRef } from "@context/library"
import Select from "react-select"
import * as z from "zod"
import { useForm, useFieldArray, Controller } from "react-hook-form"

const date = new Date()
// const currentYear = format(date, "yy")
const currentYear = getYear(date)
const currentMonth = getMonth(date)
const currentDay = getDate(date)

const QAFormSchema = z.object({
	showDate: z
		.object({
			MM: z.number().int().min(1).max(12),
			// .transform((v) => Number(v) || 0),
			DD: z.number().int().min(1).max(31),
			// .transform((v) => Number(v) || 0),
			YY: z.number().min(1).max(currentYear),
			// .transform((v) => Number(v) || 0),
		})
		.optional(),
	BibleRefs: z.array(
		z.object({
			// bible ref
			book: z.string(),
			chapters: z
				.array(
					z.object({
						// ref
						chapter: z.number().nullable(),
						verses: z
							.array(
								z.object({
									// verse
									verse: z.number().nullable(),
									span: z.boolean().optional(),
									verseTo: z.number().nullable().optional(),
								})
							)
							.optional(),
					})
				)
				.optional(),
		})
	),
	QnA: z.array(
		z.object({
			question: z
				.string()
				.min(1, { message: "Please enter a valid Question" }),
			timeStamp: z
				.string()
				.min(5, { message: "Time Stamp required" })
				.url({ message: "Invalid URL" }),
		})
	),
})

type FormValues = z.infer<typeof QAFormSchema>

const BibleRefComponent = ({
	field,
	index: bookIndex,
	key,
	control,
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
							: "col-span-5"
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
							onChange={(selectedOption) => {
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
								: "col-span-6 pr-2"
							: "col-span-11 pr-2"
					} relative px-1 mb-2`}>
					{field.chapters.map(
						(chapter: any, chapterIndex: number) => (
							<ChapterRefComponent
								chapter={chapter}
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
				className="text-xl  h-fit my-auto aspect-square p-1 rounded-lg border-zinc-300 border col-span-1"
				disabled={bibleRefFields.length === 1}
				onClick={() => {
					if (bibleRefFields.length > 1) {
						removeBibleRef(bookIndex)
					}
				}}>
				X
			</button>
		</div>
	)
}

const ChapterRefComponent = ({
	selectedBook,
	chapter,
	chapterIndex,
	control,
	field,
	setValue,
	bookIndex,
	selectedChapter,
	setSelectedChapter,
}: {
	selectedBook: string
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

	if (selectedBookData) {
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

function QuestionAnswerForm() {
	const [isLoading, setIsLoading] = useState(false)
	const {
		register,
		control,
		handleSubmit,
		reset,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			QnA: [{ question: "", timeStamp: "" }],
			showDate: {
				DD: currentDay,
				MM: currentMonth,
				YY: currentYear,
			},
			BibleRefs: [
				{
					book: undefined,
					chapters: [
						{ chapter: undefined, verses: [{ verse: undefined }] },
					],
				},
			],
		},
		mode: "onBlur",
	})
	const {
		// rename the values to allow for more than 1 dynamically rendered field
		// typically would be:  // const { fields, append, remove } = useFieldArray({
		fields: QnAFields,
		append: appendQnA,
		remove: removeQnA,
	} = useFieldArray({
		name: "QnA",
		control,
	})

	const {
		fields: bibleRefFields,
		append: appendBibleRef,
		remove: removeBibleRef,
	} = useFieldArray({
		name: "BibleRefs",
		control,
	})
	// const selectedBookData = BibleRef.find((book) => book.name === selectedBook)

	const onSubmit = (data: FormValues) => {
		setIsLoading(true)
		// await new Promise((resolve) => setTimeout(resolve, 2000))
		console.log("Form Data", data)
		setIsLoading(false)
		// reset()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="grid w-full grid-cols-12 gap-4 p-4 mt-4 bg-white/40 rounded-xl min-h-16">
				<h1 className="text-3xl text-yellow-500">QuestionForm</h1>
				<p className="col-span-full">Upload your question</p>
				{/* <div className="grid grid-cols-12 mt-10 gap-x-6 gap-y-8"> */}
				<div className=" col-span-full">
					{/* start individual inputs */}
					{/* Render dynamic inputs for questions */}
					<div className="rounded-xl sm:bg-white sm:p-3 mb-6">
						{QnAFields.map((field, index) => {
							return (
								<div
									key={field.id}
									className="flex flex-col gap-4 ">
									<div className="grid grid-cols-12 gap-4 p-3 my-3 bg-white sm:my-0 rounded-xl sm:bg-transparent">
										<section className="col-span-full sm:col-span-5">
											<div className="relative flex flex-col gap-1 section">
												<div className="flex justify-between px-1">
													<Label
														htmlFor={`question-${index}`}
														value="Question"
														className="block text-sm font-semibold leading-6 text-gray-900"
													/>
													<span
														className="text-sm leading-6 text-gray-500"
														id={`question-${index}-required`}>
														Required
													</span>
												</div>
												<div className="relative">
													<TextInput
														id={`question-${index}`}
														placeholder="Question"
														{...register(
															`QnA.${index}.question` as const,
															{
																required: true,
															}
														)}
														className={
															errors?.QnA?.[index]
																?.question
																? "error"
																: "w-full"
														}
														defaultValue={
															field.question
														}
													/>
													{errors?.QnA?.[index]
														?.question && (
														<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
															<ExclamationCircleIcon
																className="w-5 h-5 text-red-500"
																aria-hidden="true"
															/>
														</div>
													)}
												</div>
												{errors?.QnA?.[index]
													?.question && (
													<p
														className="pl-2 mt-2 text-sm text-red-600/60"
														id="phoneNo-error">
														{/* {
															errors?.QnA?.[index]
																?.question
																?.message
														} */}
														Invalid question
													</p>
												)}
											</div>
										</section>
										<section className="col-span-full sm:col-span-5">
											<div className="relative flex flex-col gap-1 section">
												<div className="flex justify-between px-1">
													<Label
														htmlFor={`timeStamp-${index}`}
														value="Time Stamp"
														className="block text-sm font-semibold leading-6 text-gray-900"
													/>
													<span
														className="text-sm leading-6 text-gray-500"
														id={`timeStamp-${index}-required`}>
														Required
													</span>
												</div>
												<div className="relative">
													<TextInput
														id={`timeStamp-${index}`}
														placeholder="timeStamp"
														{...register(
															`QnA.${index}.timeStamp` as const,
															{
																required: true,
															}
														)}
														className={
															errors?.QnA?.[index]
																?.timeStamp
																? "error"
																: "placeholder:opacity-0"
														}
														defaultValue={
															field.timeStamp
														}
													/>
													{errors?.QnA?.[index]
														?.timeStamp && (
														<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
															<ExclamationCircleIcon
																className="w-5 h-5 text-red-500"
																aria-hidden="true"
															/>
														</div>
													)}
												</div>
												{errors?.QnA?.[index]
													?.timeStamp && (
													<p
														className="pl-2 mt-2 text-sm text-red-600/60"
														id="phoneNo-error">
														{/* {
															errors?.QnA?.[index]
																?.timeStamp
																?.message
														} */}
														Invalid Time Stamp
													</p>
												)}
											</div>
										</section>
										<Button
											type="button"
											disabled={QnAFields.length === 1}
											className="flex mt-auto col-span-full sm:col-span-2"
											onClick={() => {
												if (QnAFields.length > 1) {
													removeQnA(index)
												}
											}}>
											Delete
										</Button>
									</div>
								</div>
							)
						})}
						<div className="p-3 col-span-full">
							<Button
								type="button"
								className="flex ml-auto"
								onClick={() => {
									appendQnA({
										question: "",
										timeStamp: "",
									})
								}}>
								Add a Question
							</Button>
						</div>
					</div>
					{/* Bible Verse Picker (Array)*/}
					<div className="rounded-xl sm:bg-white sm:p-3 grid-cols-12 grid">
						<Label
							value="Video Bible Refs Array"
							className="col-span-full text-2xl font-semibold"
						/>
						{/* dynamic bible refs */}
						<section className="p-4 col-span-full">
							{bibleRefFields.map((field, index) => (
								<BibleRefComponent
									bibleRefFields={bibleRefFields}
									removeBibleRef={removeBibleRef}
									control={control}
									setValue={setValue}
									field={field}
									index={index}
									key={index}
								/>
							))}
						</section>
						<div className="p-3 col-span-full">
							<Button
								type="button"
								className="flex ml-auto"
								onClick={() => {
									appendBibleRef({
										book: undefined,
										chapters: [
											{
												chapter: undefined,
												verses: [
													{
														verse: undefined,
													},
												],
											},
										],
									})
								}}>
								Add a Bible Reference
							</Button>
						</div>
					</div>

					{/* date pick */}
					<div id="date pick" className="gap-1 p-3 w-fit">
						<div className="relative col-span-6 px-1 mb-2">
							<Label
								htmlFor="showDate"
								value="Show Date"
								className="text-xl font-semibold leading-6 text-gray-900 "
							/>
						</div>
						<div className="grid grid-cols-6 gap-2 px-2 ">
							<div className="col-span-1 w-fit">
								<Label
									htmlFor="showDate.mm"
									value="MM"
									className="px-1 text-sm font-semibold leading-6 text-gray-900 "
								/>
								<TextInput
									id="showdate.mm"
									style={{
										textAlign: "center",
										fontSize: "14px",
									}}
									{...register("showDate.MM")}
									placeholder="Month"
								/>
							</div>
							<div className="col-span-1 w-fit">
								<Label
									htmlFor="showDate.dd"
									value="DD"
									className="px-1 text-sm font-semibold leading-6 text-gray-900 "
								/>
								<TextInput
									id="showdate.dd"
									style={{
										textAlign: "center",
										fontSize: "14px",
									}}
									{...register("showDate.DD")}
									placeholder="Day"
								/>
							</div>
							<div className="col-span-1 w-fit">
								<Label
									htmlFor="showDate.yy"
									value="YYYY"
									className="px-1 text-sm font-semibold leading-6 text-gray-900 "
								/>
								<TextInput
									id="showdate.yy"
									style={{
										textAlign: "center",
										fontSize: "14px",
									}}
									{...register("showDate.YY")}
									placeholder="Year"
								/>
							</div>
						</div>
					</div>

					{/* <pre>{JSON.stringify(VerseList, null, 2)}</pre> */}
				</div>
				<Button
					type="button"
					className="col-span-3 col-start-2 py-2 mt-4 text-2xl"
					onClick={() =>
						reset({
							QnA: [{ question: "", timeStamp: "" }],
						})
					}>
					Reset Form
				</Button>

				<Button
					type="submit"
					disabled={isLoading}
					className={` ${
						isLoading ? "bg-zinc-100" : "bg-teal-400"
					}  py-2 mt-4 col-span-7 text-2xl`}>
					Submit
				</Button>
			</div>
		</form>
	)
}
export default QuestionAnswerForm
