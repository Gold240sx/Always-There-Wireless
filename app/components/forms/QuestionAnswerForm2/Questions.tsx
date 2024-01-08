"use client"
import * as React from "react"
import { useState, useEffect } from "react"
import { format, utcToZonedTime } from "date-fns" // date-fns-tz alternative for local time Zoned time
import {
	useForm,
	SubmitHandler,
	FormProvider,
	useFieldArray,
	Controller,
	useFormContext,
} from "react-hook-form"
import { QuestionsSchema } from "./formSupport/formSchema"
import { Button, Label, Textarea, TextInput } from "flowbite-react"
import { z } from "zod"
import { ExclamationCircleIcon } from "@heroicons/react/20/solid"
import Select from "react-select"

import BibleRefComponent from "./components/Bible/BibleRef"
import SeferRefComponent from "./components/Mishna/seferRef"
import { SiteParams } from "@context/library"

type QuestionsProps = {
	store: z.infer<typeof QuestionsSchema>
	onSubmit: SubmitHandler<z.infer<typeof QuestionsSchema>>
}

const Questions: React.FC<QuestionsProps> = ({ onSubmit, store }) => {
	// const {
	// 	register,
	// 	control,
	// 	setValue,
	// 	reset,
	// 	formState: { errors, isValid },
	// } = useForm({
	// 	// defaultValues: updatedStore,
	// 	mode: "onChange",
	// })

	const {
		register,
		control,
		setValue,
		reset,
		formState: { errors },
	} = useFormContext() // useFormContext instead of useForm to remember inputted Fields up until their submitted.

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

	const {
		fields: seferRefFields,
		append: appendSeferRef,
		remove: removeSeferRef,
	} = useFieldArray({
		name: "SeferRefs",
		control,
	})

	const { categoryOptions } = SiteParams

	return (
		<div className=" col-span-full gap-y-4 flex flex-col px-6">
			<div className="rounded-xl col-span-full gap-6 flex flex-col">
				{/* Dynamic Form Fields */}
				{QnAFields.map((field, index) => {
					return (
						<div key={field.id} className="flex flex-col">
							<div className="flex flex-col gap-2 bg-white rounded-xl h-full w-full p-3 my-3 sm:my-0 ">
								{/* Question */}
								<section className="col-span-full ">
									<h1 className="text-5xl font-semibold pt-5 pb-8 px-1 text-zinc-200">
										Question {index + 1}
									</h1>
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
										<div className="relative mt-2">
											<div className="absolute inset-y-0 left-0 flex items-center">
												<label
													htmlFor="questionLanguage"
													className="sr-only">
													Language
												</label>
												<select
													id="questionLanguage"
													{...register(
														`QnA.${index}.language` as const,
														{
															required: true,
														}
													)}
													className="h-full py-0 z-[1] pl-4 -translate-y-[8px] text-gray-500 bg-transparent border-0 rounded-lg rounded-r-none border-transparent bg-none pr-9 focus:ring-2  focus:ring-inset focus:ring-[#07B6D4] sm:text-sm"
													autoComplete="language">
													<option>EN</option>
													<option>ES</option>
													<option>HE</option>
												</select>
											</div>
											<Textarea
												// type="text"
												id={`question-${index}`}
												// rows={2}
												className="block -translate-y-[8px] no-scrollbar w-full py-4 bg-[#F9FAFB] h-fit rounded-lg border-0 text-lg  px-3.5  pl-24 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:placeholder:opacity-0 focus:ring-2 focus:ring-inset focus:ring-[#07B6D4] sm:leading-6"
												placeholder="Your Question"
												{...register(
													`QnA.${index}.question` as const,
													{
														required: true,
													}
												)}
											/>
											{errors?.QnA?.[index]?.question && (
												<div className="absolute -translate-y-[8px]  inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
													<ExclamationCircleIcon
														className="w-5 h-5 text-red-500"
														aria-hidden="true"
													/>
												</div>
											)}
										</div>
										{errors?.QnA?.[index]?.question && (
											<p
												className="pl-2 mt-2 text-sm -translate-y-[8px] text-red-600/60"
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
								{/* Question TimeStamp */}
								<section className="col-span-full sm:col-span-5">
									<div className="relative flex flex-col gap-1 section">
										<div className="flex justify-between px-1">
											<Label
												htmlFor={`timeStamp-${index}`}
												value="Question Time Stamp"
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
												defaultValue={field.timeStamp}
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
										{errors?.QnA?.[index]?.timeStamp && (
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
								{/* Question Categories */}
								<section className="col-span-full sm:col-span-5">
									<div className="relative flex flex-col gap-1 section">
										<div className="flex justify-between px-1">
											<Label
												htmlFor={`categories-${index}`}
												value="Categories"
												className="block text-sm font-semibold leading-6 text-gray-900"
											/>
											<span
												className="text-sm leading-6 text-gray-500"
												id={`categories-${index}-required`}>
												Required
											</span>
										</div>
										<div className="relative">
											<Controller
												name={`QnA.${index}.categories`}
												control={control}
												render={({ field }: any) => (
													<Select
														{...field.categories}
														isMulti
														className="h-full mb-4 rounded-lg bg-[#F9FAFB]"
														options={
															categoryOptions
														}
														onChange={(
															selectedOptions: any
														) => {
															const formattedOptions =
																selectedOptions.map(
																	(
																		option: any
																	) => ({
																		value: option.value,
																		label: option.label,
																	})
																)
															field.onChange(
																formattedOptions
															)
														}}
														placeholder="Categories"
														isSearchable
														// onChange={(
														// 	selectedOption
														// ) => {
														// 	return field.onChange(
														// 		selectedOption ||
														// 			""
														// 	)
														// }}
														styles={{
															control: (
																baseStyles: any,
																state: any
															) => ({
																...baseStyles,
																borderColor:
																	state.isFocused
																		? "#07B6D4"
																		: "#D1D5DB",
																boxShadow:
																	state.isFocused
																		? "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) #07B6D4"
																		: "",
																backgroundColor:
																	"#F9FAFB",
																borderRadius:
																	"0.375rem",
																paddingBlock:
																	"2.3px",
															}),
														}}
													/>
												)}
											/>
											{errors?.QnA?.[index]
												?.categories && (
												<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
													<ExclamationCircleIcon
														className="w-5 h-5 text-red-500"
														aria-hidden="true"
													/>
												</div>
											)}
										</div>
										{errors?.QnA?.[index]?.categories && (
											<p
												className="pl-2 mt-2 text-sm text-red-600/60"
												id="categories-error">
												{/* {
													errors?.QnA?.[index]
														?.categories
														?.message
												} */}
												Invalid Categories
											</p>
										)}
									</div>
								</section>
								{/* Answer */}
								<section className="col-span-full ">
									<div className="relative flex flex-col gap-1 section">
										<div className="flex justify-between px-1">
											<Label
												htmlFor={`answer-${index}`}
												value="Answer"
												className="block text-sm font-semibold leading-6 text-gray-900"
											/>
											<span
												className="text-sm leading-6 text-gray-500"
												id={`answer-${index}-required`}>
												Required
											</span>
										</div>
										<div className="relative mt-2">
											<Textarea
												// type="text"
												id={`answer-${index}`}
												// rows={2}
												className="block -translate-y-[8px] no-scrollbar w-full py-4 bg-[#F9FAFB] h-fit rounded-lg border-0 text-lg  px-3.5   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:placeholder:opacity-0 focus:ring-2 focus:ring-inset focus:ring-[#07B6D4] sm:leading-6"
												placeholder="Your Answer"
												{...register(
													`QnA.${index}.answer` as const,
													{
														required: false,
													}
												)}
											/>
											{errors?.QnA?.[index]?.answer && (
												<div className="absolute -translate-y-[8px]  inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
													<ExclamationCircleIcon
														className="w-5 h-5 text-red-500"
														aria-hidden="true"
													/>
												</div>
											)}
										</div>
										{errors?.QnA?.[index]?.answer && (
											<p
												className="pl-2 mt-2 text-sm -translate-y-[8px] text-red-600/60"
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
								{/* Question Time Period */}
								<section className="col-span-full sm:col-span-5">
									<div className="relative flex flex-col gap-1 section">
										<div className="flex justify-between px-1">
											<Label
												htmlFor={`questionTimePeriod-${index}`}
												value="Question Time Period"
												className="block text-sm font-semibold leading-6 text-gray-900"
											/>
										</div>
										<div className="relative">
											<TextInput
												id={`questionTimePeriod-${index}`}
												placeholder="Time period"
												{...register(
													`QnA.${index}.questionTimePeriod` as const,
													{
														required: true,
													}
												)}
												className={
													errors?.QnA?.[index]
														?.questionTimePeriod
														? "error"
														: "placeholder:opacity-0"
												}
												defaultValue={
													field.questionTimePeriod
												}
											/>
											{errors?.QnA?.[index]
												?.questionTimePeriod && (
												<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
													<ExclamationCircleIcon
														className="w-5 h-5 text-red-500"
														aria-hidden="true"
													/>
												</div>
											)}
										</div>
										{errors?.QnA?.[index]
											?.questionTimePeriod && (
											<p
												className="pl-2 mt-2 text-sm text-red-600/60"
												id="questionTimePeriod-error">
												{/* {
													errors?.QnA?.[index]
														?.timeStamp
														?.message
												} */}
												Please include Time Period
											</p>
										)}
									</div>
								</section>

								{/* Question References */}
								<div
									id="question-reference-section"
									className="border rounded-lg mt-5 p-4 flex flex-col gap-4">
									<h2 className="text-semibold text-2xl">
										{" "}
										Question References
									</h2>
									{/* Question Bible Refs */}
									<section className=" col-span-full">
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
									{/*  add a Bible Ref Button*/}
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

									{/* Question Mishnah Refs */}
									<section className=" col-span-full">
										{seferRefFields.map(
											(seferField, index) => (
												<SeferRefComponent
													seferRefFields={
														seferRefFields
													}
													removeSeferRef={
														removeSeferRef
													}
													control={control}
													setValue={setValue}
													field={seferField}
													index={index}
													key={index}
												/>
											)
										)}
									</section>
									{/*  add Mishnah Ref Button*/}
									<div className="p-3 col-span-full">
										<Button
											type="button"
											className="flex ml-auto"
											onClick={() => {
												appendSeferRef({
													sefer: undefined,
													chapters: [
														{
															section: undefined,
															chapters: [
																{
																	chapter:
																		undefined,
																},
															],
														},
													],
												})
											}}>
											Add a Mishnah Reference
										</Button>
									</div>

									{/* External Refs*/}
									<section className="col-span-full sm:col-span-5">
										<div className="relative flex flex-col gap-1 section">
											<div className="flex justify-between px-1">
												<Label
													htmlFor={`questionTimePeriod-${index}`}
													value="Question External Refs"
													className="block text-sm font-semibold leading-6 text-gray-900"
												/>
											</div>
											<div className="relative">
												<TextInput
													id={`questionTimePeriod-${index}`}
													placeholder="Time period"
													{...register(
														`QnA.${index}.questionTimePeriod` as const,
														{
															required: true,
														}
													)}
													className={
														errors?.QnA?.[index]
															?.questionTimePeriod
															? "error"
															: "placeholder:opacity-0"
													}
													defaultValue={
														field.questionTimePeriod
													}
												/>
												{errors?.QnA?.[index]
													?.questionTimePeriod && (
													<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
														<ExclamationCircleIcon
															className="w-5 h-5 text-red-500"
															aria-hidden="true"
														/>
													</div>
												)}
											</div>
											{errors?.QnA?.[index]
												?.questionTimePeriod && (
												<p
													className="pl-2 mt-2 text-sm text-red-600/60"
													id="questionTimePeriod-error">
													{/* {
														errors?.QnA?.[index]
															?.timeStamp
															?.message
													} */}
													Please include Time Period
												</p>
											)}
										</div>
									</section>
								</div>
								{/* Delete Question */}
								<Button
									type="button"
									disabled={QnAFields.length === 1}
									className="flex -translate-y-[8px] h-fit mt-9 col-span-full sm:col-span-2"
									onClick={() => {
										if (QnAFields.length > 1) {
											removeQnA(index)
										}
									}}>
									Delete Question {index + 1}
								</Button>
							</div>
						</div>
					)
				})}
			</div>

			{/* Add Dynamic Group Button*/}
			<div className="p-3 col-span-full">
				<Button
					type="button"
					className="flex ml-auto"
					onClick={() => {
						appendQnA({
							question: "",
							timeStamp: "",
							language: "EN",
							answer: "",
							bibleRef: {
								book: "",
								verse: "",
							},
							extRef: "",
							categories: [],
						})
					}}>
					Add a Question
				</Button>
			</div>
		</div>
	)
}

export default Questions
