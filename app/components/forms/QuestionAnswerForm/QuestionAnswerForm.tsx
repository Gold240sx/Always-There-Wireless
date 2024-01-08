"use client"
/* eslint-disable */
import React, { useEffect, useState } from "react"
import { Button, Label, TextInput } from "flowbite-react"
import { getMonth, getDate, format, getYear } from "date-fns"
import { ExclamationCircleIcon } from "@heroicons/react/20/solid"
import { SiteParams, BibleRef } from "@context/library"
import Select from "react-select"
import * as z from "zod"
import { useForm, useFieldArray, Controller } from "react-hook-form"
import CreatableSelect from "react-select/creatable"

// local refactor
import { QAFormSchema, DropDownObject } from "./QnASchema"
import { FormValues } from "./QnAtypes"
import { onSubmit } from "./QnASubmit"
import BibleRefComponent from "./BibleRef"

//  toast
import { ToastAction } from "@components/shadcn/ui/toast"
import { useToast } from "@components/shadcn/ui/use-toast"

const date = new Date()
// const currentYear = format(date, "yy")
const currentYear = getYear(date)
const currentMonth = getMonth(date)
const currentDay = getDate(date)

function QuestionAnswerForm() {
	const [isLoading, setIsLoading] = useState(false)
	const [filteredSpeakers, setFilteredSpeakers] = useState<
		(typeof DropDownObject)[]
	>([])
	const [speakerDisabled, setSpeakerDisabled] = useState<Boolean>(true)
	const [channelIsOther, setChannelIsOther] = useState<Boolean>(false)
	const [allSpeakers, setAllSpeakers] = useState<(typeof DropDownObject)[]>(
		[]
	)
	const [bibleRefs, setBibleRefs] = useState<(typeof DropDownObject)[]>([])

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
			channel: { value: "", label: "" },
			speaker: [{ value: "", label: "" }],
			showDate: {
				DD: currentDay,
				MM: currentMonth,
				YY: currentYear,
			},
			showTitle: "",
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
	const styles = {
		control: (css: any, state: any) => ({
			...css,
			...(state.isDisabled && {
				pointerEvents: "auto",
				cursor: "not-allowed",
			}),
		}),
	}
	const { channels } = SiteParams

	const {
		fields: bibleRefFields,
		append: appendBibleRef,
		remove: removeBibleRef,
	} = useFieldArray({
		name: "BibleRefs",
		control,
	})
	// const selectedBookData = BibleRef.find((book) => book.name === selectedBook)

	return (
		<form
			onSubmit={handleSubmit((data) => onSubmit({ data, setIsLoading}))}>
			<div className="grid w-full grid-cols-12 gap-4 p-4 mt-4 bg-white/40 rounded-xl min-h-16 ">
				<h1 className="text-3xl text-yellow-500 mb-6">Video Form</h1>
				{/* <p className="col-span-full">Upload your question</p> */}
				{/* <div className="grid grid-cols-12 mt-10 gap-x-6 gap-y-8"> */}
				<div className=" col-span-full">
					{/* start individual inputs */}
					{/* Show Title */}
					<div className="relative col-span-4 px-1 mb-2">
						<Label
							htmlFor="showDate"
							value="Show Title and Date"
							className="text-lg font-semibold leading-6 text-gray-400 "
						/>
					</div>
					{/* Show Title and Date */}
					<div className="grid grid-cols-12">
						<div className="mt-auto mb-3 col-span-full md:col-span-8 ">
							<div className="flex justify-between px-1">
								<Label
									htmlFor="showTitle"
									value="Show Title"
									className="block text-sm font-semibold leading-6 text-gray-900"
								/>
								<span
									className="text-sm leading-6 text-gray-500"
									id="showTitle-required">
									Required
								</span>
							</div>
							{/*  */}
							<div className="relative">
								<TextInput
									id="showTitle"
									placeholder="Title of the Show"
									{...register("showTitle")}
									className="focus:placeholder:opacity-0"
								/>
								{/* )} */}
								{errors?.showTitle && (
									<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
										<ExclamationCircleIcon
											className="w-5 h-5 text-red-500"
											aria-hidden="true"
										/>
									</div>
								)}
							</div>
						</div>
						{/* date pick */}
						<div
							id="date pick"
							className="gap-1 p-3 pr-0 col-span-4">
							{/* <div className="relative col-span-4 px-1 mb-2">
								<Label
									htmlFor="showDate"
									value="Show Date"
									className="text-xl font-semibold leading-6 text-gray-900 "
								/>
							</div> */}
							<div className="grid grid-cols-4 gap-2 px-2 ">
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
											backgroundColor: "white",
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
											backgroundColor: "white",
										}}
										{...register("showDate.DD")}
										placeholder="Day"
									/>
								</div>
								<div className="col-span-2">
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
											backgroundColor: "white",
										}}
										{...register("showDate.YY")}
										placeholder="Year"
									/>
								</div>
							</div>
						</div>
					</div>
					{/* Channel */}
					<div className="col-span-full md:col-span-6 ">
						<div className="flex justify-between px-1">
							<Label
								htmlFor="channel"
								value="Channel"
								className="block text-sm font-semibold leading-6 text-gray-900"
							/>
							<span
								className="text-sm leading-6 text-gray-500"
								id="channel-required">
								Required
							</span>
						</div>
						<div className="relative">
							<Controller
								name="channel"
								control={control}
								render={({ field }: any) => (
									<Select
										{...field}
										// isMulti
										className="h-full mb-4 rounded-lg bg-[#F9FAFB]"
										options={channels.selectOptions}
										placeholder="Channel"
										isSearchable
										onChange={(selectedOption) => {
											return field.onChange(
												selectedOption || ""
											)
										}}
										styles={{
											control: (
												baseStyles: any,
												state: any
											) => ({
												...baseStyles,
												borderColor: state.isFocused
													? "#07B6D4"
													: "#D1D5DB",
												boxShadow: state.isFocused
													? "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) #07B6D4"
													: "",
												backgroundColor: "#F9FAFB",
												borderRadius: "0.375rem",
												paddingBlock: "2.3px",
											}),
										}}
									/>
								)}
							/>
							{errors?.channel && (
								<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
									<ExclamationCircleIcon
										className="w-5 h-5 text-red-500"
										aria-hidden="true"
									/>
								</div>
							)}
						</div>
					</div>
					{/* Speaker */}
					<div className="col-span-full md:col-span-6 ">
						<div className="flex justify-between px-1">
							<Label
								htmlFor="speaker"
								value="Rabbi / Speaker"
								className="block text-sm font-semibold leading-6 text-gray-900"
							/>
							<span
								className="text-sm leading-6 text-gray-500"
								id="speaker-required">
								Required
							</span>
						</div>
						{/*  */}
						<div className="relative">
							{channelIsOther && (
								<Controller
									name="speaker"
									control={control}
									render={({ field }: any) => (
										<CreatableSelect
											{...field}
											isMulti
											// isDisabled={speakerDisabled} // not needed because we know it's "Other"
											options={allSpeakers}
											placeholder="Speaker"
											isSearchable
											className={`${styles} ${
												!channelIsOther && "hidden"
											} h-full mb-4 rounded-lg bg-[#F9FAFB]`}
											onChange={(
												selectedOption: typeof DropDownObject
											) => {
												return field.onChange(
													selectedOption || ""
												)
											}}
											styles={{
												control: (
													baseStyles: any,
													state: any
												) => ({
													...baseStyles,
													borderColor: state.isFocused
														? "#07B6D4"
														: "#D1D5DB",
													boxShadow: state.isFocused
														? "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) #07B6D4"
														: "",
													backgroundColor: "#F9FAFB",
													borderRadius: "0.375rem",
													paddingBlock: "2.3px",
												}),
											}}
										/>
									)}
								/>
							)}

							{/* {!channelIsOther && ( */}
							<Controller
								name="speaker"
								control={control}
								render={({ field }: any) => (
									<Select
										{...field}
										isMulti
										isDisabled={speakerDisabled}
										options={filteredSpeakers}
										placeholder="Speaker"
										isSearchable
										className={`${styles} ${
											channelIsOther && "hidden"
										} h-full mb-4 rounded-lg bg-[#F9FAFB]`}
										onChange={(selectedOption) => {
											return field.onChange(
												selectedOption || ""
											)
										}}
										styles={{
											control: (
												baseStyles: any,
												state: any
											) => ({
												...baseStyles,
												borderColor: state.isFocused
													? "#07B6D4"
													: "#D1D5DB",
												boxShadow: state.isFocused
													? "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) #07B6D4"
													: "",
												backgroundColor: "#F9FAFB",
												borderRadius: "0.375rem",
												paddingBlock: "2.3px",
											}),
										}}
									/>
								)}
							/>
							{/* )} */}
							{errors?.channel && (
								<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
									<ExclamationCircleIcon
										className="w-5 h-5 text-red-500"
										aria-hidden="true"
									/>
								</div>
							)}
						</div>
					</div>
					{/* Render dynamic inputs for questions */}
					<div className="rounded-xl sm:bg-white sm:p-3 mb-6 mt-4">
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
										{/* <Button
											type="button"
											disabled={QnAFields.length === 1}
											className="flex mt-auto col-span-full sm:col-span-2"
											onClick={() => {
												if (QnAFields.length > 1) {
													removeQnA(index)
												}
											}}>
											Delete
										</Button> */}
										<button
											className={
												"text-xl disabled:text-zinc-300 disabled:border-zinc-200 dark:disabled:text-zinc-700 dark:disabled:border-zinc-800 close delete w-fit h-fit my-3.5 mt-[28px] mx-2  aspect-square pt-2 p-1 px-3 rounded-lg border-zinc-300 border col-span-1"
											}
											disabled={QnAFields.length === 1}
											onClick={() => {
												if (QnAFields.length > 1) {
													removeQnA(index)
												}
											}}>
											X
										</button>
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

					{/* <pre>{JSON.stringify(VerseList, null, 2)}</pre> */}
				</div>
				<Button
					type="button"
					className="col-span-3 col-start-2 py-2 mt-4 text-2xl"
					onClick={() =>
						reset({
							QnA: [{ timeStamp: "" }],
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
